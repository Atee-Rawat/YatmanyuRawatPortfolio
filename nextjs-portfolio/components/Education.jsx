'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EDU = [
    {
        year: 'Jan 2025 – Jun 2026',
        degree: 'PDD Financial Planning',
        school: 'Douglas College',
        location: 'New Westminster, BC, Canada',
        detail: `Completed the Post-Degree Diploma in Financial Planning at Douglas College, a comprehensive program accredited by FP Canada.
<br/>• Wealth & Retirement Planning: Developed expertise in CFP®-aligned financial planning principles to construct tailored wealth and retirement strategies.
<br/>• Taxation & Risk Assessment: Focused on navigating tax strategies and risk metrics to optimize long-term financial security.
<br/>• Investment & Estate Analysis: Gained hands-on skills in investment analysis, structured estate planning, and targeted insurance solutions.
<br/>• Data Modeling & Analytics: Built data-driven financial strategies utilizing technical financial modeling and advanced Excel for business.
<br/>• Personal Finance I & II (Foundational & Advanced): Mastered the core pillars of comprehensive financial planning. Covered everything from cash flow management, credit optimization, and strategic budgeting to complex wealth accumulation and distribution strategies aligned with CFP® standards.`,
        tags: ['CFP® Track', 'Wealth Management', 'Tax Strategies', 'Risk Assessment', 'Financial Modelling'],
    },
    {
        year: 'Sep 2023 – Sep 2024 · GPA 3.49',
        degree: 'PDD Business Law',
        school: 'Douglas College',
        location: 'New Westminster, BC, Canada',
        detail: `Achieved a 3.49 GPA in this specialized post-graduate program designed to bridge international legal expertise with the Canadian commercial/legal framework. Developed core competencies in analyzing and drafting commercial contracts, formulating practical legal risk management strategies, and conducting advanced legal research within the British Columbia judicial system. My coursework included in-depth study of Procurement Law, Labor Relations, and Real Estate regulations, equipping me with the technical proficiency to manage complex legal documentation and corporate governance.`,
        tags: ['International Business Law', 'Real Estate Law', 'Business Law', 'Legal Research', 'Labor Relations', 'Public Law'],
    },
    {
        year: 'Jul 2019 – Oct 2022',
        degree: 'Bachelor of Laws (LL.B)',
        school: 'Campus Law Centre, Faculty of Law, University of Delhi',
        location: 'Delhi, India',
        detail: `I had the honour of attending one of the top law schools in India, Faculty of Law, University of Delhi. The curriculum was based on an in-depth study of case laws and court judgements, alongside, monthly conferences given by famous legal scholars. I was also a council member in the prestigious moot court society, Law Centre II and helped in organising the popular S.K Puri Memorial Moot Court, whereby, we hosted talented moot court teams from all around the globe.
<br/><br/><em>Activities and societies: Moot Court Society</em>`,
        tags: ['Tax Law', 'Arbitration', 'Intellectual Property', 'Administrative Assistance', 'Mediation', 'International Law', 'Contract Law', 'Property Law'],
    },
    {
        year: 'Jul 2016 – Jul 2019 · 1st Division',
        degree: 'BA (Honours) in English, English Language and Literature/Letters',
        school: 'Dr. B. R. Ambedkar University Delhi (AUD)',
        location: 'Delhi, India',
        detail: `Along with literature written in English, the course taught a strong component of translations into English of Indian and all other significant literatures across the world. The programme imparted an understanding of literature as a cultural and linguistic practice and arm them with tools to dismantle accepted and forced hierarchies in literary and cultural practices.
<br/><br/><em>Activities and societies: Quizzards: Quiz Society, LitSoc: English Literature Society</em>`,
        tags: ['Analytical Writing', 'Critical Reasoning', 'Literature', 'Translation', 'Communication'],
    },
]

export default function Education() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section id="education" ref={ref}>
            <motion.p className="sec-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}>Academic Background</motion.p>
            <motion.h2 className="sec-title" style={{ color: 'var(--ink)' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 }}>Education</motion.h2>

            <div className="edu-cards">
                {EDU.map((e, i) => (
                    <motion.div
                        key={e.degree}
                        className="edu-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: .65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -4 }}
                    >
                        <div className="edu-year">{e.year}</div>
                        <div className="edu-degree">{e.degree}</div>
                        <div className="edu-school">{e.school}</div>
                        <div className="edu-location">{e.location}</div>
                        <div className="edu-detail" dangerouslySetInnerHTML={{ __html: e.detail }} />
                        <div className="edu-tag-list">
                            {e.tags.map(t => <span key={t} className="edu-tag">{t}</span>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
