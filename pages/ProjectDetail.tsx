import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export default function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => onNavigate('projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Projects
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-white mb-2">{project.title}</h1>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <Tag size={16} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-8">
                <h3 className="text-gray-900 dark:text-white mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="relative h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 group cursor-pointer"
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Github size={20} />
                  View on GitHub
                </button>
                <button className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:border-blue-600 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ExternalLink size={20} />
                  Live Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sticky top-24 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-gray-900 dark:text-white mb-4">Technical Specifications</h3>
              <div className="space-y-4">
                {project.specs.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">{spec.label}</div>
                    <div className="text-gray-900 dark:text-white">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-gray-900 dark:text-white mb-3">Project Category</h4>
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                  {project.category}
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-gray-900 dark:text-white mb-3">Completion Date</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
