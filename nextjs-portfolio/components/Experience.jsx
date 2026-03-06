'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EXP = [
    {
        date: 'Sep 2024 – Present', duration: '1 yr 7 mos', loc: 'Vancouver, BC · On-site', type: 'Permanent Full-time',
        role: 'Customer Experience Specialist', company: 'Grandview Lanes',
        desc: [
            'Addressing guest needs, resolving inquiries and successfully hosting and coordinating large-scale corporate gatherings, ensuring guest engagement',
            'Supply control, monitoring stock levels and maintaining accurate records for operational efficiency',
            'Conducting cash management, dealing with day-to-day administrative issues and upholding service quality',
        ],
        skills: ['Guest Relations', 'Cash Management', 'Event Coordination', 'Supply Control'],
    },
    {
        date: 'Feb 2024 – May 2024', duration: '4 mos', loc: 'Greater Vancouver Area', type: 'Permanent Full-time',
        role: 'Inbound Sales Specialist', company: '1-800-GOT-JUNK?',
        desc: [
            'Efficiently managing high-volume inbound calls, handling North American customers (USA and Canada)',
            'Navigating CRM systems: Salesforce, Pipeline, Genesys, UKGPro — implementing strategies to ensure seamless operations',
            'Providing email/call support for generating essential documents including insurance documents and payment receipts via TrustLayer',
            'Handling complaints, liaising with franchise partners and truck teams for day-to-day logistics solutions',
            'Engaging actively in meetings and training in adherence to company regulations',
            'Consistently maintained conversion/retention rate of 72% and above',
        ],
        skills: ['Salesforce', 'Genesys', 'UKGPro', 'TrustLayer', 'Pipeline CRM'],
    },
    {
        date: 'Jan 2019 – Mar 2024', duration: '5 yrs 3 mos', loc: 'New Delhi · Hybrid', type: 'Permanent Part-time',
        role: 'Expansion Specialist', company: 'Himalayan Habitat Private Limited',
        desc: [
            'Improved organisational efficiency and ensured goal attainment',
            'Implemented cost-effective measures and aligned functions with strategic objectives',
            'Focused on drafting, implementing, and evaluating cross-cutting decisions for long-term growth',
            'Enforced adherence to values, work rules, policies, and procedures within the team',
        ],
        skills: ['Administration', 'R&D', 'Strategic Planning'],
    },
    {
        date: 'Jan 2023 – Feb 2024', duration: '1 yr 2 mos', loc: 'Delhi, India · On-site', type: 'Freelance',
        role: 'Real Estate Associate', company: 'Bhairon Estates',
        desc: [
            'Fostered strong client relationships and ensured client satisfaction',
            'Worked on regulatory compliance, focusing on current industry standards',
            'Conducted client meetings and actively engaged in problem-solving',
            'Developed marketing, presentations, and commercial strategies for holiday homes',
        ],
        skills: ['Sales Presentations', 'Administration', 'Client Relations'],
    },
    {
        date: 'Jan 2021 – Feb 2024', duration: '3 yrs 2 mos', loc: 'Delhi, India', type: 'Self-employed',
        role: 'Business Development Executive', company: 'HiMilk India',
        desc: [
            'Worked on the R&D of the HiMilk A2 Badri Cow Ghee product line — artisanal product from Uttarakhand hills',
            'Involved in the designing process of the product and its labels',
            'Procurement of licenses, required IP and trademarks',
            'Managed logistics, distribution, and placement of product on online marketplaces and retail stores',
        ],
        skills: ['R&D', 'Logistics Management', 'Business Development', 'Intellectual Property'],
    },
    {
        date: 'Jan 2021 – Jun 2021', duration: '6 mos', loc: 'Delhi, India · Hybrid', type: 'Internship',
        role: 'Judicial Assistant', company: 'High Court of Delhi',
        desc: [
            "Worked on multiple high-profile cases under the guidance of Hon'ble Justice Manoj Kumar Ohri",
            'Dealt with case briefing, case research, and note-making during proceedings',
            'Worked on cases focusing on corporate disputes, intellectual property, tax, and fraud matters',
        ],
        skills: ['Legal Administration', 'Legal Assistance', 'Problem Analysis'],
    },
    {
        date: 'Jan 2022 – Feb 2022', duration: '2 mos', loc: 'Delhi, India · Hybrid', type: 'Internship',
        role: 'Legal Researcher', company: 'RKP & Associates',
        desc: [
            'Worked on legal research of multiple cases across practice areas',
            'Provided assistance in virtual court hearings',
            'Comparative analysis, case research, drafting, and note-making',
        ],
        skills: ['Legal Research', 'Legal Writing', 'Research Support', 'Administrative Assistance'],
    },
]

export default function Experience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section id="experience" ref={ref}>
            <motion.p className="sec-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}>Professional History</motion.p>
            <motion.h2 className="sec-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 }}>Work Experience</motion.h2>

            <div className="exp-timeline">
                {EXP.map((e, i) => (
                    <motion.div
                        key={e.role + e.company}
                        className="exp-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: .6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="exp-meta">
                            <div className="exp-date">{e.date}<br />{e.duration}</div>
                            <div className="exp-loc">{e.loc}</div>
                            <div className="exp-type"><span>{e.type}</span></div>
                        </div>
                        <div className="exp-content">
                            <div className="exp-role">{e.role}</div>
                            <div className="exp-company">{e.company}</div>
                            <ul className="exp-desc">
                                {e.desc.map((d, j) => <li key={j}>{d}</li>)}
                            </ul>
                            <div className="exp-skills">
                                {e.skills.map(s => <span key={s} className="exp-skill">{s}</span>)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
