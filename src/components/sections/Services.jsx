import { useState, React } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMobile, FaPaintBrush, FaCode, FaTimes, FaCheck } from 'react-icons/fa';
import { services } from '../../data/portfolioData';

const Services = () =>
{
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    FaMobile,
    FaPaintBrush,
    FaCode,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const getServiceColor = (index) =>
  {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-pink-500 to-rose-600',
      'from-green-500 to-teal-600',
    ];
    return colors[index % colors.length];
  };

  const openModal = (service) =>
  {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () =>
  {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="services" className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                What I <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Professional services to help bring your digital ideas to life
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) =>
              {
                const IconComponent = iconMap[service.icon];
                const colorClass = getServiceColor(index);

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer"
                    onClick={() => openModal(service)}
                  >
                    <div className="bg-white dark:bg-dark-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                      {/* Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        initial={false}
                      />

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 10
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClass} flex items-center justify-center shadow-lg mb-6 relative z-10`}
                      >
                        {IconComponent && <IconComponent className="text-white text-2xl" />}
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Features Preview */}
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <FaCheck className="text-primary-600 dark:text-primary-400 text-sm" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                          {service.features.length > 2 && (
                            <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                              +{service.features.length - 2} more features
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <motion.div
                          className="flex items-center justify-between"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-primary-600 dark:text-primary-400 font-semibold group-hover:underline">
                            Learn More
                          </span>
                          <motion.div
                            className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            <span className="text-primary-600 dark:text-primary-400">→</span>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Hover effect border */}
                      <motion.div
                        className={`absolute inset-0 border-2 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-800 rounded-3xl transition-all duration-300`}
                        initial={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-dark-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-8 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getServiceColor(services.indexOf(selectedService))} flex items-center justify-center shadow-lg`}>
                    {iconMap[selectedService.icon] && (
                      (() =>
                      {
                        const IconComponent = iconMap[selectedService.icon];
                        return <IconComponent className="text-white text-lg" />;
                      })()
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {selectedService.description}
                </p>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  What's Included:
                </h4>

                <div className="grid gap-4">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-dark-100 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-primary-600 dark:text-primary-400 text-sm" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex justify-center">
                  <motion.button
                    onClick={() =>
                    {
                      closeModal();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started with This Service
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
