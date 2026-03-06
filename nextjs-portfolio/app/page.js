'use client'
import { useState } from 'react'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Extra from '@/components/Extra'
import Contact from '@/components/Contact'
import HireModal from '@/components/HireModal'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  const [isHireModalOpen, setHireModalOpen] = useState(false)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Extra />
        <Contact />

        <section id="hire" style={{ background: 'var(--dark)', padding: '60px 64px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <p className="sec-label" style={{ margin: 0 }}>Final Notice</p>
            <div className="hire-lightning-wrapper">
              <div className="hire-lightning-inner">
                <button
                  onClick={() => setHireModalOpen(true)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '14px',
                    padding: '16px 40px',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold2))',
                    color: 'var(--dark)', fontFamily: "'DM Sans', sans-serif",
                    fontSize: '.72rem', letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 500,
                    border: 'none', cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.3s',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>⚡</span> Hire Him Quick
                </button>
              </div>
            </div>
            <p style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.12em', textTransform: 'uppercase', margin: 0 }}>
              Warning: May cause immediate hiring decisions
            </p>
          </div>
        </section>

        <HireModal isOpen={isHireModalOpen} onClose={() => setHireModalOpen(false)} />
      </main>
      <footer>
        <span>© 2025 <span className="footer-gold">Yatmanyu Rawat</span></span>
        <span>Built with precision · Greater Vancouver, BC</span>
      </footer>
      <ChatWidget />
    </>
  )
}
