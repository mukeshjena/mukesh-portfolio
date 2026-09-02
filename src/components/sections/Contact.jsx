import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaLinkedin, 
  FaPaperPlane, 
  FaUser,
  FaCheck,
  FaTimes
} from 'react-icons/fa';

import { FaMessage } from 'react-icons/fa6';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { sendContactEmail } from '../../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showNotification('error', 'Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      showNotification('error', 'Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      showNotification('success', 'Your message has been sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form submission error:', error);
      showNotification('error', error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      info: personalInfo.email,
      action: 'Email Me',
      link: `mailto:${personalInfo.email}`,
      accent: 'bg-red-500/10 text-red-600 border-red-200/40 dark:border-red-800/40'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: 'Available 24/7',
      action: 'Text Me',
      link: socialLinks.whatsapp,
      accent: 'bg-green-500/10 text-green-600 border-green-200/40 dark:border-green-800/40'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      info: 'Professional Network',
      action: 'Connect Me',
      link: socialLinks.linkedin,
      accent: 'bg-blue-500/10 text-blue-600 border-blue-200/40 dark:border-blue-800/40'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-dark-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            Get in touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900 dark:text-zinc-100 tracking-tight">
                Talk to me
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card card-hover group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${method.accent} border transition-colors duration-200`}>
                        <method.icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-zinc-100">
                          {method.title}
                        </h4>
                        <p className="text-slate-600 dark:text-zinc-400 text-sm">
                          {method.info}
                        </p>
                      </div>
                    </div>
                    <motion.a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mt-4 transition-colors duration-200"
                    >
                      <span>{method.action}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900 dark:text-zinc-100 tracking-tight">
              Write Me Your Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                  <FaUser className="inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-slate-200/80 dark:border-white/[0.08] rounded-xl focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 bg-white dark:bg-dark-300 dark:text-white transition-colors duration-200"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                  <FaEnvelope className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-slate-200/80 dark:border-white/[0.08] rounded-xl focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 bg-white dark:bg-dark-300 dark:text-white transition-colors duration-200"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                  <FaMessage className="inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  rows="6"
                  className="w-full px-4 py-3 border border-slate-200/80 dark:border-white/[0.08] rounded-xl focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 bg-white dark:bg-dark-300 dark:text-white resize-none transition-colors duration-200"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <FaPaperPlane className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-4 z-50 max-w-sm"
        >
          <div className={`p-4 rounded-xl border ${
            toastType === 'success' 
              ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-700/40' 
              : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200/60 dark:border-red-700/40'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {toastType === 'success' ? (
                  <FaCheck className="text-xl" />
                ) : (
                  <FaTimes className="text-xl" />
                )}
              </div>
              <div>
                <div className="font-semibold">
                  {toastType === 'success' ? 'Success' : 'Error'}
                </div>
                <div className="text-sm opacity-80">
                  {toastMessage || (toastType === 'success' 
                    ? 'Your message has been sent successfully!' 
                    : 'Failed to send message. Please try again.')
                  }
                </div>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                <FaTimes />
              </button>
            </div>
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className={`h-1 mt-2 rounded-full ${
                toastType === 'success' ? 'bg-emerald-300/50' : 'bg-red-300/50'
              }`}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
