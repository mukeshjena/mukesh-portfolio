import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaStar } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';

const Portfolio = () =>
{
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getCategoryBadge = (category) =>
  {
    switch (category)
    {
      case 'web':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200/60 dark:border-blue-700/40';
      case 'mobile':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-700/40';
      case 'design':
        return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200/60 dark:border-rose-700/40';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-200/60 dark:border-gray-700/40';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-200">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="section-eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 tracking-tight">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent projects and creative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ease-out border ${activeFilter === filter.key
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-slate-100 dark:bg-dark-100 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/[0.08] hover:border-primary-400/50 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                whileTap={{ scale: 0.98 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="sync">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative bg-white dark:bg-dark-100 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] hover:border-primary-400/60 dark:hover:border-primary-500/50 transition-colors duration-200 ease-out"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-4 right-4 z-20 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 border border-amber-200/60 dark:border-amber-700/40"
                    >
                      <FaStar className="text-xs" />
                      <span>Featured</span>
                    </motion.div>
                  )}

                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) =>
                      {
                        e.target.src = `https://via.placeholder.com/400x300/0ea5e9/ffffff?text=${encodeURIComponent(project.title)}`;
                      }}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={false}
                    >
                      <div className="flex space-x-4">
                        {project.link && project.link !== '#' && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-primary-400/60 hover:bg-white/20 transition-colors duration-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : 20 }}
                            transition={{ delay: 0.1 }}
                          >
                            <FaExternalLinkAlt />
                          </motion.a>
                        )}

                        {project.github && project.github !== '#' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-primary-400/60 hover:bg-white/20 transition-colors duration-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : 20 }}
                            transition={{ delay: 0.2 }}
                          >
                            <FaGithub />
                          </motion.a>
                        )}

                        <motion.button
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-primary-400/60 hover:bg-white/20 transition-colors duration-200"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : 20 }}
                          transition={{ delay: 0.3 }}
                        >
                          <FaEye />
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full capitalize border ${getCategoryBadge(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 dark:bg-dark-200 text-slate-700 dark:text-zinc-300 text-xs rounded-full font-medium border border-slate-200/60 dark:border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium border border-primary-200/40 dark:border-primary-700/40">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-white/[0.08]">
                      <div className="flex space-x-3">
                        {project.link && project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}

                        {project.github && project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                            title="Source Code"
                          >
                            <FaGithub />
                          </a>
                        )}
                      </div>

                      <span className="text-primary-600 dark:text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different category
              </p>
            </motion.div>
          )}

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 right-1/6 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
