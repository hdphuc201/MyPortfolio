import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaNpm } from 'react-icons/fa'
import { Github, Linkedin, Facebook } from 'lucide-react'

import {
    SiTypescript,
    SiJquery,
    SiRedux,
    SiReactquery,
    SiTailwindcss,
    SiAntdesign,
    SiSass,
    SiMongodb,
    SiAdobephotoshop,
    SiGnubash,
    SiExpress
} from 'react-icons/si'
import { MdAnimation } from 'react-icons/md'

export const Skills = {
    Frontend: [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'jQuery', icon: <SiJquery color="#0769AD" /> },
        { name: 'ReactJS', icon: <FaReact color="#61DAFB" /> },
        { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
        { name: 'Redux Toolkit', icon: <SiRedux color="#764ABC" /> }, // Redux Toolkit sử dụng cùng biểu tượng với Redux
        { name: 'React Query', icon: <SiReactquery color="#FF4154" /> },
        { name: 'Ant Design', icon: <SiAntdesign color="#0170FE" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss color="#38B2AC" /> },
        { name: 'SCSS', icon: <SiSass color="#CC6699" /> }
    ],
    Backend: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Express', icon: <SiExpress /> }
    ],
    Tools: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop color="#31A8FF" /> },
        { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
        { name: 'GSAP', icon: <MdAnimation color="#88CE02" /> }, // Sử dụng biểu tượng animation để đại diện cho GSAP
        { name: 'CI/CD', icon: <SiGnubash color="#4EAA25" /> }, // Sử dụng biểu tượng Bash để đại diện cho CI/CD
        { name: 'NPM', icon: <FaNpm color="#CB3837" /> } // Thêm NPM vào danh sách công cụ
    ]
}
export const fileCV = [
    {
        type: 'en',
        text: 'Resume',
        id: 1
    },
    // {
    //     type: 'vn',
    //     id: 2,
    //     text: '#e6d6c2 Vietnamese'
    // }
]

export const information = [
    {
        href: 'https://www.linkedin.com/in/phuchuynhduy/',
        icon: <Linkedin />
    },
    {
        href: 'https://www.facebook.com/duyphuc3009',
        icon: <Facebook/>
    },
    {
        href: 'https://github.com/HuynhDuyPhuc201',
        icon: <Github/>
    }
]


export const projects = [
    {
        id: 2,
        title: 'Trello Clone – Task Management',
        description:
            'Trello-like task management system with real-time drag & drop board, JWT authentication, REST APIs, and dark/light theme using MUI.',
        image: '/image/trello.png',
        technologies: ['ReactJS', 'Redux Toolkit', 'MUI', 'DnD Kit', 'Socket.IO', 'NodeJS', 'MongoDB', 'ExpressJS'],
        liveUrl: 'https://hdphuc-trello.vercel.app',
        githubUrl: 'https://github.com/HuynhDuyPhuc201/trello-fe',
        featured: true
    },
    {
        id: 3,
        title: 'BnASolutions – Freelance Job',
        description:
            'Frontend development for product and order management tools. Focused on reusable components, UI enhancements and RESTful API integration.',
        image: '/image/bna-1.webp',
        technologies: ['ReactJS', 'Zustand', 'TailwindCSS', 'Photoshop'],
        liveUrl: 'https://bnasolutions.com.vn',
        featured: true
    },
    {
        id: 1,
        title: 'Ecommerce Website',
        description:
            'Fullstack eCommerce web app with features like product management, cart, checkout, and admin dashboard. Optimized for performance with Lighthouse score 98/100 (FCP 0.6s, LCP 0.9s).',
        image: '/image/ecommerce.jfif',
        technologies: ['ReactJS', 'Zustand', 'TailwindCSS', 'NodeJS', 'MongoDB', 'Mongoose', 'ExpressJS'],
        liveUrl: 'https://hdpstore.vercel.app',
        admin: 'https://hdpstore-admin.vercel.app/',
        githubUrl: 'https://github.com/HuynhDuyPhuc201/ecommerce-fe',
        featured: true
    },
    {
        id: 4,
        title: 'Personal Website Portfolio',
        description:
            'A responsive and animated portfolio to showcase personal projects, skills, and contact info. Used GSAP and React-Tilt for animation.',
        image: '/image/porfolio.jpg',
        technologies: ['ReactJS', 'Zustand', 'TailwindCSS', 'GSAP', 'React-Tilt', 'Framer Motion'],
        liveUrl: 'https://phucfedev.vercel.app',
        githubUrl: 'https://github.com/yourusername/portfolio',
        featured: false
    },
    {
        id: 4,
        title: 'Personal Website Portfolio',
        description:
            'A responsive and animated portfolio to showcase personal projects, skills, and contact info. Used GSAP and React-Tilt for animation.',
        image: '/image/porfolio.jpg',
        technologies: ['ReactJS', 'Zustand', 'TailwindCSS', 'GSAP', 'React-Tilt', 'Framer Motion'],
        liveUrl: 'https://phucfedev.vercel.app',
        githubUrl: 'https://github.com/yourusername/portfolio',
        featured: false
    }
]


export const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6', category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'Frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'Frontend' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', category: 'Frontend' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, color: '#38B2AC', category: 'Frontend' },
    { name: 'SCSS', icon: <SiSass />, color: '#CC6699', category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', category: 'Backend' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff', category: 'Backend' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', category: 'Tools' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E', category: 'Tools' },
    { name: 'GSAP', icon: <MdAnimation />, color: '#88CE02', category: 'Tools' }
]

// Experience data
export const experiences = [
    {
        id: 1,
        title: 'Fresher Frontend Developer',
        company: 'FOODCONNECTION',
        period: '09/2022 - 01/2023',
        location: 'Ho Chi Minh City, Vietnam',
        description:
            'Focused on building intuitive UI/UX and optimizing frontend performance. Collaborated closely with backend team to integrate APIs and deliver a seamless user experience.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Photoshop', 'Figma'],
        achievements: [
            'Improved frontend performance and load time by 40%',
            'Refactored UI components for better scalability and maintainability',
            'Worked directly with backend developers to integrate RESTful APIs smoothly'
        ]
    },
    {
        id: 2,
        title: 'Fresher Frontend Developer',
        company: 'Jizaka',
        period: '09/2021 - 08/2022',
        location: 'Ho Chi Minh City, Vietnam',
        description:
            'Built responsive websites and web applications for various clients. Collaborated with design and backend teams to deliver high-quality products.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Photoshop', 'SCSS'],
        achievements: [
            'Delivered 15+ client projects',
            'Reduced code bundle size by 30%',
            'Implemented modern CSS animations'
        ]
    },
    {
        id: 3,
        title: 'Frontend Intern',
        company: 'Mevivu',
        period: '05/2021 - 08/2021',
        location: 'Ho Chi Minh City, Vietnam',
        description:
            'Learned modern frontend development practices and contributed to various internal projects. Gained experience in version control and agile development.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        achievements: ['Completed 3 training projects', 'Contributed to company website redesign']
    }
]