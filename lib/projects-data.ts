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
    title: 'Portfolio Site',
    type: 'Personal Portfolio',
    description: 'A lightweight and fast personal portfolio showcasing projects and experience. Built with web components using Lit, styled with Bulma, and developed in TypeScript.',
    image: 'https://images.pexels.com/photos/5742858/pexels-photo-5742858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Lit', 'Bulma', 'TypeScript'],
    github: 'https://github.com/Giphy2/kere-albert-portfolio',
    demo: 'https://giphy2.github.io/kere-albert-portfolio/', 
    stars: 22,
    category: 'Frontend',
  },

  {
    id: 2,
    title: 'Radiance Pharma Website',
    type: 'Business Website',
    description: 'A professional website for a pharmaceutical company, providing company profile, product information, and contact sections.',
    image: 'https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['react', 'CSS', 'JavaScript', 'node.js'],
    github: '#',
    demo: ',https://radiancepharma.netlify.app/',
    stars: 4,
    category: 'Frontend',
  },

  {
    id: 3,
    title: 'JKUAT Clubs System',
    type: 'University Management System',
    description: 'A digital platform for managing student clubs at JKUAT. Enables club registration, student membership, admin controls, and activity tracking.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/JKUAT-Main-Campus-Gate-A.jpg"',
    technologies: ['supabase', 'React', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    github: '#',
    demo: 'https://jkuatclub.netlify.app/', 
    stars: 2,
    category: 'Fullstack',
  },

  {
  id: 4,
  title: 'Modi Advocates Website',
  type: 'Law Firm Website',
  description: 'A clean, professional website developed for Modi and Company Advocates to showcase their legal services, team profiles, and contact information. Designed to enhance their digital presence and credibility.',
  image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhdyUyMGZpcm18ZW58MHx8MHx8fDA%3D',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  github: 'https://github.com/kerealbert/modi-advocates-site',
  demo: 'https://modilawfirm.netlify.app/', 
  stars: 12,
  category: 'Frontend',
}

];
  