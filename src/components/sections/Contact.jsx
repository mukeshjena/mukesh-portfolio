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
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (type, title, message) => {
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('error', 'Error', 'Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you can integrate with EmailJS or any email service
      // For now, we'll simulate sending
      //await new Promise(resolve => setTimeout(resolve, 2000));
      const today = new Date();
      const dateStr = today.toLocaleString();
      const year = today.getFullYear();

      await emailjs.send(
        "muk3shjena",  // Replace with your EmailJS Service ID
        "muk3shjena-temp-us", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          date: dateStr,
          year: year,
          title: "New Inquiry from Portfolio Website"
        },
        "xhA1H071J0P1O_OWN" // Replace with your EmailJS Public Key
      );
      
      showNotification('success', 'Success', 'Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      showNotification('error', 'Error', 'Failed to send message. Please try again.');
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
      color: 'bg-red-500'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: 'Available 24/7',
      action: 'Text Me',
      link: socialLinks.whatsapp,
      color: 'bg-green-500'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      info: 'Professional Network',
      action: 'Connect Me',
      link: socialLinks.linkedin,
      color: 'bg-blue-600'
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
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
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
              <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                Talk to me
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card card-hover group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {method.info}
                        </p>
                      </div>
                    </div>
                    <motion.a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mt-4 group-hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ x: 5 }}
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
            <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
              Write Me Your Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaUser className="inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-300 dark:text-white transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaEnvelope className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-300 dark:text-white transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaMessage className="inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-300 dark:text-white resize-none transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
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
          <div className={`p-4 rounded-lg shadow-lg ${
            toastType === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
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
                <div className="text-sm">
                  {toastType === 'success' 
                    ? 'Your message has been sent successfully!' 
                    : 'Failed to send message. Please try again.'
                  }
                </div>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 text-white hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-1 bg-white/30 mt-2 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
