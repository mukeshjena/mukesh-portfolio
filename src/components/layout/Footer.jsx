import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialMedia = [
    { 
      icon: FaFacebook, 
      url: socialLinks.facebook, 
      color: 'hover:text-blue-600',
      name: 'Facebook'
    },
    { 
      icon: FaTwitter, 
      url: socialLinks.twitter, 
      color: 'hover:text-blue-400',
      name: 'Twitter'
    },
    { 
      icon: FaLinkedin, 
      url: socialLinks.linkedin, 
      color: 'hover:text-blue-700',
      name: 'LinkedIn'
    },
    { 
      icon: FaInstagram, 
      url: socialLinks.instagram, 
      color: 'hover:text-pink-600',
      name: 'Instagram'
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-gray-800 dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.h3
                className="text-3xl font-bold font-heading gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                {personalInfo.name.split(' ')[0]}
              </motion.h3>
              <p className="text-gray-400 max-w-md">
                {personalInfo.description}
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span>by {personalInfo.name}</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-primary-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                      />
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    +91 {personalInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-center md:text-left"
            >
              <p>
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-4"
            >
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 dark:bg-gray-900 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp className="text-lg" />
      </motion.button>
    </footer>
  );
};

export default Footer;
