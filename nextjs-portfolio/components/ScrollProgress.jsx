'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrollProgress() {
    const barRef = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY
            const total = document.documentElement.scrollHeight - window.innerHeight
            const pct = total > 0 ? scrolled / total : 0
            if (barRef.current) {
                barRef.current.style.width = `${pct * 100}%`
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div ref={barRef} style={{
            position: 'fixed', top: 0, left: 0, height: 2,
            background: 'var(--gold)', zIndex: 9999,
            width: '0%', transition: 'width .05s linear',
        }} />
    )
}
