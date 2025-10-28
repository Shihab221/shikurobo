import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Award } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';
import { getRecentAchievements } from '../data/achievements';
import ProjectCard from '../components/ProjectCard';

interface HomeProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredProjects = getFeaturedProjects();
  const recentAchievements = getRecentAchievements(3);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                Hardware Robotics Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-900 dark:text-white mb-6"
            >
              Building the Future with
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Robotics & Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 mb-8 text-xl max-w-2xl mx-auto"
            >
              Explore a collection of cutting-edge robotics projects combining hardware engineering,
              AI, and automation to solve real-world challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                View All Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1"
          >
            <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, value: '8+', label: 'Projects Completed' },
              { icon: Target, value: '95%', label: 'Success Rate' },
              { icon: Award, value: '8+', label: 'Awards Won' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Top Projects
            </span>
            <h2 className="text-gray-900 dark:text-white mb-4">Featured Work</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our most innovative and impactful robotics projects that showcase
              cutting-edge technology and engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onNavigate={(projectId) => onNavigate('project', projectId)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all inline-flex items-center gap-2 group"
            >
              View All Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Recent Wins
            </span>
            <h2 className="text-gray-900 dark:text-white mb-4">Latest Achievements</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognition and awards for innovation and excellence in robotics engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate('achievement', achievement.id)}
                className="cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-blue-600 dark:text-blue-400">{achievement.category}</span>
                  </div>
                  <h3 className="text-gray-900 dark:text-white mb-2 line-clamp-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{achievement.description}</p>
                  <div className="text-gray-500 dark:text-gray-500 text-sm">
                    {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate('achievements')}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all inline-flex items-center gap-2 group"
            >
              View All Achievements
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">Let's Build Something Amazing</h2>
            <p className="text-blue-100 mb-8 text-xl">
              Interested in collaborating or learning more about these projects? Get in touch!
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-2xl transition-all"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
