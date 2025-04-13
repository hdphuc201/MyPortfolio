import React, { useState, useEffect } from 'react'

const AnimatedCursor = ({ scrollY }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY + scrollY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [scrollY])

    return (
        <div
            className="custom-cursor"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        />
    )
}

export default AnimatedCursor
