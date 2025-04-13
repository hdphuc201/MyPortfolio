// ✅ Lenis Scroll Integration with Custom Cursor - React Version

import { useRoutes } from 'react-router-dom'
import routers from './router'
import { Suspense, useEffect, useRef, useState } from 'react'
import './index.css'
import useAppStore from './store/useAppStore'
import Lenis from '@studio-freight/lenis'
import AnimatedCursor from '~/components/AnimatedCursor'
import { useSplashScreen } from './hooks/useSplashScreen'
import SplashScreen from './components/SplashScreen'

function App() {
    const element = useRoutes(routers)
    const { setIsHoveringBanner } = useAppStore()

    const scrollRef = useRef(null)
    const lenisRef = useRef(null)
    const { isLoading, hasLoaded, handleLoadingComplete } = useSplashScreen()

    const [scrollY, setScrollY] = useState(0)

    // Khởi tạo Lenis scroll
    useEffect(() => {
        if (!lenisRef.current) {
            const lenis = new Lenis({
                duration: 1.2,
                smooth: true,
                smoothTouch: true,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            })
            lenisRef.current = lenis

            const raf = (time) => {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)

            lenis.on('scroll', ({ scroll }) => {
                setScrollY(scroll)
            })
        }

        return () => {
            lenisRef.current?.destroy()
        }
    }, [])

    // Hover effect tracking
    useEffect(() => {
        const handleMouseOver = (e) => {
            const hoverElement = e.target.closest('.hoverable')
            setIsHoveringBanner(!!hoverElement)
        }

        const handleMouseOut = (e) => {
            const hoverElement = e.target.closest('.hoverable')
            setIsHoveringBanner(!hoverElement)
        }

        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <>
            <AnimatedCursor scrollY={scrollY} />
            <div ref={scrollRef} id="scroll-container">
                <SplashScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
                {element}
            </div>
        </>
    )
}

export default App
