export interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  stars: number;
  category: 'Frontend' | 'Fullstack' | 'Backend' | 'Other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'HealthTrack',
    type: 'Web Application',
    description: 'A comprehensive health tracking platform that helps users monitor their fitness progress, nutrition, and wellness goals.',
    image: 'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
    github: 'https://github.com/kerealbert/health-track',
    demo: 'https://health-track.vercel.app',
    stars: 42,
    category: 'Fullstack',
  },
  {
    id: 2,
    title: 'DevConnect',
    type: 'Social Platform',
    description: 'A social networking platform designed specifically for developers to connect, share projects, and collaborate on coding challenges.',
    image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    github: 'https://github.com/kerealbert/dev-connect',
    demo: 'https://dev-connect.vercel.app',
    stars: 78,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'WeatherNow',
    type: 'Weather App',
    description: 'A real-time weather application that provides accurate forecasts, weather alerts, and detailed climate information for locations worldwide.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Redux', 'OpenWeather API', 'CSS Modules'],
    github: 'https://github.com/kerealbert/weather-now',
    demo: 'https://weather-now-app.netlify.app',
    stars: 35,
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'TaskFlow API',
    type: 'RESTful API',
    description: 'A powerful task management API that provides endpoints for creating, updating, and organizing tasks with user authentication and authorization.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    github: 'https://github.com/kerealbert/taskflow-api',
    stars: 62,
    category: 'Backend',
  },
  {
    id: 5,
    title: 'Budget Buddy',
    type: 'Financial App',
    description: 'A personal finance application that helps users track expenses, create budgets, and visualize their spending habits with intuitive charts.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Redux', 'Firebase', 'Recharts'],
    github: 'https://github.com/kerealbert/budget-buddy',
    demo: 'https://budget-buddy-app.netlify.app',
    stars: 47,
    category: 'Fullstack',
  },
  {
    id: 6,
    title: 'DevBlog Theme',
    type: 'Website Template',
    description: 'A clean, responsive blog theme designed specifically for developers to showcase their articles, tutorials, and code snippets.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Prism.js'],
    github: 'https://github.com/kerealbert/dev-blog-theme',
    demo: 'https://dev-blog-theme.netlify.app',
    stars: 28,
    category: 'Frontend',
  },
];