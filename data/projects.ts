export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  featured: boolean;
  date: string;
  specs: {
    label: string;
    value: string;
  }[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "autonomous-rover",
    title: "Autonomous Navigation Rover",
    category: "Robotics",
    description: "AI-powered rover with obstacle detection and path planning capabilities",
    longDescription: "This autonomous rover uses advanced computer vision and machine learning algorithms to navigate complex environments. Equipped with multiple sensors including LiDAR, ultrasonic sensors, and a camera array, it can map its surroundings in real-time and make intelligent decisions about path planning. The rover is built on a custom chassis with independent suspension and four-wheel drive for maximum mobility.",
    image: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=800&q=80",
    tags: ["AI", "Computer Vision", "Sensors", "Arduino"],
    featured: true,
    date: "2024-09",
    specs: [
      { label: "Processor", value: "Raspberry Pi 4" },
      { label: "Sensors", value: "LiDAR, Ultrasonic, Camera" },
      { label: "Battery Life", value: "4 hours" },
      { label: "Max Speed", value: "2 m/s" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=800&q=80",
      "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=800&q=80",
      "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80"
    ]
  },
  {
    id: "robotic-arm",
    title: "6-DOF Robotic Arm",
    category: "Manipulation",
    description: "Precision robotic arm for pick-and-place operations with custom gripper",
    longDescription: "A six-degree-of-freedom robotic arm designed for precision manipulation tasks. Features inverse kinematics for accurate positioning, force feedback sensors in the gripper, and a custom control interface. The arm can handle payloads up to 2kg and has a reach of 60cm, making it suitable for a variety of industrial and educational applications.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
    tags: ["Servos", "Kinematics", "Control Systems"],
    featured: true,
    date: "2024-07",
    specs: [
      { label: "DOF", value: "6 Degrees" },
      { label: "Payload", value: "2 kg" },
      { label: "Reach", value: "60 cm" },
      { label: "Precision", value: "±0.5 mm" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80"
    ]
  },
  {
    id: "drone-system",
    title: "Quadcopter Drone System",
    category: "Aerial",
    description: "Custom-built quadcopter with FPV capabilities and autonomous flight modes",
    longDescription: "A fully custom quadcopter drone built from scratch with carbon fiber frame, brushless motors, and advanced flight controller. Features include GPS-assisted autonomous flight, FPV camera system, obstacle avoidance, and custom flight modes. The drone can fly for up to 25 minutes and supports payload mounting for various applications.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    tags: ["Flight Control", "FPV", "GPS", "Autonomous"],
    featured: true,
    date: "2024-05",
    specs: [
      { label: "Flight Time", value: "25 minutes" },
      { label: "Max Speed", value: "60 km/h" },
      { label: "Range", value: "2 km" },
      { label: "Payload", value: "500 g" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&q=80"
    ]
  },
  {
    id: "line-follower",
    title: "High-Speed Line Follower",
    category: "Robotics",
    description: "Competition-grade line following robot with PID control",
    longDescription: "Built for robotics competitions, this line follower uses an array of IR sensors and advanced PID control algorithms to follow lines at high speeds. The lightweight chassis and optimized gear ratio allow for rapid acceleration and precise turns. Features include customizable PID parameters, multiple speed modes, and a display for real-time debugging.",
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
    tags: ["PID Control", "Sensors", "Speed"],
    featured: false,
    date: "2024-03",
    specs: [
      { label: "Max Speed", value: "3 m/s" },
      { label: "Sensors", value: "8x IR Array" },
      { label: "Controller", value: "STM32" },
      { label: "Weight", value: "250 g" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
      "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=800&q=80"
    ]
  },
  {
    id: "bipedal-walker",
    title: "Bipedal Walking Robot",
    category: "Locomotion",
    description: "Two-legged robot with dynamic balance and gait control",
    longDescription: "An experimental bipedal robot that demonstrates dynamic walking and balance. Uses servo motors with feedback control, IMU for balance sensing, and custom gait algorithms. The robot can walk forward, backward, turn, and recover from minor disturbances. This project explores the challenges of two-legged locomotion and balance control.",
    image: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=800&q=80",
    tags: ["Balance", "Gait Control", "IMU"],
    featured: false,
    date: "2024-01",
    specs: [
      { label: "Height", value: "40 cm" },
      { label: "Servos", value: "12x Digital" },
      { label: "Battery", value: "2S LiPo" },
      { label: "Walk Speed", value: "0.3 m/s" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=800&q=80",
      "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=800&q=80"
    ]
  },
  {
    id: "gesture-controlled-bot",
    title: "Gesture Controlled Bot",
    category: "HCI",
    description: "Robot controlled via hand gestures using computer vision",
    longDescription: "This robot demonstrates human-robot interaction through gesture recognition. Using a camera and computer vision algorithms, it can recognize various hand gestures and translate them into robot movements. The system uses MediaPipe for hand tracking and custom gesture classification. Perfect for applications requiring intuitive control interfaces.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80",
    tags: ["Computer Vision", "HCI", "MediaPipe"],
    featured: false,
    date: "2023-11",
    specs: [
      { label: "Camera", value: "720p Webcam" },
      { label: "Gestures", value: "8 Recognized" },
      { label: "Latency", value: "<100ms" },
      { label: "Platform", value: "Python + OpenCV" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    ]
  },
  {
    id: "solar-tracker",
    title: "Dual-Axis Solar Tracker",
    category: "Energy",
    description: "Automated solar panel positioning system for maximum efficiency",
    longDescription: "An intelligent solar tracking system that automatically adjusts solar panel orientation to face the sun throughout the day. Uses light sensors and servo motors for dual-axis movement, increasing energy capture by up to 40% compared to fixed installations. Features include automatic night-mode positioning and weather-resistant enclosure.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    tags: ["Solar", "Automation", "Energy"],
    featured: false,
    date: "2023-08",
    specs: [
      { label: "Axes", value: "2 (Azimuth + Elevation)" },
      { label: "Panel Size", value: "50W Max" },
      { label: "Efficiency Gain", value: "+40%" },
      { label: "Power Draw", value: "2W" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ]
  },
  {
    id: "warehouse-bot",
    title: "Warehouse Navigation Bot",
    category: "Industrial",
    description: "Autonomous robot for warehouse inventory management",
    longDescription: "Designed for industrial warehouse environments, this robot can navigate autonomously between shelves, scan barcodes, and track inventory. Features include omnidirectional wheels for tight space maneuvering, RFID reader, barcode scanner, and integration with warehouse management systems. Built to operate continuously in demanding environments.",
    image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?w=800&q=80",
    tags: ["Industrial", "Navigation", "RFID"],
    featured: false,
    date: "2023-06",
    specs: [
      { label: "Load Capacity", value: "15 kg" },
      { label: "Navigation", value: "SLAM + QR Codes" },
      { label: "Runtime", value: "8 hours" },
      { label: "Wheels", value: "Omnidirectional" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589254065909-b7086229d08c?w=800&q=80",
      "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?w=800&q=80"
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};
