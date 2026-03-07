'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('about')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)
            const sections = ['about', 'experience', 'skills', 'education', 'extra', 'contact']
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('touchmove', onScroll, { passive: true })
        onScroll() // fire immediately to set correct state on load
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('touchmove', onScroll)
        }
    }, [])

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <>
            <nav id="nav" className={scrolled ? 'scrolled' : ''}>
                <a href="#hero" className="nav-logo" style={{ cursor: 'none' }}>Y.<span>Rawat</span></a>
                <ul className="nav-links">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} className={active === href.slice(1) ? 'active' : ''}>{label}</a>
                        </li>
                    ))}
                </ul>
                <button
                    className="nav-hamburger"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open navigation"
                >
                    <span /><span /><span />
                </button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                position: 'fixed', inset: 0, zIndex: 299,
                                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)',
                            }}
                        />
                        <motion.div
                            initial={{ y: '-100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="mobile-nav-dropdown"
                            style={{
                                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
                                background: 'rgba(26,26,26,0.75)', backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)', borderBottom: '1px solid rgba(255,255,255,0.1)',
                                padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.4)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#fff' }}>Menu</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Close navigation"
                                    style={{
                                        background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
                                        fontSize: '2rem', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
                                    }}
                                >
                                    &times;
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {navLinks.map(({ href, label }) => (
                                    <a key={href} href={href} onClick={() => setMobileOpen(false)} style={{
                                        color: '#fff', fontSize: '1.1rem', textDecoration: 'none',
                                        letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif"
                                    }}>
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
