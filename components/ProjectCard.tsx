import { motion } from 'motion/react';
import { ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onNavigate: (projectId: string) => void;
}

export default function ProjectCard({ project, index, onNavigate }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => onNavigate(project.id)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {project.featured && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Featured
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-sm"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
            <span>View Details</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
