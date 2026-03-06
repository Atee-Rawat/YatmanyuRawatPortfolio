'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXTRA = [
    {
        icon: '⚖️', role: 'Council Member',
        org: 'Moot Court Society, Law Centre-II, Faculty of Law',
        date: 'Jul 2019 – Dec 2022 · 3 yrs 6 mos · Delhi, India',
        body: ['Member of the organising team of S.K. Puri Memorial International Moot Court 2021', 'Participated in GIBS moot court competition', 'Skills: Moot Court · Collaborative Problem Solving · Analytical Skills'],
    },
    {
        icon: '🔍', role: 'Legal Researcher',
        org: 'RKP & Associates · Internship',
        date: 'Jan 2022 – Feb 2022 · 2 mos · Delhi, India · Hybrid',
        body: ['Legal research across multiple case types', 'Assistance in virtual court hearings', 'Comparative analysis, drafting, and note-making', 'Skills: Legal Research · Legal Writing · Research Support'],
    },
    {
        icon: '🌐', role: 'Council Member',
        org: 'Rotaract Club of New Delhi · Internship',
        date: 'Jan 2016 – Jan 2018 · 2 yrs 1 mo · Delhi, India · On-site',
        body: [
            'Coordinated large-scale community outreach initiatives, including blood donation camps and health-awareness drives',
            'Spearheaded educational programs for underprivileged students at government schools, focusing on curriculum delivery and student engagement',
            'Managed logistics and volunteer teams for facility improvement projects, such as the restoration and painting of local orphanages',
            'Organized and facilitated recurring visitation programs and resource distribution drives for senior care facilities and orphanages',
        ],
    },
    {
        icon: '🥛', role: 'Business Development Executive',
        org: 'HiMilk India · Self-employed',
        date: 'Jan 2021 – Feb 2024 · 3 yrs 2 mos',
        body: ['R&D of HiMilk A2 Badri Cow Ghee — artisanal product from the Uttarakhand hills', 'Product design, label creation, IP and trademark procurement', 'Full logistics, distribution, and online marketplace placement'],
    },
]

export default function Extra() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const langRef = useRef(null)
    const langInView = useInView(langRef, { once: true, margin: '-60px' })

    return (
        <section id="extra" ref={ref}>
            <motion.p className="sec-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}>Beyond the Resume</motion.p>
            <motion.h2 className="sec-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 }}>Leadership, Volunteering &amp; More</motion.h2>

            <div className="extra-grid">
                {EXTRA.map((e, i) => (
                    <motion.div
                        key={e.role + e.org}
                        className="extra-card"
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: .6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="extra-icon">{e.icon}</div>
                        <div className="extra-role">{e.role}</div>
                        <div className="extra-org">{e.org}</div>
                        <div className="extra-date">{e.date}</div>
                        <ul className="extra-body">{e.body.map((b, j) => <li key={j}>{b}</li>)}</ul>
                    </motion.div>
                ))}
            </div>

            {/* Languages */}
            <div ref={langRef}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={langInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .2 }} style={{ marginTop: 56, marginBottom: 10 }}>
                    <p className="sec-label">Languages</p>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', fontWeight: 400, color: '#fff', marginBottom: 24 }}>Languages Spoken</h3>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={langInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .35 }} style={{ display: 'flex', gap: 16 }}>
                    <div className="lang-card">
                        <div><div className="lang-name-big">English</div><div className="lang-level-tag">Native / Bilingual</div></div>
                        <div className="lang-flag">🇮🇳🇨🇦</div>
                    </div>
                    <div className="lang-card">
                        <div><div className="lang-name-big">Hindi</div><div className="lang-level-tag">Native / Bilingual</div></div>
                        <div className="lang-flag">🇮🇳</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
