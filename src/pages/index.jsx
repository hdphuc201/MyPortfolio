import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Tilt } from 'react-tilt'
import RotatingTextCircle from '~/components/RotatingTextCircle'
import ProjectsSlider from '~/components/section/ProjectsSlider'
import ScrollProgressBar from '~/components/ScrollProgressBar'
import Footer from '~/components/layout/Footer'
import SocialMedia from '~/components/section/SocialMedia'
import AboutMe from '~/components/section/AboutMe'
import TechnicalSkills from '~/components/section/TechnicalSkills'
import Contact from '~/components/layout/Contact'
import Experience from '~/components/section/Experience'
import './index.css'

const Index = () => {
    const sectionRef = useRef(null)
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            gsap.to(sectionRef.current, {
                y: scrollY * -0.3,
                ease: 'power1.out',
                overwrite: 'auto'
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen text-[#dbdada]">
            <ScrollProgressBar>
                <div className="min-h-[300px] bg-[#161B22]">
                    <div className=" h-full relative ">
                        <div className="banner min-h-[100vh] z-[-1] bg-[#0D1117]">
                            <div className="relative h-[100vh]">
                                <div className="flex items-center justify-between px-8 md:px-20 lg:px-60 w-full h-full pt-[10px]">
                                    <div className="title text-[40px] md:text-[120px] gap-2 font-bold mb-0 md:mb-[200px]">
                                        <div className="flex items-center tracking-normal">
                                            <p
                                                ref={titleRef}
                                                className="hover:text-[#e6d6c2] transition-colors duration-300"
                                            >
                                                FRONT
                                            </p>
                                            <span className="w-[30px] md:w-[50px] h-[2px] bg-[#dbdada]"></span>
                                            <p
                                                ref={title2Ref}
                                                className="hover:text-[#e6d6c2] transition-colors duration-300"
                                            >
                                                END
                                            </p>
                                        </div>
                                        <p className="pl-5 md:pl-10 hover:text-[#e6d6c2] transition-colors duration-300">
                                            DEVELOPER
                                        </p>
                                    </div>
                                    <div style={{ transition: 'all 0.3s' }} className="">
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
                                                    src="/image/avatar.png"
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
                                <div className="absolute right-[10%] bottom-[10%]">
                                    <RotatingTextCircle text="HUYNH • DUY • PHUC • " />
                                </div>
                                <div className="absolute left-[5%] bottom-[0]">
                                    <div className="scroll relative">
                                        <img src="/image/scroll-bg.svg" alt="" className="w-[150px] h-[150px]" />
                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-5">
                                            <p className="text-[#dacbbc] text-[14px]"> Scroll </p>
                                            <img
                                                src="/image/icon-scroll.svg"
                                                alt=""
                                                className="w-[15px] h-[15px] transform rotate-90"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section ref={sectionRef} className="aboutme text-left text-[#dbdada] bg-[#161B22]">
                            <AboutMe />
                            <TechnicalSkills />
                            <Experience />
                            <ProjectsSlider />
                            <Contact />
                        </section>
                        <SocialMedia />
                    </div>
                </div>
            </ScrollProgressBar>
            <Footer />
        </div>
    )
}

export default Index
