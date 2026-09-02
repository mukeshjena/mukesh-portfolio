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
        return 'bg-emerald-500';
      case 'intermediate':
        return 'bg-amber-500';
      case 'beginner':
        return 'bg-rose-500';
      default:
        return 'bg-primary-500';
    }
  };

  const getLevelBadge = (level) =>
  {
    switch (level.toLowerCase())
    {
      case 'advanced':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-700/40';
      case 'intermediate':
        return 'bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-700/40';
      case 'beginner':
        return 'bg-rose-50 text-rose-700 border-rose-200/60 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-700/40';
      default:
        return 'bg-primary-50 text-primary-700 border-primary-200/60 dark:bg-primary-900/20 dark:text-primary-400 dark:border-primary-700/40';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const skillCategories = [
    { key: 'frontend', title: 'Frontend Development', icon: FaHtml5, accentColor: 'text-orange-500' },
    { key: 'backend', title: 'Backend Development', icon: SiDotnet, accentColor: 'text-blue-600' },
    { key: 'flutter', title: 'Flutter Development', icon: SiFlutter, accentColor: 'text-cyan-500' },
    { key: 'tools', title: 'Tools & Technologies', icon: DiVisualstudio, accentColor: 'text-green-500' },
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
            <span className="section-eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 tracking-tight">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-dark-100 rounded-2xl p-8 border border-gray-200/60 dark:border-gray-700/60 transition-colors duration-200 ease-out hover:border-primary-400/50 dark:hover:border-primary-500/40"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white dark:bg-dark-200 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center`}
                  >
                    <category.icon className={`text-2xl ${category.accentColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
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
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {IconComponent && (
                              <div className="text-2xl text-primary-600 dark:text-primary-400">
                                <IconComponent />
                              </div>
                            )}
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelBadge(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${getLevelColor(skill.level)} rounded-full relative`}
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
