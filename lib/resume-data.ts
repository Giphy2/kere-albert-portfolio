interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechVision Solutions',
    period: 'Jan 2023 - Present',
    responsibilities: [
      'Lead the development of responsive web applications using React and Next.js',
      'Implement state management solutions with Redux and Context API',
      'Collaborate with UI/UX designers to implement pixel-perfect designs',
      'Mentor junior developers and conduct code reviews',
      'Optimize application performance and reduce load times by 40%'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS']
  },
  {
    title: 'Full-Stack Developer',
    company: 'InnovateTech',
    period: 'Jun 2021 - Dec 2022',
    responsibilities: [
      'Built RESTful APIs using Node.js and Express',
      'Developed and maintained MongoDB database schemas',
      'Implemented authentication systems using JWT and OAuth',
      'Created responsive UIs with React and Material UI',
      'Deployed applications on AWS and managed CI/CD pipelines'
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'React', 'AWS']
  },
  {
    title: 'Web Developer Intern',
    company: 'Digital Solutions Kenya',
    period: 'Jan 2021 - May 2021',
    responsibilities: [
      'Assisted in developing and maintaining client websites',
      'Created responsive designs using HTML, CSS, and JavaScript',
      'Learned and applied best practices for web development',
      'Contributed to the company\'s internal tools and documentation',
      'Participated in team meetings and brainstorming sessions'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Git']
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
    period: '2019 - Present',
    description: [
      'Focus on software engineering, data structures, and algorithms',
      'Relevant coursework: Web Development, Database Management, Computer Networks, Artificial Intelligence',
      'Participated in hackathons and coding competitions',
      'Final year project: Developing an AI-powered learning platform for students'
    ]
  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'Moringa School',
    period: 'May 2020 - Aug 2020',
    description: [
      'Intensive 12-week program covering full-stack web development',
      'Developed multiple projects using modern web technologies',
      'Collaborated with peers on group projects to solve real-world problems',
      'Graduated with distinction and received the "Best Team Project" award'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'Dec 2022',
    description: 'Certified in developing, deploying, and debugging cloud-based applications using AWS.'
  },
  {
    name: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (formerly Facebook)',
    date: 'Aug 2022',
    description: 'Comprehensive certification covering advanced React, state management, and modern frontend development practices.'
  },
  {
    name: 'MongoDB Developer Certification',
    issuer: 'MongoDB University',
    date: 'Mar 2022',
    description: 'Mastery in designing, building, and optimizing MongoDB databases and applications.'
  },
  {
    name: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    date: 'Nov 2021',
    description: 'Foundation in UX design principles including user research, wireframing, prototyping, and usability testing.'
  }
];