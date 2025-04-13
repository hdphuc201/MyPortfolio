import { useState, useEffect, useCallback } from 'react'

export function useSplashScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [hasLoaded, setHasLoaded] = useState(false)

    const handleLoadingComplete = useCallback(() => {
        setIsLoading(false)
        setTimeout(() => {
            setHasLoaded(true)
        }, 500)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isLoading ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isLoading])

    return { isLoading, hasLoaded, handleLoadingComplete }
}
