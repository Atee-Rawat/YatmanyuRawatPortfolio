'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reveal = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } }

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" ref={ref}>
            <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={reveal}>
                <p className="about-label">Who I Am</p>
                <h2 className="about-heading">From the courts<br />of <em>Delhi</em> to the<br />lanes of <em>Vancouver</em></h2>
                <div className="about-deco" />
            </motion.div>

            <div>
                <motion.div className="about-body" initial="hidden" animate={inView ? 'show' : 'hidden'} variants={reveal} transition={{ delay: 0.1 }}>
                    <p>From the bustling streets of India to the rain-soaked charm of Vancouver, I've navigated languages, laws, and lanes — literally. Started with English Honours, dabbled in legal briefs at the Faculty of Law, University of Delhi, then swapped courtrooms for customer smiles in Vancouver.</p>
                    <p>Now diving into the world of business law and finance, blending analytical rigour with frontline experience — because whether it's contracts, cash flows, or customer service, it's all about understanding people, numbers, and what makes things tick.</p>
                </motion.div>

                <motion.div className="about-quote" initial="hidden" animate={inView ? 'show' : 'hidden'} variants={reveal} transition={{ delay: 0.2 }}>
                    <p>"If you like someone who can draft a clause, balance a ledger, and knock down a 7–10 split without missing a beat — let's connect."</p>
                </motion.div>

                <motion.div className="about-pills" initial="hidden" animate={inView ? 'show' : 'hidden'} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}>
                    {['Legal Administration', 'Financial Planning', 'Client Relations', 'Business Development', 'Salesforce Sales Cloud', 'LLQP Candidate', 'CFP® Track'].map(pill => (
                        <motion.span key={pill} className="about-pill" variants={reveal}>{pill}</motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
