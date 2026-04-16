'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const TOP_SKILLS = [
    { name: 'Office Administration', w: 0.95 },
    { name: 'Client Relations', w: 0.92 },
    { name: 'Legal Administration', w: 0.90 },
    { name: 'Business Development', w: 0.88 },
    { name: 'Salesforce Sales Cloud', w: 0.82 },
    { name: 'Tax Law & Arbitration', w: 0.83 },
    { name: 'Research & Development', w: 0.85 },
]

const TOOLS = ['Salesforce', 'Genesys', 'UKG-Pro', 'Pipeline CRM', 'TrustLayer', 'Microsoft 365', 'Excel for Business', 'Google Docs', 'CanLII', 'Lexis+', 'Generative AI', 'Prompt Engineering', 'Doxserá', 'Asana', 'Adobe']
const PROF_SKILLS = ['Legal Drafting', 'Case Research', 'Arbitration', 'IP & Trademarks', 'Corporate Law', 'Customer Retention', 'Legal Intake', 'Proofreading', 'Income Tax Planning', 'Investment Analysis', 'Logistics Management']
const CERTS = [
    { name: 'Lawyer', issuer: 'Bar Council of Delhi · Issued January 2023' },
    { name: 'Lawyer', issuer: 'Bar Council of India · Issued June 2023' },
    { name: 'LLQP Candidate', issuer: 'Life Licence Qualification Program' },
    { name: 'NCA Candidate', issuer: 'National Committee on Accreditation' },
]

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        if (inView && !animated) setAnimated(true)
    }, [inView])

    return (
        <section id="skills" ref={ref}>
            <motion.p className="sec-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}>Capabilities</motion.p>
            <motion.h2 className="sec-title" style={{ color: 'var(--ink)' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 }}>Skills &amp; Tools</motion.h2>

            <div className="skills-wrap">
                {/* Top Skills */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .2 }}>
                    <div className="skill-block-title">Top Skills</div>
                    <div className="skill-list">
                        {TOP_SKILLS.map(({ name, w }) => (
                            <div key={name} className="skill-row">
                                <span className="skill-name">{name}</span>
                                <div className="skill-bar">
                                    <div
                                        className={`skill-fill${animated ? ' animated' : ''}`}
                                        style={{ transform: animated ? `scaleX(${w})` : 'scaleX(0)' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right column */}
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .3 }}>
                        <div style={{ marginBottom: '36px', overflow: 'hidden' }} className="reveal-inline">
                            <div className="skill-block-title">Technical Tools</div>
                            <div style={{ display: 'flex', whiteSpace: 'nowrap', position: 'relative' }}>
                                <motion.div
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                                    style={{ display: 'flex', gap: '10px', paddingRight: '10px' }}
                                >
                                    {[...TOOLS, ...TOOLS].map((tag, i) => (
                                        <span key={`${tag}-${i}`} className="tag" style={{ flexShrink: 0 }}>
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .4 }}>
                        <div className="reveal-inline">
                            <div className="skill-block-title">Professional Skills</div>
                            <div style={{ display: 'flex', whiteSpace: 'nowrap', position: 'relative', overflow: 'hidden' }}>
                                <motion.div
                                    animate={{ x: ["-50%", "0%"] }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                                    style={{ display: 'flex', gap: '10px', paddingRight: '10px' }}
                                >
                                    {[...PROF_SKILLS, ...PROF_SKILLS].map((tag, i) => (
                                        <span key={`${tag}-${i}`} className="tag" style={{ flexShrink: 0 }}>
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .5 }} style={{ marginTop: 32 }}>
                        <div className="skill-block-title">Certifications</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {CERTS.map(c => (
                                <div key={c.name + c.issuer} className="cert-item">
                                    <div className="cert-name">{c.name}</div>
                                    <div className="cert-issuer">{c.issuer}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
