export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-ros2",
    title: "Getting Started with ROS2 for Robotics Development",
    excerpt: "A comprehensive guide to setting up ROS2 and building your first robotic application",
    content: "Robot Operating System 2 (ROS2) is the next generation of ROS, offering improved performance, real-time capabilities, and better support for production systems...",
    category: "Tutorial",
    date: "2024-10",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    tags: ["ROS2", "Tutorial", "Beginner"],
    author: "RoboTech"
  },
  {
    id: "choosing-microcontroller",
    title: "Choosing the Right Microcontroller for Your Robot",
    excerpt: "Compare Arduino, Raspberry Pi, ESP32, and STM32 for different robotics applications",
    content: "Selecting the right microcontroller is crucial for any robotics project. This guide helps you understand the trade-offs between popular options...",
    category: "Guide",
    date: "2024-09",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["Hardware", "Microcontrollers", "Guide"],
    author: "RoboTech"
  },
  {
    id: "pid-control-explained",
    title: "PID Control: From Theory to Implementation",
    excerpt: "Master PID control for robotics with practical examples and tuning strategies",
    content: "PID (Proportional-Integral-Derivative) control is fundamental to robotics. Learn how to implement and tune PID controllers for your projects...",
    category: "Technical",
    date: "2024-08",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    tags: ["Control Systems", "PID", "Advanced"],
    author: "RoboTech"
  },
  {
    id: "computer-vision-basics",
    title: "Computer Vision Basics for Robotics",
    excerpt: "Introduction to OpenCV and practical vision algorithms for autonomous robots",
    content: "Computer vision enables robots to perceive and understand their environment. This tutorial covers essential CV concepts and OpenCV basics...",
    category: "Tutorial",
    date: "2024-07",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
    tags: ["Computer Vision", "OpenCV", "AI"],
    author: "RoboTech"
  },
  {
    id: "battery-selection-guide",
    title: "Battery Selection Guide for Mobile Robots",
    excerpt: "Everything you need to know about choosing and managing batteries for robotics",
    content: "Power management is critical for mobile robots. Learn about different battery chemistries, capacity calculations, and safety considerations...",
    category: "Guide",
    date: "2024-06",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800&q=80",
    tags: ["Power", "Batteries", "Hardware"],
    author: "RoboTech"
  },
  {
    id: "slam-algorithms",
    title: "SLAM Algorithms: Mapping and Localization",
    excerpt: "Understanding simultaneous localization and mapping for autonomous navigation",
    content: "SLAM (Simultaneous Localization and Mapping) is essential for autonomous robots. Explore different SLAM approaches and implementations...",
    category: "Technical",
    date: "2024-05",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    tags: ["SLAM", "Navigation", "Advanced"],
    author: "RoboTech"
  }
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getBlogCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map(post => post.category)));
};
