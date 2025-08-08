import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolioData';

const Hero = () =>
{
  const scrollToSection = (sectionId) =>
  {
    const element = document.getElementById(sectionId);
    if (element)
    {
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 gradient-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6"
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2 group-hover:animate-bounce" />
                Download CV
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('about')}
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {[
                { icon: FaLinkedin, url: socialLinks.linkedin, color: 'hover:text-blue-600' },
                { icon: FaGithub, url: socialLinks.github, color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: FaFacebook, url: socialLinks.facebook, color: 'hover:text-blue-700' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white dark:bg-dark-200 rounded-full shadow-md text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color} hover:shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-primary-400/30 rounded-full"
              />

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-blue-600 rounded-full p-2">
                  <div className="w-full h-full bg-white dark:bg-dark-200 rounded-full overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dq6oxixuf/image/upload/v1754683902/profile_fx280c.png"
                      alt="Mukesh Jena"
                      className="w-full h-full object-cover object-center"
                      onError={(e) =>
                      {
                        e.target.src = `https://ui-avatars.com/api/?name=${personalInfo.name}&size=400&background=0ea5e9&color=fff&bold=true`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"
              />

              <motion.div
                animate={{
                  y: [20, -20, 20],
                  rotate: [360, 0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
