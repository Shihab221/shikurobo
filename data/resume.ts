export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  link?: string;
}

export const resumeData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Robotics Engineer & Hardware Innovator',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'robotech-portfolio.com',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourprofile',
  },

  summary: `Passionate robotics engineer with 5+ years of experience designing and developing autonomous systems, embedded solutions, and intelligent hardware. Proven track record of leading innovative projects from concept to deployment, with expertise in AI integration, control systems, and real-time embedded programming. Committed to pushing the boundaries of what's possible in robotics while mentoring the next generation of engineers.`,

  education: [
    {
      degree: 'Master of Science',
      field: 'Robotics Engineering',
      institution: 'Massachusetts Institute of Technology',
      location: 'Cambridge, MA',
      startDate: '2019',
      endDate: '2021',
      gpa: '3.9/4.0',
      honors: ['Dean\'s List', 'Graduate Fellowship Award'],
      coursework: [
        'Advanced Robotics',
        'Machine Learning for Robotics',
        'Control Systems Design',
        'Computer Vision',
        'Embedded Systems',
      ],
    },
    {
      degree: 'Bachelor of Science',
      field: 'Electrical Engineering',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2015',
      endDate: '2019',
      gpa: '3.8/4.0',
      honors: ['Magna Cum Laude', 'Tau Beta Pi Engineering Honor Society'],
      coursework: [
        'Digital Systems Design',
        'Microcontroller Applications',
        'Signal Processing',
        'Circuit Design',
      ],
    },
  ] as Education[],

  experience: [
    {
      title: 'Senior Robotics Engineer',
      company: 'TechRobotics Inc.',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      current: true,
      description: [
        'Lead development of autonomous mobile robots for warehouse automation, improving efficiency by 45%',
        'Design and implement real-time control systems using ROS2 and C++ for multi-robot coordination',
        'Architect sensor fusion algorithms combining LiDAR, cameras, and IMU data for robust navigation',
        'Mentor team of 5 junior engineers and conduct technical reviews for critical systems',
        'Collaborate with cross-functional teams to deliver products from prototype to production',
      ],
      technologies: ['ROS2', 'C++', 'Python', 'Computer Vision', 'SLAM', 'PCB Design'],
    },
    {
      title: 'Robotics Engineer',
      company: 'Autonomous Systems Lab',
      location: 'Palo Alto, CA',
      startDate: 'Jun 2021',
      endDate: 'Dec 2021',
      description: [
        'Developed autonomous drone system for agricultural monitoring and crop analysis',
        'Implemented deep learning models for real-time object detection and classification',
        'Designed custom PCBs for drone flight controller and sensor integration',
        'Optimized power management systems, extending flight time by 30%',
        'Published research findings in IEEE Robotics and Automation Letters',
      ],
      technologies: ['TensorFlow', 'OpenCV', 'Embedded Linux', 'Altium Designer', 'MAVLink'],
    },
    {
      title: 'Embedded Systems Intern',
      company: 'Innovation Robotics',
      location: 'Boston, MA',
      startDate: 'Jun 2020',
      endDate: 'Aug 2020',
      description: [
        'Developed firmware for robotic arm controller using STM32 microcontrollers',
        'Implemented PID control algorithms for precise motor positioning',
        'Created testing framework that reduced bug detection time by 60%',
        'Collaborated with mechanical team to optimize hardware-software integration',
      ],
      technologies: ['C', 'ARM Cortex-M', 'FreeRTOS', 'CAN Bus', 'I2C/SPI'],
    },
  ] as Experience[],

  skills: [
    {
      category: 'Programming Languages',
      items: ['C/C++', 'Python', 'MATLAB', 'JavaScript/TypeScript', 'Rust', 'Assembly'],
    },
    {
      category: 'Robotics & Control',
      items: ['ROS/ROS2', 'Computer Vision', 'SLAM', 'Path Planning', 'Sensor Fusion', 'PID Control'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Neural Networks', 'Reinforcement Learning'],
    },
    {
      category: 'Embedded Systems',
      items: ['ARM Cortex', 'STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'FreeRTOS'],
    },
    {
      category: 'Hardware & Electronics',
      items: ['PCB Design', 'Altium Designer', 'KiCad', 'Oscilloscope', 'Logic Analyzer', 'Soldering'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Linux', 'Docker', 'CAD (SolidWorks)', 'Gazebo', 'MATLAB/Simulink'],
    },
  ] as Skill[],

  certifications: [
    {
      name: 'Professional Engineer (PE) License',
      issuer: 'National Council of Examiners for Engineering and Surveying',
      date: '2023',
    },
    {
      name: 'ROS Developer Certification',
      issuer: 'The Construct',
      date: '2022',
      credentialId: 'ROS-2022-12345',
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera / DeepLearning.AI',
      date: '2021',
      credentialId: 'DL-CERT-2021',
    },
  ] as Certification[],

  publications: [
    {
      title: 'Autonomous Navigation in Dynamic Environments Using Multi-Sensor Fusion',
      authors: ['Your Name', 'Co-Author 1', 'Co-Author 2'],
      venue: 'IEEE Robotics and Automation Letters (RA-L)',
      date: '2023',
      link: 'https://ieeexplore.ieee.org',
    },
    {
      title: 'Real-Time Object Detection for Agricultural Drones Using Edge Computing',
      authors: ['Your Name', 'Co-Author 1'],
      venue: 'International Conference on Robotics and Automation (ICRA)',
      date: '2022',
      link: 'https://ieeexplore.ieee.org',
    },
    {
      title: 'Optimizing Power Consumption in Multi-Rotor UAVs',
      authors: ['Your Name', 'Advisor Name'],
      venue: 'Journal of Unmanned Vehicle Systems',
      date: '2021',
    },
  ] as Publication[],
};
