import { useState, useEffect, useCallback } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Hero from '@/components/ui/animated-shader-hero'
import CircularTestimonials from '@/components/ui/circular-testimonials'
import { SunnyBackground, SunriseBackground } from '@/components/ui/background-components'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'
import ContactSection from '@/components/ui/contact'

type Page = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact'

/* ── Particles background ── */
function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const particlesOptions = useCallback(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 200, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: ['#00ff88', '#0099ff', '#ff0066'] },
      links: {
        enable: true,
        distance: 150,
        color: '#00ff88',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none' as const,
        outModes: { default: 'out' as const },
      },
      number: { value: 80, density: { enable: true } },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [])

  if (!engineReady) return null

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions()}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  )
}

/* ── Navbar ── */
const NAV_LINKS: { label: string; page: Page }[] = [
  { label: 'Home',       page: 'home'       },
  { label: 'About',      page: 'about'      },
  { label: 'Experience', page: 'experience' },
  { label: 'Projects',   page: 'projects'   },
  { label: 'Skills',     page: 'skills'     },
  { label: 'Contact',    page: 'contact'    },
]

function Navbar({ activePage, onNavigate }: { activePage: Page; onNavigate: (p: Page) => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const getPillStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '0.5rem 1.25rem',
    borderRadius: '9999px',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    border: isActive ? '1px solid rgba(249,115,22,0.75)' : '1px solid rgba(253,186,116,0.35)',
    background: isActive ? 'rgba(249,115,22,0.22)' : 'rgba(249,115,22,0.08)',
    color: isActive ? '#ffffff' : 'rgb(254,215,170)',
    backdropFilter: 'blur(6px)',
    transition: 'background 0.2s, transform 0.15s, border-color 0.2s',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
  })

  const navigate = (page: Page) => {
    if (page === 'about') {
      onNavigate('home')
      setOpen(false)
      // give the home page a tick to render before scrolling
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      onNavigate(page)
      setOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(5,5,5,0.92)' : 'rgba(5,5,5,0.6)',
      backdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid rgba(253,186,116,0.15)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Desktop */}
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0.45rem 2rem',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem',
      }} className="hidden sm:flex">
        {NAV_LINKS.map(({ label, page }) => (
          <button
            key={page}
            onClick={() => navigate(page)}
            style={getPillStyle(activePage === page)}
            onMouseEnter={e => {
              if (activePage !== page) {
                e.currentTarget.style.background = 'rgba(249,115,22,0.22)'
                e.currentTarget.style.borderColor = 'rgba(253,186,116,0.7)'
              }
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              if (activePage !== page) {
                e.currentTarget.style.background = 'rgba(249,115,22,0.08)'
                e.currentTarget.style.borderColor = 'rgba(253,186,116,0.35)'
              }
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div style={{ padding: '0.45rem 1.5rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        className="sm:hidden">
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          onClick={() => setOpen(!open)}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'rgb(254,215,170)',
              borderRadius: 2,
              transition: '0.3s',
              transform: open
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'scaleX(0)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center',
          background: 'rgba(5,5,5,0.96)', borderTop: '1px solid rgba(253,186,116,0.15)',
        }} className="sm:hidden">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              style={{ ...getPillStyle(activePage === page), width: '100%', textAlign: 'center' }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

/* ── About Section ── */
const aboutSlides = [
  {
    quote:
      "At 22, I've filed a patent on LLM-based legal document simplification, shipped fraud detection ML at 85%+ accuracy, and currently automate platform-scale data pipelines at Alchemy Group using Python, BigQuery, and AI-driven workflows. 4 internships. Real production code. Not just demos.",
    name: "Akshita Kumari",
    designation: "Junior Automation & Platform Engineer · Alchemy Group",
    src: "/akshita.jpg",
  },
  {
    quote:
      "My stack spans backend (Python, Java, Node.js), cloud databases (PostgreSQL, BigQuery, MongoDB), containerized deployments (Docker, CI/CD), frontend (React) and Gen AI tooling — LLMs, RAG, automation agents. VIT Vellore CS graduate · CGPA 8.59 · Top Coder at VIT.",
    name: "Full-Stack & AI Engineer",
    designation: "Python · Java · React · BigQuery · Docker · LLMs",
    src: "/akshita-work.jpg",
  },
  {
    quote:
      "Patent holder in LLM system design · 500+ consecutive days on LeetCode · 3rd place CodeRunSeek (250+ participants) · 25% academic fee waiver · Core member: Mozilla Firefox Club, Iothinc Club & Pixelate. Certified in AI Fluency, Postman API, and Java Full Stack.",
    name: "Achievements & Certifications",
    designation: "VIT Vellore · Class of 2025 · B.Tech Computer Science",
    src: "/akshita-fun.jpg",
  },
]

function AboutSection() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-code)',
          color: '#ea580c',
          fontSize: '0.85rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase' as const,
          marginBottom: '0.75rem',
        }}>
          {'< About Me />'}
        </p>
        <h2 style={{
          fontFamily: 'var(--font-code)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: '#111',
          marginBottom: '0.5rem',
        }}>
          Get to know the person{' '}
          <span style={{ color: '#ea580c' }}>behind the code</span>
        </h2>
        <p style={{ color: '#999', fontSize: '0.85rem', fontFamily: 'var(--font-code)' }}>
          // use arrow keys or click the arrows to explore
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularTestimonials
          testimonials={aboutSlides}
          autoplay={true}
          colors={{
            name: '#111',
            designation: '#666',
            testimony: '#333',
            arrowBackground: '#f97316',
            arrowForeground: '#fff',
            arrowHoverBackground: '#ea580c',
          }}
          fontSizes={{
            name: '1.55rem',
            designation: '0.9rem',
            quote: '1.05rem',
          }}
        />
      </div>
    </div>
  )
}

/* ── Main App ── */
export default function App() {
  const [activePage, setActivePage] = useState<Page>('home')

  const navigate = (page: Page) => {
    if (page === 'about') {
      setActivePage('home')
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      setActivePage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero
              trustBadge={{ text: 'Patent Holder · AI Systems · Full-Stack', icons: ['✨'] }}
              headline={{ line1: 'Akshita Kumari', line2: 'Software Engineer' }}
              subtitle="I build AI systems that ship — not just demos. Platform & Automation Engineer specialising in Python, BigQuery, Gen AI workflows and full-stack development."
              buttons={{
                primary:   { text: 'View Projects', onClick: () => navigate('projects') },
                secondary: { text: 'Get In Touch',  onClick: () => navigate('contact')  },
              }}
            />
            <SunnyBackground>
              <section id="about">
                <AboutSection />
              </section>
            </SunnyBackground>
          </>
        )

      case 'experience':
        return (
          <SunnyBackground>
            <section style={{ minHeight: 'calc(100vh - 70px)' }}>
              <ExperienceSection />
            </section>
          </SunnyBackground>
        )

      case 'projects':
        return (
          <SunriseBackground>
            <section style={{ minHeight: 'calc(100vh - 70px)' }}>
              <ProjectsSection />
            </section>
          </SunriseBackground>
        )

      case 'skills':
        return (
          <SunnyBackground>
            <section style={{ minHeight: 'calc(100vh - 70px)' }}>
              <SkillsSection />
            </section>
          </SunnyBackground>
        )

      case 'contact':
        return <ContactSection />

      default:
        return null
    }
  }

  return (
    <>
      <ParticlesBackground />
      <Navbar activePage={activePage} onNavigate={navigate} />
      <main style={{ marginTop: 52, position: 'relative', zIndex: 1 }}>
        <div key={activePage} className="page-fade-in">
          {renderPage()}
        </div>
      </main>
    </>
  )
}
