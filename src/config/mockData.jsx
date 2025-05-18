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
        text: 'Download CV English',
        id: 1
    },
    {
        type: 'vn',
        id: 2,
        text: 'Download CV Vietnamese'
    }
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