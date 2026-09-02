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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20
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
      scale: 0.95,
      y: 20,
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

  const getServiceAccent = (index) =>
  {
    const accents = [
      { icon: 'text-blue-600', bg: 'bg-blue-500/10 border-blue-200/40 dark:border-blue-800/40', hover: 'group-hover:text-blue-600' },
      { icon: 'text-rose-600', bg: 'bg-rose-500/10 border-rose-200/40 dark:border-rose-800/40', hover: 'group-hover:text-rose-600' },
      { icon: 'text-emerald-600', bg: 'bg-emerald-500/10 border-emerald-200/40 dark:border-emerald-800/40', hover: 'group-hover:text-emerald-600' },
    ];
    return accents[index % accents.length];
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
      <section id="services" className="py-20 bg-slate-50 dark:bg-dark-100">
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
              <span className="section-eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 tracking-tight">
                What I <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Professional services to help bring your digital ideas to life
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) =>
              {
                const IconComponent = iconMap[service.icon];
                const accent = getServiceAccent(index);

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => openModal(service)}
                  >
                    <div className="bg-white dark:bg-dark-200 rounded-2xl p-8 border border-slate-200/80 dark:border-white/[0.08] hover:border-primary-400/60 dark:hover:border-primary-500/50 transition-colors duration-200 ease-out relative overflow-hidden h-full flex flex-col">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl ${accent.bg} border flex items-center justify-center mb-6 relative z-10`}
                      >
                        {IconComponent && <IconComponent className={`text-2xl ${accent.icon}`} />}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex-1 flex flex-col">
                        <h3 className={`text-xl font-bold text-slate-900 dark:text-zinc-100 mb-4 ${accent.hover} transition-colors duration-200 tracking-tight`}>
                          {service.title}
                        </h3>

                        <p className="text-slate-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features Preview */}
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <FaCheck className="text-primary-600 dark:text-primary-400 text-sm flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-zinc-400">
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
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/60 dark:border-white/[0.08]">
                          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                            Learn More
                          </span>
                          <span className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </div>
                      </div>
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200/80 dark:border-white/[0.08]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-8 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${getServiceAccent(services.indexOf(selectedService)).bg} border flex items-center justify-center`}>
                    {iconMap[selectedService.icon] && (
                      (() =>
                      {
                        const IconComponent = iconMap[selectedService.icon];
                        return <IconComponent className={`text-lg ${getServiceAccent(services.indexOf(selectedService)).icon}`} />;
                      })()
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-dark-300 flex items-center justify-center text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/[0.08] hover:border-primary-400/50 transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  {selectedService.description}
                </p>

                <h4 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-6 tracking-tight">
                  What's Included:
                </h4>

                <div className="grid gap-4">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-dark-100/70 rounded-xl border border-slate-200/60 dark:border-white/[0.08]"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-200/40 dark:border-primary-700/40">
                        <FaCheck className="text-primary-600 dark:text-primary-400 text-sm" />
                      </div>
                      <span className="text-slate-700 dark:text-zinc-300 leading-relaxed">
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
                    whileTap={{ scale: 0.98 }}
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
