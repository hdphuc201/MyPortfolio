import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import EffectSection from '../EffectSection'
import { GradientText } from '../TextEffect'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'E-Commerce',
        description:
            'Developed a full-stack e-commerce platform with responsive UI and real-time backend integration. Implemented an admin dashboard with user, product, order, and discount management.',
        image: '/image/ecommerce.jfif',
        url: 'https://hdpstore.vercel.app/',
        tags: ['ReactJS', 'Zustand', 'TailwindCSS', 'Mongodb', 'Nodejs']
    },
    {
        title: 'Bna&Solution - Freelance',
        description:
            'Developed a product, user, and order management system, improving customer UX. Collaborated with clients to customize UI based on requirements',
        image: '/image/bna.webp',
        url: 'https://bnasolutions.com.vn/',
        tags: ['ReactJS', 'Zustand', 'TailwindCSS']
    },
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

export default function ProjectsSlider() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const sliderRef = useRef(null)

    // // Auto-advance slides
    useEffect(() => {
        if (!autoplay) return

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
        }, 4000)

        return () => clearInterval(timer)
    }, [autoplay])

    // Handle manual navigation
    const handleThumbnailClick = (index) => {
        setAutoplay(false)
        setActiveIndex(index)
    }

    const handleNext = () => {
        setAutoplay(false)
        setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }

    const handlePrev = () => {
        setAutoplay(false)
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    }

    // Touch and mouse event handlers for swiping
    const handleDragStart = (e) => {
        setIsDragging(true)
        setAutoplay(false)

        // Get starting position
        if ('clientX' in e) {
            setStartX(e.clientX)
        } else if (e.touches[0]) {
            setStartX(e.touches[0].clientX)
        }
    }

    const handleDragEnd = (e) => {
        if (!isDragging) return
        setIsDragging(false)

        // Calculate drag distance
        let endX = 0
        if ('clientX' in e) {
            endX = e.clientX
        } else if (e.changedTouches[0]) {
            endX = e.changedTouches[0].clientX
        }

        const diffX = endX - startX

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                handlePrev()
            } else {
                handleNext()
            }
        }
    }

    const handleDragMove = (e) => {
        if (!isDragging || !sliderRef.current) return
        e.preventDefault()
    }

    return (
        <section className="min-h-screen bg-[#161B22] flex flex-col justify-center items-center pt-20 pb-40 overflow-hidden">
            <GradientText
                text={'Projects'}
                fromColor="from-blue-600"
                toColor="to-purple-600"
                className="text-[40px] md:text-[50px] font-bold mb-4 pb-10"
            />

            <div className="w-full max-w-[1400px] flex items-center justify-center mx-auto px-4">
                <div className="relative w-full flex items-center">
                    {/* Left thumbnails */}
                    <div className="absolute left-0 z-10 flex flex-col items-center gap-6">
                        {projects.map((project, index) => (
                            <>
                                <motion.button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all ${
                                        index === activeIndex
                                            ? 'border-[#a67c52] scale-110 z-20'
                                            : 'border-gray-300 opacity-60 hover:opacity-100'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: index === activeIndex ? 1.1 : 1.05 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    aasda
                                </motion.button>
                                <motion.div
                                    className="h-40 w-[1px] bg-[#a67c52] mt-4"
                                    initial={{ height: 0 }}
                                    animate={{ height: index === activeIndex ? '10rem' : 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </>
                        ))}
                    </div>

                    <div
                        className="w-full pl-24 overflow-visible"
                        ref={sliderRef}
                        onMouseDown={handleDragStart}
                        onMouseUp={handleDragEnd}
                        onMouseMove={handleDragMove}
                        onMouseLeave={(e) => isDragging && handleDragEnd(e)}
                        onTouchStart={handleDragStart}
                        onTouchEnd={handleDragEnd}
                        onTouchMove={handleDragMove}
                    >
                        <div className="relative w-full md:ml-20">
                            <AnimatePresence mode="wait">
                                {projects.map((project, index) => (
                                    <div key={index} className={`w-full ${index === activeIndex ? 'block' : 'hidden'}`}>
                                        <motion.div
                                            className="relative flex"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{
                                                opacity: index === activeIndex ? 1 : 0,
                                                scale: index === activeIndex ? 1 : 0.95
                                            }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover rounded-lg"
                                                style={{
                                                    boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                                    maxHeight: '600px'
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project title and description */}
            <AnimatePresence mode="wait">
                <motion.div
                    className="text-center text-[20px] mt-16 max-w-3xl mx-auto px-4"
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.p
                        className="text-[30px] text-white font-bold tracking-tight mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        {projects[activeIndex].title}
                    </motion.p>
                    <motion.p
                        className="text-gray-500 mt-4 text-[20px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {projects[activeIndex].description}
                    </motion.p>
                    <motion.div
                        className="mt-6 flex flex-wrap justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {projects[activeIndex].tags.map((tag, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[15px]">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div
                        className=" flex justify-center gap-2 mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link
                            to={projects[activeIndex].url}
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            View Project
                            <img
                                src="/image/icon-scroll.svg"
                                alt=""
                                className="w-[20px] h-[20px] "
                            />
                        </Link>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}
