'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HireModal({ isOpen, onClose }) {
    const [closeHovered, setCloseHovered] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSuccess(true)
        setTimeout(() => setFormSuccess(false), 5000)
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="hire-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => { if (e.target.id === 'hire-overlay') onClose() }}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: 'rgba(0,0,0,0.96)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '40px 20px',
                        backdropFilter: 'blur(5px)',
                        overflowY: 'auto'
                    }}
                >

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="hire-modal-grid"
                    >
                        {/* Video side */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <p style={{
                                fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)',
                                fontStyle: 'italic', textAlign: 'left', margin: 0
                            }}>
                                Motivation brought to you by Shia LaBeouf
                            </p>
                            <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.35)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                                <video
                                    autoPlay
                                    controls
                                    style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                                >
                                    <source src="/shia.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Form side */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Header row: title + close button always side by side */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                                <h3 style={{
                                    fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 600,
                                    color: '#fff', margin: 0, paddingBottom: '8px', flexShrink: 1, minWidth: 0
                                }}>
                                    Contact <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Yatmanyu</em>
                                </h3>
                                <motion.button
                                    onPointerEnter={(e) => { if (e.pointerType === 'mouse') setCloseHovered(true) }}
                                    onPointerLeave={() => setCloseHovered(false)}
                                    onClick={(e) => { e.preventDefault(); setCloseHovered(true) }}
                                    whileHover={{ scale: 1.05, borderColor: 'var(--gold)', color: 'var(--gold)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        flexShrink: 0,
                                        background: 'none', border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'rgba(255,255,255,0.6)', fontSize: '.85rem', padding: '8px 14px',
                                        cursor: closeHovered ? 'not-allowed' : 'pointer', letterSpacing: '0.1em',
                                        fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap',
                                        transition: 'border-color 0.2s, color 0.2s'
                                    }}
                                >
                                    {closeHovered ? 'LISTEN TO SHIA' : '\u2715 Close'}
                                </motion.button>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="form-name-grid">
                                    <div>
                                        <label style={{ fontSize: '.6rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: '6px' }}>First Name</label>
                                        <input type="text" placeholder="Jane" required style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: '.82rem', outline: 'none', transition: 'border-color .25s' }} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,.12)'} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '.6rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: '6px' }}>Last Name</label>
                                        <input type="text" placeholder="Smith" required style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: '.82rem', outline: 'none', transition: 'border-color .25s' }} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,.12)'} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '.6rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: '6px' }}>Email</label>
                                    <input type="email" placeholder="jane@company.com" required style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: '.82rem', outline: 'none', transition: 'border-color .25s' }} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,.12)'} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '.6rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: '6px' }}>Subject</label>
                                    <select required style={{ width: '100%', padding: '12px 14px', background: 'rgba(30,26,20,.98)', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.75)', fontFamily: "'DM Sans', sans-serif", fontSize: '.82rem', outline: 'none', transition: 'border-color .25s', appearance: 'none', cursor: 'pointer' }} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,.12)'}>
                                        <option value="">Select a subject...</option>
                                        <option>I want to hire you</option>
                                        <option>Legal Administration Opportunity</option>
                                        <option>Financial Services Role</option>
                                        <option>Client Relations Position</option>
                                        <option>General Inquiry</option>
                                        <option>Just Shia made me do it</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: '.6rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: '6px' }}>Message</label>
                                    <textarea placeholder="" required rows="4" style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: '.82rem', outline: 'none', resize: 'vertical', transition: 'border-color .25s' }} onFocus={(e) => e.target.style.borderColor = 'var(--gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,.12)'}></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, backgroundColor: 'var(--gold2)' }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: '14px 32px', background: 'var(--gold)', color: 'var(--dark)',
                                        fontFamily: "'DM Sans', sans-serif", fontSize: '.65rem',
                                        letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 500,
                                        border: 'none', cursor: 'pointer', width: '100%',
                                        transition: 'background 0.25s'
                                    }}
                                >
                                    Send Message &#8594;
                                </motion.button>
                                {formSuccess && (
                                    <p style={{ color: '#2dffb4', fontSize: '.75rem', textAlign: 'center', letterSpacing: '.08em', margin: 0 }}>
                                        &#10003; Message sent! Yatmanyu will be in touch.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
