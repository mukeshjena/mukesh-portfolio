import { motion } from 'framer-motion';
import
{
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaDocker, FaCloud, FaMobile
} from 'react-icons/fa';
import
{
  SiDotnet, SiFlutter, SiDart,
  SiFirebase
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { skills } from '../../data/portfolioData';
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () =>
{
  const iconMap = {
    FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaDocker, FaCloud, FaMobile,
    SiDotnet, TbBrandCSharp, DiMsqlServer, SiFlutter, SiDart,
    SiFirebase, VscAzure, DiVisualstudio
  };

  const getLevelColor = (level) =>
  {
    switch (level.toLowerCase())
    {
      case 'advanced':
        return 'from-green-500 to-emerald-600';
      case 'intermediate':
        return 'from-yellow-500 to-orange-600';
      case 'beginner':
        return 'from-red-500 to-pink-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  const getLevelPercentage = (level) =>
  {
    switch (level.toLowerCase())
    {
      case 'advanced':
        return 90;
      case 'intermediate':
        return 70;
      case 'beginner':
        return 40;
      default:
        return 50;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
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

  const skillCardVariants = {
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

  const skillCategories = [
    { key: 'frontend', title: 'Frontend Development', icon: FaHtml5, color: 'from-orange-500 to-red-600' },
    { key: 'backend', title: 'Backend Development', icon: SiDotnet, color: 'from-blue-500 to-purple-600' },
    { key: 'flutter', title: 'Flutter Development', icon: SiFlutter, color: 'from-cyan-500 to-blue-600' },
    { key: 'tools', title: 'Tools & Technologies', icon: DiVisualstudio, color: 'from-green-500 to-teal-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-200">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-dark-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {skills[category.key].map((skill, index) =>
                  {
                    const IconComponent = iconMap[skill.icon];
                    const percentage = getLevelPercentage(skill.level);

                    return (
                      <motion.div
                        key={index}
                        variants={skillCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {IconComponent && (
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="text-2xl text-primary-600 dark:text-primary-400"
                              >
                                <IconComponent />
                              </motion.div>
                            )}
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(skill.level)} text-white shadow-sm`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full relative`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${percentage}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.1 + index * 0.05,
                                ease: "easeOut"
                              }}
                            >
                              {/* Shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '100%' }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: categoryIndex * 0.1 + index * 0.05 + 0.5,
                                  ease: "easeInOut"
                                }}
                              />
                            </motion.div>
                          </div>

                          {/* Percentage indicator */}
                          <motion.div
                            className="absolute right-0 -top-8 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={false}
                          >
                            {percentage}%
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 120, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/3 right-1/6 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                rotate: [120, 0, 120],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
