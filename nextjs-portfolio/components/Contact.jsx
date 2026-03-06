'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    const rows = [
        {
            icon: (
                <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
            ),
            label: 'Email',
            value: <a href="mailto:info@yatmanyu.com">info@yatmanyu.com</a>,
        },
        {
            icon: (
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.3 19.79 19.79 0 0 1 1.61 4.68 2 2 0 0 1 3.58 2.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            ),
            label: 'Phone',
            value: '+1 672 558 6077',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            ),
            label: 'LinkedIn',
            value: <a href="https://www.linkedin.com/in/yatmanyu-rawat-7a50a91ba" target="_blank" rel="noreferrer">linkedin.com/in/yatmanyu-rawat</a>,
        },
        {
            icon: (
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            ),
            label: 'Location',
            value: 'Greater Vancouver Metropolitan Area, BC, Canada',
        },
    ]

    return (
        <section id="contact" ref={ref}>
            <motion.p className="sec-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}>Let's Connect</motion.p>
            <motion.h2 className="sec-title" style={{ color: 'var(--ink)' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 }}>Get in Touch</motion.h2>

            <div className="contact-grid">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .2 }}>
                    <div className="contact-bio">
                        <p>They say you should never trust a lawyer who can't do math — so I decided to become a Financial Planner just to be safe. I'm essentially a legal-financial hybrid.</p>
                        <p>Whether you need a bulletproof contract drafted, a CRM managed with clinical precision, or someone who actually enjoys reading terms and conditions — I'm your person! I'm ready to bring some serious ROI to legal administration or financial services across Greater Vancouver. Let's chat before someone else realises that I'm fun at parties and decent in law!</p>
                    </div>
                    <a href="mailto:info@yatmanyu.com" className="btn-dark">Send an Email →</a>
                </motion.div>

                <motion.div className="contact-items" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .3 }}>
                    {rows.map(({ icon, label, value }) => (
                        <div key={label} className="contact-row">
                            <div className="contact-icon">{icon}</div>
                            <div>
                                <div className="contact-row-label">{label}</div>
                                <div className="contact-row-val">{value}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
