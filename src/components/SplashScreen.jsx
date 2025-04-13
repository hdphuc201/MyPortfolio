import React, { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

const SplashScreen = ({ isLoading, onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete()
        }, 3000)

        return () => clearTimeout(timer)
    }, [onLoadingComplete])

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
                isLoading ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
        >
            <div className="relative">
                <div className="absolute -inset-10 animate-spin-slow rounded-full border-b-8 border-t-8 border-purple-500 opacity-30"></div>
                <div className="absolute -inset-16 animate-spin-slow-reverse rounded-full border-b-8 border-l-8 border-cyan-400 opacity-20"></div>
                <div className="absolute -inset-5 animate-ping duration-1000 rounded-full border-4 border-cyan-400 opacity-10"></div>

                <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-black p-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 opacity-50 blur-lg"></div>
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center rounded-full bg-black text-white">
                        <Loader2 className="h-10 w-10 animate-spin text-cyan-400" />
                        <span className="mt-4 text-sm font-medium tracking-widest text-white opacity-70">LOADING</span>
                    </div>
                </div>
            </div>

            <div className="mt-16 w-48 max-w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-1 animate-progress-bar origin-left bg-gradient-to-r from-purple-500 to-cyan-400"></div>
            </div>
        </div>
    )
}

export default SplashScreen
