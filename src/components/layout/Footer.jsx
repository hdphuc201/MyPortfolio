import React from 'react'
import { FadeInText } from '../TextEffect'

function Footer() {
    return (
        <footer className="bg-[#0D1117] text-[#888] py-8 border-t border-[#222]">
            <div className="container mx-auto px-4 text-center">
                <FadeInText text="© 2025 Frontend Developer Portfolio" direction="up" className="text-lg" />
            </div>
        </footer>
    )
}

export default Footer
