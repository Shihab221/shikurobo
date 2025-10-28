import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Award, Tag, CheckCircle } from 'lucide-react';
import { getAchievementById } from '../data/achievements';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AchievementDetailProps {
  achievementId: string;
  onNavigate: (page: string) => void;
}

export default function AchievementDetail({ achievementId, onNavigate }: AchievementDetailProps) {
  const achievement = getAchievementById(achievementId);

  if (!achievement) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-gray-900 dark:text-white mb-4">Achievement Not Found</h1>
          <button
            onClick={() => onNavigate('achievements')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Back to Achievements
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
          onClick={() => onNavigate('achievements')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Achievements
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800"
        >
          <ImageWithFallback
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm flex items-center gap-2">
                <Award size={14} />
                {achievement.category}
              </span>
            </div>
            <h1 className="text-white mb-4">{achievement.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(achievement.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {achievement.location}
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
              {/* Organization */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Awarded by</div>
                <div className="text-gray-900 dark:text-white">{achievement.organization}</div>
              </div>

              {/* Description */}
              <h2 className="text-gray-900 dark:text-white mb-4">About This Achievement</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                {achievement.longDescription}
              </p>

              {/* Key Highlights */}
              <div className="mb-8">
                <h3 className="text-gray-900 dark:text-white mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  {achievement.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-gray-900 dark:text-white mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
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
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 sticky top-24 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-gray-900 dark:text-white mb-6">Achievement Details</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">Category</div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Award size={16} />
                    {achievement.category}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">Date Received</div>
                  <div className="text-gray-900 dark:text-white">
                    {new Date(achievement.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">Awarding Organization</div>
                  <div className="text-gray-900 dark:text-white">{achievement.organization}</div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">Location</div>
                  <div className="text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin size={16} />
                    {achievement.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
