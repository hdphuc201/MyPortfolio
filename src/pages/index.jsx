import React, { useState, useEffect, useRef } from 'react'
import { FadeInText, GradientText } from '~/components/TextEffect'
import { HoverCard, MagneticButton, ButtonGlow } from '~/components/HoverEffect'
import { FadeInSection, ScrollProgress } from '~/components/ScrollEffect'
import { Parallax, MouseParallax } from '~/components/ParallaxEffect'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Tilt } from 'react-tilt'
import { Github, Linkedin, Facebook, Mail, ArrowRight } from 'lucide-react'
import EffectSection from '~/components/EffectSection'
import { motion, AnimatePresence } from 'framer-motion'
import Skills from '~/components/Skills'
import './index.css'

const Index = () => {
    const [tab, setTab] = useState('Frontend')

    const categories = Object.keys(Skills)
    const [showCursor, setShowCursor] = useState(true)
    const avatarRef = useRef(null)
    const titleRef = useRef(null)
    const title2Ref = useRef(null)
    const lastScrollY = useRef(0)
    const numberScrollRef = useRef(0)

    const defaultOptions = {
        reverse: false,
        max: 30,
        perspective: 500,
        scale: 1.05,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        easing: 'cubic-bezier(.03,.98,.52,.99)'
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            numberScrollRef.current = -Math.min(currentScrollY, 150)
            const isScrollingDown = currentScrollY > lastScrollY.current

            gsap.to(avatarRef.current, {
                x: isScrollingDown ? numberScrollRef.current : 0,
                opacity: isScrollingDown && numberScrollRef.current === -150 ? 0 : 1,
                duration: 1
            })

            gsap.to(titleRef.current, {
                x: (i) => (isScrollingDown ? (i === 0 ? -50 : 50) : 0),
                duration: 1
            })

            gsap.to(title2Ref.current, {
                x: (i) => (isScrollingDown ? (i === 0 ? 50 : -50) : 0),
                duration: 1
            })

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline()

        const isMobile = window.innerWidth <= 768
        const startX = isMobile ? -200 : -600

        // Avatar animation xuất hiện từ trái
        tl.fromTo(avatarRef.current, { x: startX, opacity: 0 }, { x: 0, opacity: 1, duration: 2.5, ease: 'power2.out' })

        // Chữ rơi xuống sau khi avatar xuất hiện
        tl.fromTo(
            titleRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'bounce.out' },
            '-=0.5'
        )

        tl.fromTo(
            title2Ref.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'bounce.out' },
            '-=0.8'
        )
    }, [])

    useEffect(() => {
        gsap.to(avatarRef.current, {
            x: () => window.scrollY * -0.5,
            opacity: () => Math.max(1 - window.scrollY / 300, 0),
            ease: 'power1.out'
        })
    }, [])

    const projects = [
        {
            title: 'E-Commerce',
            description:
                'Developed a full-stack e-commerce platform with responsive UI and real-time backend integration. Implemented an admin dashboard with user, product, order, and discount management.',
            image: '/image/ecommerce.jfif',
            url: 'https://hdpstore.vercel.app/',
            tags: ['ReactJS', 'Zustand', 'TailwindCSS', 'Mongodb', 'Nodejs']
        },
        // {
        //     title: 'Bna&Solution - Freelance',
        //     description:
        //         'Developed a product, user, and order management system, improving customer UX. Collaborated with clients to customize UI based on requirements',
        //     image: '/image/bna.png',
        //     url: 'https://bnasolutions.com.vn/',
        //     tags: ['ReactJS', 'Zustand', 'TypeScript', 'TailwindCSS']
        // },
        {
            title: 'Gbox Studio',
            description:
                'Designed an attractive and responsive user interface. Created smooth and innovative interactive effects.',
            image: '/image/gbox.jpg',
            url: 'https://g-box.vercel.app/',
            tags: ['HTML', 'Sass', 'Jquery', 'GSAP', 'AOS', 'Photoshop']
        },
        {
            title: 'Kymco',
            description:
                'Designed an attractive and responsive user interface. Created smooth and innovative interactive effects.',
            image: '/image/kymco.png',
            url: 'https://kymco.vercel.app/',
            tags: ['HTML', 'Sass', 'Jquery', 'GSAP', 'AOS', 'Photoshop']
        }
    ]

    const fileCV = [
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

    const handleDownload = (item) => {
        console.log(item)
        const filePath =
            item.type == 'en'
                ? '/assets/files/HuynhDuyPhuc_FrontendDeveloper_CV.pdf'
                : '/assets/files/HuynhDuyPhuc_FrontendDeveloper_CV_VN.pdf'

        fetch(filePath)
            .then((response) => response.blob()) // Chuyển đổi tệp thành Blob
            .then((blob) => {
                const url = window.URL.createObjectURL(blob)

                const link = document.createElement('a')
                link.href = url
                link.download = 'HuynhDuyPhuc_CV_FrontendDeveloper.pdf' // Tên file khi tải về
                link.style.display = 'none'
                document.body.appendChild(link)

                link.click()

                document.body.removeChild(link)
                window.URL.revokeObjectURL(url)
            })
            .catch((error) => console.error('File download error:', error))
    }

    return (
        <div className="min-h-screen bg-black text-[#dbdada]">
            <ScrollProgress color="#724a20" />

            <div className="homepage bg-[#000] h-full relative">
                <div className="banner min-h-[100vh] z-[-1]">
                    <div className="flex items-center justify-between px-8 md:px-20 lg:px-60 w-full h-full pt-[10px]">
                        <div className="title text-[40px] md:text-[120px] gap-2 font-bold mb-0 md:mb-[200px]">
                            <div className="flex items-center tracking-normal">
                                <p ref={titleRef} className="hover:text-[#724a20] transition-colors duration-300">
                                    FRONT
                                </p>
                                <span className="w-[30px] md:w-[50px] h-[2px] bg-[#dbdada]"></span>
                                <p ref={title2Ref} className="hover:text-[#724a20] transition-colors duration-300">
                                    END
                                </p>
                            </div>
                            <p className="pl-5 md:pl-10 hover:text-[#724a20] transition-colors duration-300">
                                DEVELOPER
                            </p>
                        </div>
                        <div style={{ transition: 'all 0.3s' }} className="mt-[150px] md:mt-[250px] hidden md:block">
                            <Tilt
                                options={defaultOptions}
                                style={{
                                    height: 250,
                                    width: 250,
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s, opacity 0.3s !important'
                                }}
                            >
                                <div
                                    className="avatar w-[250px] h-[250px]"
                                    ref={avatarRef}
                                    style={{
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s, opacity 0.3s',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <img
                                        src="/image/avatar.jpg"
                                        alt="Avatar"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        className="grayscale-[30%]"
                                    />
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>

                <div className="text-left">
                    <EffectSection
                        title="About Me"
                        //   description="My journey and philosophy"
                        className="bg-black py-16 md:py-24 text-[20px]"
                    >
                        <FadeInSection direction="up">
                            <p className="text-[18px] md:text-[22px] font-light font-roboto leading-relaxed text-[#dbdada]">
                                "I am a proactive Frontend Developer with a strong ability to learn quickly and adapt to
                                any environment.
                                <br />
                                With over a year of hands-on experience in modern frontend technologies, I excel at
                                building high-performance, user-friendly interfaces. <br />I thrive in fast-paced teams,
                                embrace challenges, and continuously seek innovative solutions. <br />
                                My goal is to become a Team Lead within the next 2-3 years, driving both technical
                                excellence and team collaboration to deliver impactful products."
                            </p>
                          {/* <div className="flex mt-10 gap-10">
                                {fileCV?.map((item) => (
                                    <div onClick={() => handleDownload(item.type)}>
                                        <MagneticButton className="bg-transparent border border-[#724a20] text-[#724a20] hover:bg-[#724a20] hover:text-white transition-colors">
                                            {item?.text || ''}
                                        </MagneticButton>
                                    </div>
                                ))}
                            </div> */}
                        </FadeInSection>
                    </EffectSection>
                </div>

                <EffectSection title="Technical Skills" className="bg-black py-16 md:py-24 text-[20px]">
                    <div className="text-white px-4">
                        <div className="relative w-fit mx-auto mb-10 ">
                            <div className="flex gap-8 border-b border-[#444] flex-col md:flex-row">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setTab(cat)}
                                        className={`relative pb-2 text-[30px] transition-all duration-300 font-semibold
                ${tab === cat ? 'text-[#724a20]' : 'text-gray-400 hover:text-[#a67c52]'}`}
                                    >
                                        {cat}
                                        {tab === cat && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute -bottom-[1px] left-0 h-[3px] w-full bg-gradient-to-r from-[#724a20] to-[#a67c52] rounded-full"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <div className="h-full md:h-[300px]">
                                <motion.div
                                    key={tab}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto "
                                >
                                    {Skills[tab].map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            className="bg-[#111] p-6  rounded-xl shadow-md flex items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="text-3xl">{skill.icon}</div>
                                            <div className="text-xl font-medium">{skill.name}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </AnimatePresence>
                    </div>
                </EffectSection>

                {/* Projects Section with Parallax */}
                <div className="relative overflow-hidden py-24">
                    <Parallax speed={0.1} className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 rounded-full bg-[#724a20] opacity-10 blur-xl"></div>
                        </div>
                    </Parallax>

                    <Parallax speed={0.2} className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-48 h-48 rounded-full bg-[#8B5CF6] opacity-10 blur-xl"></div>
                        </div>
                    </Parallax>

                    <div className="container mx-auto px-4 z-10 relative">
                        <div className="text-center mb-16">
                            <GradientText
                                text="Featured Projects"
                                fromColor="from-[#724a20]"
                                toColor="to-[#b2741f]"
                                className="text-[40px] md:text-[50px] font-bold mb-4"
                            />
                            <p className="text-[#888] max-w-2xl mx-auto">Showcasing my work and creative solutions</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <FadeInSection
                                    key={index}
                                    direction={index % 2 === 0 ? 'left' : 'right'}
                                    delay={index * 100}
                                >
                                    <HoverCard
                                        title={project.title}
                                        description=""
                                        effectType="glow"
                                        className="h-full bg-transparent border border-[#222] overflow-hidden"
                                    >
                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-2 text-[#9b9b9b]">
                                                {project.title}
                                            </h3>
                                            {project.description.split('. ').map((line, index) => (
                                                <p className="text-[#888] mt-3" key={index}>
                                                    {line}
                                                    {index !== project.description.split('. ').length - 1 && <br />}
                                                </p>
                                            ))}

                                            <div className="flex flex-wrap gap-2 mb-6 mt-4">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-5 py-3 bg-[#111] text-lg rounded-full text-[#f8f8f8]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={project?.url}
                                                target="_blank"
                                                className="relative inline-flex items-center text-[#724a20]
             before:content-[''] before:block before:w-0 before:h-[1px] before:bg-black before:absolute before:right-0 before:bottom-[-10px] before:transition-all before:duration-500
             hover:before:w-full hover:before:left-0"
                                            >
                                                View Project <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </div>
                                    </HoverCard>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section with Mouse Parallax */}
                <div className="py-24 relative overflow-hidden">
                    <MouseParallax strength={20} className="relative z-10">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <GradientText
                                    text="Contact"
                                    fromColor="from-[#724a20]"
                                    toColor="to-[#b2741f]"
                                    className="text-[40px] md:text-[50px] font-bold mb-4"
                                />
                                <p className="text-[#888] max-w-2xl mx-auto">
                                    Let's discuss your project or potential collaboration
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <FadeInSection direction="left">
                                    <div className="bg-[#0a0a0a] p-8 rounded-lg border border-[#222] z-[-1]">
                                        <form>
                                            <div className="mb-6">
                                                <label className="block text-[#888] mb-2">Your Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#724a20] outline-none"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-[#888] mb-2">Your Email</label>
                                                <input
                                                    type="email"
                                                    className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#724a20] outline-none"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-[#888] mb-2">Message</label>
                                                <textarea className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#724a20] outline-none h-32 resize-none"></textarea>
                                            </div>
                                            <ButtonGlow
                                                className="w-full bg-[#724a20] border-none"
                                                glowColor="rgba(114, 74, 32, 0.6)"
                                            >
                                                Send Message
                                            </ButtonGlow>
                                        </form>
                                    </div>
                                </FadeInSection>

                                <FadeInSection direction="right" delay={200}>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                                        <div className="space-y-6">
                                            <div className="flex items-center justify-center md:justify-start">
                                                <Mail className="w-6 h-6 mr-4 text-[#724a20]" />
                                                <p>hdphuc201@gmail.com</p>
                                            </div>

                                            <div className="flex items-center justify-center md:justify-start">
                                                <div className="w-6 h-6 mr-4 flex items-center justify-center">
                                                    <span className="text-[#724a20] text-xl">📍</span>
                                                </div>
                                                <p>Ho Chi Minh City, Vietnam</p>
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
                                            <div className="flex justify-center md:justify-start space-x-6">
                                                <a
                                                    href="https://www.linkedin.com/in/phuchuynhduy/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[#724a20] transition-colors"
                                                >
                                                    <Linkedin className="w-8 h-8" />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/duyphuc3009"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[#724a20] transition-colors"
                                                >
                                                    <Facebook className="w-8 h-8" />
                                                </a>
                                                <a
                                                    href="https://github.com/HuynhDuyPhuc201"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[#724a20] transition-colors"
                                                >
                                                    <Github className="w-8 h-8" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-12">
                                            <h4 className="text-xl font-semibold mb-4">Available For</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-[#111] p-4 rounded-lg border border-[#222] hover:border-[#724a20] transition-colors">
                                                    <p className="font-medium">Freelance</p>
                                                    <p className="text-[#888] text-sm">Available</p>
                                                </div>
                                                <div className="bg-[#111] p-4 rounded-lg border border-[#222] hover:border-[#724a20] transition-colors">
                                                    <p className="font-medium">Full-time</p>
                                                    <p className="text-[#888] text-sm">Open to offers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInSection>
                            </div>
                        </div>
                    </MouseParallax>
                </div>

                {/* Social Media Links */}
                <div className="sticky bottom-[200px] h-auto left-[50px] pl-10">
                    <ul className="w-[32px]">
                        <li className="mt-10">
                            <a
                                href="https://www.linkedin.com/in/phuchuynhduy/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-[32px] h-[32px] text-[#dbdada] hover:text-[#724a20] transition-colors" />
                            </a>
                        </li>
                        <li className="mt-10">
                            <a href="https://www.facebook.com/duyphuc3009" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-[32px] h-[32px] text-[#dbdada] hover:text-[#724a20] transition-colors" />
                            </a>
                        </li>
                        <li className="mt-10">
                            <a href="https://github.com/HuynhDuyPhuc201" target="_blank" rel="noopener noreferrer">
                                <Github className="w-[32px] h-[32px] text-[#dbdada] hover:text-[#724a20] transition-colors" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#0a0a0a] text-[#888] py-8 border-t border-[#222]">
                <div className="container mx-auto px-4 text-center">
                    <FadeInText text="© 2025 Frontend Developer Portfolio" direction="up" className="text-lg" />
                    <div className="mt-4">
                        <button
                            onClick={() => setShowCursor((prev) => !prev)}
                            className="py-2 px-4 bg-[#111] text-[#dbdada] rounded-lg hover:bg-[#222] transition-colors text-lg"
                        >
                            {showCursor ? 'Hide' : 'Show'} Cursor Effect
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Index
