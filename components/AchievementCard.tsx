import { motion } from 'motion/react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Achievement } from '../data/achievements';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  onNavigate: (achievementId: string) => void;
}

export default function AchievementCard({ achievement, index, onNavigate }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => onNavigate(achievement.id)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <ImageWithFallback
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <Award size={14} />
            {achievement.category}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white text-sm flex items-center gap-2 mb-1">
              <Calendar size={14} />
              {new Date(achievement.date).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-gray-900 dark:text-white mb-2 line-clamp-2">{achievement.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{achievement.description}</p>

          {/* Organization */}
          <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <MapPin size={16} className="flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-gray-700 dark:text-gray-300">{achievement.organization}</div>
              <div>{achievement.location}</div>
            </div>
          </div>

          {/* View Details */}
          <div className="text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all flex items-center gap-2">
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
