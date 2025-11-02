import { motion } from 'motion/react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Github, 
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Resume() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download a PDF version
    alert('Resume download would trigger here. You can integrate with a PDF generation library or link to a stored PDF file.');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            Resume / CV
          </span>
          <h1 className="text-gray-900 dark:text-white mb-4">{resumeData.personalInfo.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl mb-6">
            {resumeData.personalInfo.title}
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-gray-600 dark:text-gray-400">
            <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={18} />
              <span className="text-sm">{resumeData.personalInfo.email}</span>
            </a>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm">{resumeData.personalInfo.phone}</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">{resumeData.personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href={`https://${resumeData.personalInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              <Globe size={16} />
              {resumeData.personalInfo.website}
            </a>
            <a 
              href={`https://${resumeData.personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a 
              href={`https://${resumeData.personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
          >
            <Download size={20} />
            Download PDF Resume
          </motion.button>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h2 className="text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="text-blue-600 dark:text-blue-400" size={24} />
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {resumeData.summary}
            </p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Briefcase className="text-blue-600 dark:text-blue-400" size={28} />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-1">{job.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{job.startDate} - {job.current ? 'Present' : job.endDate}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {job.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
            Education
          </h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                {edu.gpa && (
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>
                )}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mb-3">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">Honors:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="text-gray-600 dark:text-gray-400 text-sm"
                        >
                          {course}{i < edu.coursework!.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-gray-900 dark:text-white mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="text-blue-600 dark:text-blue-400" size={28} />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800"
              >
                <h3 className="text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{cert.date}</p>
                {cert.credentialId && (
                  <p className="text-blue-600 dark:text-blue-400 text-xs mt-1">
                    ID: {cert.credentialId}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-6">Publications</h2>
          <div className="space-y-4">
            {resumeData.publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-gray-900 dark:text-white mb-2">{pub.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                  {pub.authors.join(', ')}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {pub.venue} • {pub.date}
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      View Publication
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
