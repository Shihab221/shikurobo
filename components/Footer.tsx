import { Github, Linkedin, Mail, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 mt-20 border-t border-gray-800 dark:border-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">RoboTech</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 max-w-md">
              Exploring the intersection of hardware and software through innovative robotics projects.
              Building the future, one robot at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-center text-gray-500 dark:text-gray-600">
          <p>&copy; 2025 RoboTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
