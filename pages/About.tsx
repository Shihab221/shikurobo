import { motion } from 'motion/react';
import { Code, Cpu, Zap, Target, Award, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const skills = [
    { name: 'Embedded Systems', level: 95, icon: Cpu },
    { name: 'Robotics Engineering', level: 90, icon: Target },
    { name: 'AI & Machine Learning', level: 85, icon: Zap },
    { name: 'Control Systems', level: 88, icon: Code },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Innovation Award',
      description: 'First place in National Robotics Competition 2024',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Mentored 50+ students in robotics and programming',
    },
    {
      icon: Zap,
      title: 'Research Published',
      description: 'Published 3 papers on autonomous navigation systems',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            About Me
          </span>
          <h1 className="text-gray-900 dark:text-white mb-4">Robotics Engineer & Innovator</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xl">
            Passionate about building intelligent hardware systems that solve real-world problems
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative h-96 lg:h-auto rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Robotics Workshop"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-gray-900 dark:text-white mb-6">Building the Future, One Robot at a Time</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                With over 5 years of experience in robotics and embedded systems, I specialize in
                creating innovative hardware solutions that bridge the gap between theoretical
                concepts and practical applications.
              </p>
              <p>
                My journey began with a simple line-following robot in high school, and has evolved
                into developing complex autonomous systems, from drones to robotic manipulators.
                Each project is an opportunity to push the boundaries of what's possible.
              </p>
              <p>
                I believe in the power of open-source collaboration and knowledge sharing. Through
                this portfolio, I aim to inspire others and contribute to the growing community of
                robotics enthusiasts and professionals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-gray-900 dark:text-white mb-8 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white">{skill.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}% Proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-900 dark:text-white mb-8 text-center">Achievements & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl text-center border border-blue-100 dark:border-blue-800"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
