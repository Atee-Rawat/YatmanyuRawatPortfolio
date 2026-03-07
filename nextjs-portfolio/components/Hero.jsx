'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] } }) }

export default function Hero() {
    const bgRef = useRef(null)
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, 300])
    const opacity = useTransform(scrollY, [0, 500], [0.03, 0])

    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        // Only apply mouse parallax on non-touch devices
        const isTouch = window.matchMedia('(hover: none)').matches
        if (isTouch) return
        const handleMove = (e) => {
            setMouse({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            })
        }
        window.addEventListener('mousemove', handleMove)
        return () => window.removeEventListener('mousemove', handleMove)
    }, [])

    return (
        <section id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: 'var(--dark)' }}>
            {/* Floating orbs */}
            <motion.div
                animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '10%', left: '15%', width: 400, height: 400,
                    background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
                    borderRadius: '50%', pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{
                    position: 'absolute', bottom: '-10%', right: '5%', width: 500, height: 500,
                    background: 'radial-gradient(circle, rgba(61,107,94,0.06) 0%, transparent 70%)',
                    borderRadius: '50%', pointerEvents: 'none'
                }}
            />

            {/* Parallax watermark */}
            <motion.div style={{
                position: 'absolute', top: '50%', left: '50%',
                x: '-50%', y: useSpring(useTransform(scrollY, [0, 1000], ['-50%', '0%']), { stiffness: 50, damping: 20 }),
                fontFamily: "'Playfair Display', serif",
                fontSize: '32vw', fontWeight: 700, lineHeight: 1,
                color: 'var(--gold)',
                opacity: opacity,
                pointerEvents: 'none', whiteSpace: 'nowrap',
                letterSpacing: '-0.03em', userSelect: 'none',
            }}>YR</motion.div>

            <div className="hero-grid-lines" />

            <motion.div className="hero-inner" style={{ x: mouse.x, y: mouse.y }}>
                <div className="hero-left">
                    <motion.div className="hero-badge" custom={0} initial="hidden" animate="show" variants={fadeUp}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(61,107,94,0.3)' }}
                    >
                        <div className="hero-badge-dot" />
                        <span className="hero-badge-text">Open to Work &nbsp;·&nbsp; Vancouver, BC</span>
                    </motion.div>

                    <motion.h1 className="hero-name" custom={1} initial="hidden" animate="show" variants={fadeUp}>
                        Yatmanyu<br /><em>Rawat</em>
                    </motion.h1>

                    <motion.p className="hero-headline" custom={2} initial="hidden" animate="show" variants={fadeUp}>
                        <strong>Legal · Financial Planning · Client Relations · Business Development</strong>
                        A multidisciplinary professional bridging law, finance, and business — from the courts of Delhi to the boardrooms of Vancouver.
                    </motion.p>

                    <motion.div className="hero-divider" custom={3} initial="hidden" animate="show" variants={fadeUp} />

                    <motion.p className="hero-tagline" custom={4} initial="hidden" animate="show" variants={fadeUp}>
                        "I bring a fusion of legal prowess and a robust background in law, finance, administration, client relations, and business development."
                    </motion.p>

                    <motion.div className="hero-actions" custom={5} initial="hidden" animate="show" variants={fadeUp}>
                        <motion.a href="#experience" className="btn-gold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            View Experience
                        </motion.a>
                        <motion.a href="#contact" className="btn-ghost" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            Get in Touch
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div className="hero-right" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    <motion.div className="hero-photo-badge" whileHover={{ scale: 1.02, rotate: -1 }}>
                        <div className="photo-circle">YR</div>
                        <div className="photo-badge-text">
                            <strong>Greater Vancouver Area</strong>
                            Legal · Financial Planning · Business Development
                        </div>
                    </motion.div>
                    {[
                        { num: '5+', label: 'Years Professional Experience' },
                        { num: '4', label: 'Academic Degrees & Diplomas' },
                        { num: '8', label: 'Roles Across Law, Finance & Business' },
                    ].map(({ num, label }, idx) => (
                        <motion.div
                            key={label}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.06, duration: 0.35 }}
                            whileHover={{ x: -10, scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                        >
                            <motion.div className="stat-num"
                                initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.4 + idx * 0.06, stiffness: 400, damping: 18 }}
                            >{num}</motion.div>
                            <div className="stat-label">{label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
