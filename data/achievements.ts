export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  longDescription: string;
  image: string;
  organization: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    id: "national-robotics-first",
    title: "First Place - National Robotics Competition",
    category: "Competition",
    date: "2024-08",
    description: "Won first place in the autonomous navigation challenge at the National Robotics Championship",
    longDescription: "Competed against 50+ teams from across the country in the National Robotics Championship. Our autonomous rover navigated a complex obstacle course with 100% accuracy in record time. The project showcased advanced SLAM algorithms, real-time path planning, and robust sensor fusion techniques. This victory validated months of development and testing, and earned recognition from industry leaders.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    organization: "National Robotics Association",
    location: "Boston, MA",
    highlights: [
      "Competed against 50+ teams nationwide",
      "100% navigation accuracy achieved",
      "Fastest completion time: 2m 45s",
      "$10,000 prize awarded",
      "Featured in Robotics Today Magazine"
    ],
    tags: ["Competition", "Autonomous Systems", "Navigation", "Award"]
  },
  {
    id: "innovation-award",
    title: "Innovation Excellence Award",
    category: "Recognition",
    date: "2024-06",
    description: "Received the Innovation Excellence Award for developing novel robotic gripper technology",
    longDescription: "Recognized by the Robotics Innovation Council for developing an adaptive gripper system using soft robotics principles combined with machine learning. The gripper can handle objects of various shapes, sizes, and materials with minimal programming. This innovation has potential applications in warehouse automation, medical devices, and manufacturing. The award included a grant for further development and commercialization support.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    organization: "Robotics Innovation Council",
    location: "Virtual Event",
    highlights: [
      "Selected from 200+ submissions",
      "$15,000 research grant awarded",
      "Patent application filed",
      "Featured presentation at RoboCon 2024",
      "Collaboration offers from 3 companies"
    ],
    tags: ["Innovation", "Research", "Soft Robotics", "AI"]
  },
  {
    id: "research-publication",
    title: "IEEE Published Research Paper",
    category: "Publication",
    date: "2024-03",
    description: "Published groundbreaking research on multi-agent coordination in IEEE Robotics & Automation",
    longDescription: "Successfully published a peer-reviewed paper titled 'Decentralized Multi-Agent Coordination for Warehouse Automation' in the prestigious IEEE Robotics & Automation Letters. The research presents a novel algorithm for coordinating multiple autonomous robots in dynamic environments without central control. The paper has been cited 15 times within three months and presented at the International Conference on Robotics and Automation (ICRA).",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    organization: "IEEE Robotics & Automation Society",
    location: "Published Online",
    highlights: [
      "Peer-reviewed publication in top-tier journal",
      "15+ citations in 3 months",
      "Presented at ICRA 2024",
      "Impact factor: 4.5",
      "Collaboration with 2 universities"
    ],
    tags: ["Research", "Publication", "Multi-Agent", "Algorithm"]
  },
  {
    id: "hackathon-winner",
    title: "RoboHack 2024 Winner",
    category: "Hackathon",
    date: "2024-02",
    description: "24-hour hackathon winner for developing an emergency response robot prototype",
    longDescription: "Led a team of 4 engineers to victory at RoboHack 2024, the largest robotics hackathon on the West Coast. In just 24 hours, we designed and built a prototype emergency response robot capable of navigating disaster zones, detecting survivors using thermal imaging, and delivering emergency supplies. The judges praised our innovative use of available resources and practical approach to a real-world problem.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    organization: "TechHub Innovation Center",
    location: "San Francisco, CA",
    highlights: [
      "24-hour development sprint",
      "Team of 4 engineers",
      "Working prototype delivered",
      "Judges' Choice Award",
      "Pitch to 3 VC firms"
    ],
    tags: ["Hackathon", "Team Lead", "Prototype", "Emergency Response"]
  },
  {
    id: "mentor-award",
    title: "Outstanding Mentor Award",
    category: "Education",
    date: "2023-12",
    description: "Recognized for mentoring 50+ students in robotics and helping establish 3 robotics clubs",
    longDescription: "Awarded the Outstanding Mentor Award by the STEM Education Foundation for dedication to teaching and inspiring the next generation of robotics engineers. Over the past two years, I've mentored more than 50 students, helped establish 3 high school robotics clubs, and organized 10 workshops on various robotics topics. Five of my mentees have gone on to win regional competitions, and many have pursued robotics in college.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    organization: "STEM Education Foundation",
    location: "San Francisco, CA",
    highlights: [
      "Mentored 50+ students",
      "Established 3 robotics clubs",
      "Organized 10 technical workshops",
      "5 mentees won regional competitions",
      "200+ hours of volunteer teaching"
    ],
    tags: ["Education", "Mentorship", "Community", "STEM"]
  },
  {
    id: "startup-grant",
    title: "Robotics Startup Grant Recipient",
    category: "Funding",
    date: "2023-10",
    description: "Awarded $50,000 grant to develop commercial warehouse automation solution",
    longDescription: "Received a competitive startup grant from the Advanced Manufacturing Initiative to develop a commercial-ready warehouse automation system. The grant supports the development of our autonomous inventory management robot, including hardware prototyping, software development, and initial pilot testing with industry partners. This funding enabled the transition from research prototype to commercial product development.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    organization: "Advanced Manufacturing Initiative",
    location: "Remote",
    highlights: [
      "$50,000 non-dilutive funding",
      "12-month development timeline",
      "Partnership with 2 pilot customers",
      "IP development support included",
      "Access to manufacturing facilities"
    ],
    tags: ["Funding", "Startup", "Commercialization", "Business"]
  },
  {
    id: "opensource-contributor",
    title: "Top Open Source Contributor - ROS",
    category: "Open Source",
    date: "2023-08",
    description: "Recognized as top contributor to Robot Operating System (ROS) community",
    longDescription: "Honored as one of the top 10 contributors to the Robot Operating System (ROS) project in 2023. Contributed over 100 commits including bug fixes, new features, and documentation improvements. Developed two popular ROS packages for sensor fusion and path planning that have been downloaded over 5,000 times. Active in the community forums, helping hundreds of developers solve technical challenges.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    organization: "Open Robotics",
    location: "GitHub Community",
    highlights: [
      "100+ commits to ROS core",
      "2 popular packages created",
      "5,000+ package downloads",
      "500+ forum responses",
      "Featured in ROS monthly newsletter"
    ],
    tags: ["Open Source", "ROS", "Community", "Software"]
  },
  {
    id: "speaker-tedx",
    title: "TEDx Speaker - Future of Robotics",
    category: "Speaking",
    date: "2023-05",
    description: "Delivered TEDx talk on democratizing robotics education and technology",
    longDescription: "Selected to deliver a TEDx talk titled 'Robots for Everyone: Democratizing the Future of Automation.' The talk explored how accessible robotics education and open-source hardware are enabling the next generation of innovators. Discussed personal journey, challenges in the field, and vision for making robotics technology more inclusive and accessible. The talk has been viewed over 50,000 times online.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    organization: "TEDx Silicon Valley",
    location: "San Jose, CA",
    highlights: [
      "18-minute featured talk",
      "50,000+ online views",
      "Featured on TED.com",
      "International audience reach",
      "3 media interview requests"
    ],
    tags: ["Speaking", "TEDx", "Education", "Inspiration"]
  }
];

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(achievement => achievement.id === id);
};

export const getAchievementsByCategory = (category: string): Achievement[] => {
  return achievements.filter(achievement => achievement.category === category);
};

export const getRecentAchievements = (count: number = 3): Achievement[] => {
  return achievements
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(achievements.map(achievement => achievement.category)));
};
