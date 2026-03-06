'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INITIAL_MESSAGE = {
    role: 'assistant',
    content: "Hi! I'm Yatmanyu's virtual assistant 👋 Ask me anything about his background, skills, experience, or how to get in touch!",
}

export default function ChatWidget() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([INITIAL_MESSAGE])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const bottomRef = useRef(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const send = async () => {
        if (!input.trim() || loading) return
        const userMsg = { role: 'user', content: input.trim() }
        setMessages(prev => [...prev, userMsg])
        setInput('')
        setLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg] }),
            })
            const data = await res.json()
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again or reach out directly at info@yatmanyu.com' }])
        }
        setLoading(false)
    }

    const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }

    return (
        <>
            {/* Floating button */}
            <motion.button
                onClick={() => setOpen(o => !o)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    position: 'fixed', bottom: 28, right: 28, zIndex: 8000,
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold2))',
                    border: 'none', cursor: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(201,168,76,.45)',
                    fontSize: '1.4rem',
                }}
                title="Chat with Yatmanyu's assistant"
            >
                {open ? '✕' : '💬'}
            </motion.button>

            {/* Chat panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        style={{
                            position: 'fixed', bottom: 96, right: 28, zIndex: 7999,
                            width: 360, maxHeight: 520,
                            background: 'var(--dark)',
                            border: '1px solid rgba(201,168,76,.2)',
                            borderRadius: 4,
                            display: 'flex', flexDirection: 'column',
                            overflow: 'hidden',
                            boxShadow: '0 24px 80px rgba(0,0,0,.5)',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '16px 20px',
                            borderBottom: '1px solid rgba(255,255,255,.07)',
                            background: 'rgba(255,255,255,.03)',
                            display: 'flex', alignItems: 'center', gap: 12,
                        }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%',
                                background: 'linear-gradient(135deg,var(--gold),var(--accent))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: "'Playfair Display',serif", fontSize: '.9rem', color: '#fff',
                            }}>YR</div>
                            <div>
                                <div style={{ fontFamily: "'Playfair Display',serif", color: '#fff', fontSize: '.9rem' }}>Ask About Yatmanyu</div>
                                <div style={{ fontSize: '.6rem', letterSpacing: '.1em', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase' }}>AI-powered assistant</div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {messages.map((m, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                                    <div style={{
                                        maxWidth: '80%',
                                        padding: '10px 14px',
                                        borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                                        background: m.role === 'user' ? 'var(--gold)' : 'rgba(255,255,255,.06)',
                                        color: m.role === 'user' ? 'var(--dark)' : 'rgba(255,255,255,.85)',
                                        fontSize: '.8rem', lineHeight: 1.6,
                                        fontFamily: "'DM Sans',sans-serif",
                                    }}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div style={{ display: 'flex', gap: 5, padding: '10px 14px', background: 'rgba(255,255,255,.06)', borderRadius: '12px 12px 12px 2px', width: 'fit-content' }}>
                                    {[0, 1, 2].map(i => (
                                        <motion.div key={i} animate={{ y: [0, -6, 0] }} transition={{ duration: .8, delay: i * .15, repeat: Infinity }}
                                            style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
                                    ))}
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,.07)', display: 'flex', gap: 8 }}>
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={onKey}
                                placeholder="Ask anything about Yatmanyu…"
                                style={{
                                    flex: 1, padding: '10px 14px',
                                    background: 'rgba(255,255,255,.06)',
                                    border: '1px solid rgba(255,255,255,.1)',
                                    color: '#fff', fontSize: '.8rem',
                                    fontFamily: "'DM Sans',sans-serif",
                                    borderRadius: 4, outline: 'none',
                                    cursor: 'none',
                                }}
                            />
                            <button
                                onClick={send}
                                disabled={loading || !input.trim()}
                                style={{
                                    padding: '10px 16px',
                                    background: input.trim() ? 'var(--gold)' : 'rgba(255,255,255,.08)',
                                    color: input.trim() ? 'var(--dark)' : 'rgba(255,255,255,.3)',
                                    border: 'none', borderRadius: 4, cursor: 'none',
                                    fontSize: '.8rem', fontWeight: 500,
                                    fontFamily: "'DM Sans',sans-serif",
                                    transition: 'all .2s',
                                }}
                            >Send</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
