import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import {
  FaArrowLeft,
  FaSun,
  FaMoon,
  FaLinkedin,
  FaShieldAlt,
  FaDatabase,
  FaRobot,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaHeart
} from 'react-icons/fa';

const LinkedInPrivacyPolicy = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-100 text-slate-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-50/85 dark:bg-dark-100/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold font-heading gradient-text hover:opacity-80 transition-opacity"
          >
            <span>Mukesh</span>
          </Link>

          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-slate-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 bg-slate-100 dark:bg-dark-200 border border-slate-200/80 dark:border-white/[0.08] hover:bg-slate-200/70 dark:hover:bg-dark-300 transition-colors"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Portfolio</span>
            </Link>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-200 border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-200/70 dark:hover:bg-dark-300 transition-colors"
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Header section */}
            <div className="text-center sm:text-left">
              <span className="section-eyebrow">
                <FaShieldAlt className="text-primary-500" />
                Legal & Privacy
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-500 dark:text-zinc-400 text-sm sm:text-base">
                Last updated: October 29, 2026
              </p>
            </div>

            {/* Scope / About Card */}
            <div className="card p-6 sm:p-8 bg-white dark:bg-dark-200 border border-slate-200/80 dark:border-white/[0.08] rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 shrink-0">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                    Application Overview
                  </h2>
                  <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
                    This application is a personal automation tool created and used only by{' '}
                    <strong className="text-slate-900 dark:text-white font-semibold">Mukesh Jena</strong>{' '}
                    to publish posts to his own LinkedIn profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Collected */}
            <div className="card p-6 sm:p-8 bg-white dark:bg-dark-200 border border-slate-200/80 dark:border-white/[0.08] rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 shrink-0">
                  <FaDatabase className="text-lg" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Data collected
                </h2>
              </div>

              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                The app does not collect, store, sell, or share personal data from any
                other user. It uses a LinkedIn access token belonging to the owner
                solely to publish posts on the owner's own profile.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06] grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-zinc-300">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>No third-party user data collected</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-zinc-300">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Zero data sharing or selling</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-zinc-300">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Personal owner access token only</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-zinc-300">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Single-purpose post publishing</span>
                </div>
              </div>
            </div>

            {/* Third Parties */}
            <div className="card p-6 sm:p-8 bg-white dark:bg-dark-200 border border-slate-200/80 dark:border-white/[0.08] rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
                  <FaRobot className="text-lg" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Third parties
                </h2>
              </div>

              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                Post content is generated using Google Gemini and image tools. No
                personal data of other individuals is processed.
              </p>
            </div>

            {/* Contact */}
            <div className="card p-6 sm:p-8 bg-white dark:bg-dark-200 border border-slate-200/80 dark:border-white/[0.08] rounded-2xl shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Contact
                </h2>
              </div>

              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                For questions, contact Mukesh Jena via LinkedIn:
              </p>

              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/mukesh-jena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-white bg-[#0A66C2] hover:bg-[#004182] transition-colors duration-200 shadow-sm"
                >
                  <FaLinkedin className="text-lg" />
                  <span>Connect with Mukesh Jena on LinkedIn</span>
                  <FaExternalLinkAlt className="text-xs ml-1 opacity-80" />
                </a>
              </div>
            </div>
          </Motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200/80 dark:border-white/[0.08] text-center text-sm text-slate-500 dark:text-zinc-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mukesh Jena. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <FaHeart className="text-red-500 mx-1 inline" />
            <span>by Mukesh Jena</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkedInPrivacyPolicy;
