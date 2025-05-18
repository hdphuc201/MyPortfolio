import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

export default function ScrollProgressBar({ children }) {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true
        })

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        lenis.on('scroll', ({ scroll, limit }) => {
            const progress = (scroll / limit) * 100
            setScrollProgress(progress)
        })

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <>
            <div
                className="fixed top-0 left-0 h-[4px] rounded-full bg-[#bd8a4b] z-50 transition-all duration-200"
                style={{ width: `${scrollProgress}%` }}
            />
            {children}
        </>
    )
}
