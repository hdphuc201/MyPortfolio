'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '~/config/mockData'

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}



const Experience = () => {
    const experienceRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: experienceRef.current,
                start: 'top 80%',
                onEnter: () => {
                    gsap.fromTo(
                        experienceRef.current.querySelector('.experience-title'),
                        {
                            y: 50,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.out'
                        }
                    )

                    // Subtitle animation
                    gsap.fromTo(
                        experienceRef.current.querySelector('.experience-subtitle'),
                        {
                            y: 30,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            delay: 0.2
                        }
                    )

                    // Timeline line animation
                    gsap.fromTo(
                        experienceRef.current.querySelector('.timeline-line'),
                        {
                            height: 0
                        },
                        {
                            height: '100%',
                            duration: 2,
                            ease: 'power2.out',
                            delay: 0.5
                        }
                    )

                    // Experience cards animation
                    gsap.fromTo(
                        experienceRef.current.querySelectorAll('.experience-card'),
                        {
                            x: (i) => (i % 2 === 0 ? -100 : 100),
                            opacity: 0,
                            scale: 0.8
                        },
                        {
                            x: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            stagger: 0.3,
                            ease: 'back.out(1.7)',
                            delay: 1
                        }
                    )

                    // Timeline dots animation
                    gsap.fromTo(
                        experienceRef.current.querySelectorAll('.timeline-dot'),
                        {
                            scale: 0,
                            opacity: 0
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.3,
                            ease: 'back.out(1.7)',
                            delay: 1.5
                        }
                    )

                    // Bottom decoration animation
                    gsap.fromTo(
                        experienceRef.current.querySelectorAll('.bottom-dot'),
                        {
                            scale: 0,
                            opacity: 0
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.2,
                            ease: 'back.out(1.7)',
                            delay: 2.5
                        }
                    )
                }
            })
        }, experienceRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={experienceRef} className="relative z-10 py-20 px-4 mb-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl !text-[#dbdada] md:text-7xl lg:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-[#dbdada] mx-auto rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        My professional journey in fullstack development
                    </p>
                </div>
                <div className="relative">
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 timeline-line"
                        style={{ height: 0, top: '2rem', bottom: '2rem' }}
                    ></div>
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full timeline-dot border-4 border-black z-20">
                                    <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                                </div>

                                {/* Experience Card */}
                                <div className={`w-6/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                    <motion.div
                                        className="experience-card backdrop-blur-md bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl p-8 border border-gray-700/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden group"
                                        whileHover={{
                                            scale: 1.02,
                                            y: -5
                                        }}
                                        onMouseEnter={(e) => {
                                            gsap.to(e.currentTarget, {
                                                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)',
                                                duration: 0.3
                                            })
                                        }}
                                        onMouseLeave={(e) => {
                                            gsap.to(e.currentTarget, {
                                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                                                duration: 0.3
                                            })
                                        }}
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-2xl"></div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="mb-4 pb-2">
                                                <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                                                <div className="flex text-2xl pt-2 flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                                    <p className="text-blue-400 font-semibold text-xl">{exp.company}</p>
                                                    <span className="text-gray-400 text-xl">{exp.location}</span>
                                                </div>
                                                <p className="text-cyan-400 font-2xl">{exp.period}</p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
                                                {exp.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, achIndex) => (
                                                        <li
                                                            key={achIndex}
                                                            className="flex items-start gap-2 text-gray-300 text-2xl"
                                                        >
                                                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Floating Particles on Hover */}
                                        <div className="absolute inset-0 pointer-events-none">
                                            {[...Array(3)].map((_, particleIndex) => (
                                                <motion.div
                                                    key={particleIndex}
                                                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                                                    style={{
                                                        left: `${20 + particleIndex * 30}%`,
                                                        top: `${20 + particleIndex * 20}%`
                                                    }}
                                                    animate={{
                                                        y: [-5, -15, -5],
                                                        opacity: [0, 1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        delay: particleIndex * 0.5
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Decoration */}
                <div className="flex justify-center mt-16">
                    <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="bottom-dot w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.3
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
