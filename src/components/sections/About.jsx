import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaHandsHelping, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  const infoCards = [
    {
      icon: FaUser,
      title: 'Experience',
      value: personalInfo.experience,
      color: 'from-blue-500 to-purple-600',
      delay: 0.1,
    },
    {
      icon: FaProjectDiagram,
      title: 'Projects',
      value: personalInfo.projects,
      color: 'from-green-500 to-teal-600',
      delay: 0.2,
    },
    {
      icon: FaHandsHelping,
      title: 'Support',
      value: personalInfo.availability,
      color: 'from-orange-500 to-red-600',
      delay: 0.3,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-100">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Passionate About <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Let me introduce myself and share my journey in technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid gap-6">
                {infoCards.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: card.delay }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative overflow-hidden"
                  >
                    <div className="bg-white dark:bg-dark-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg`}
                        >
                          <card.icon className="text-white text-xl" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {card.title}
                          </h3>
                          <p className="text-2xl font-bold gradient-text">
                            {card.value}
                          </p>
                        </div>
                      </div>
                      
                      {/* Animated background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                        initial={false}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Description and CTA */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white"
                >
                  I'm {personalInfo.name}
                </motion.h3>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {personalInfo.description}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Flutter Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">ASP.NET Core</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Mobile Apps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Web Solutions</span>
                  </div>
                </motion.div>
              </div>

              {/* Contact CTA */}
              <motion.div
                variants={itemVariants}
                className="pt-6"
              >
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="mr-2 group-hover:animate-pulse" />
                  Let's Work Together
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
