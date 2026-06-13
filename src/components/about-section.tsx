export default function AboutSection() {
  const whatIDo = [
    'AI Automation & Gen AI Tooling (LLMs, RAG, Agents)',
    'Backend Development with Python, Java, Node.js',
    'Full-Stack with React (frontend) + REST APIs (backend)',
    'Cloud Databases & Query Optimization (PostgreSQL, BigQuery, MongoDB)',
    'Cloud & Containerization (Docker, CI/CD, AWS)',
    'Platform Automation, Anomaly Detection & Observability',
    'Linux Production Debugging & Shell Scripting',
  ]

  const achievements = [
    'Patent Filed: LLM-based Legal Document Simplification',
    '500+ days LeetCode streak',
    '3rd place in CodeRunSeek among 250+ participants',
    '25% academic fee waiver for excellence; Meritorious rank in VITEEE',
    'Top Coder at VIT',
    'Core member: Mozilla Firefox Club, Iothinc Club & Pixelate',
  ]

  const certifications = [
    'AI Fluency Framework & Foundations',
    'Build an AI Text Summarizer App (Project-Based)',
    'Postman API Fundamentals Student Expert',
    'GeeksforGeeks API Bootcamp — Sponsored by Postman',
    'Java Full Stack — iamneo',
    'Open Source Contributor',
  ]

  const drives = [
    {
      icon: '🤖',
      title: 'AI & Automation',
      desc: 'Building systems that use LLMs and ML to automate real workflows',
    },
    {
      icon: '🚀',
      title: 'Impact',
      desc: 'Shipping products that reach users — not just prototypes',
    },
    {
      icon: '📈',
      title: 'Growth',
      desc: '500+ days LeetCode streak & always upskilling (Golang, AWS)',
    },
  ]

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      {/* ── Header ── */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{
          fontFamily: 'var(--font-code)',
          color: '#f97316',
          fontSize: '0.9rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          {'< About Me />'}
        </p>
        <h2 style={{
          fontFamily: 'var(--font-code)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.75rem',
        }}>
          Get to know the person{' '}
          <span style={{ color: '#f97316' }}>behind the code</span>
        </h2>
      </div>

      {/* ── Who I Am + Photo ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem',
        alignItems: 'start',
      }}>
        <div>
          <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
            // Who I Am
          </h3>
          <p style={{ color: 'rgba(254,215,170,0.85)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.25rem' }}>
            I build AI systems that ship — not just demos. At 22, I've filed a patent on LLM-based legal document simplification, shipped fraud detection ML at 85%+ accuracy, and currently automate platform-scale data pipelines at Alchemy Group using Python, BigQuery, and AI-driven workflows.
          </p>
          <p style={{ color: 'rgba(254,215,170,0.75)', lineHeight: 1.85, fontSize: '1rem' }}>
            My stack spans the full picture: backend services (Java, Python, Node.js), cloud databases (PostgreSQL, BigQuery, MongoDB), containerized deployments (Docker, CI/CD), frontend (React), and increasingly — Gen AI tooling (LLMs, automation agents, RAG). VIT Vellore Computer Science graduate with CGPA 8.59 and 500+ days on LeetCode.
          </p>
        </div>

        {/* Photo card — swap /akshita.jpg once you add the file */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '100%',
            maxWidth: 320,
            aspectRatio: '3/4',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            border: '2px solid rgba(249,115,22,0.35)',
            boxShadow: '0 0 40px rgba(249,115,22,0.12)',
            background: '#1a1a1a',
          }}>
            <img
              src="/akshita.jpg"
              alt="Akshita Kumari"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              onError={(e) => {
                const el = e.currentTarget
                el.style.display = 'none'
                const parent = el.parentElement
                if (parent) {
                  parent.style.display = 'flex'
                  parent.style.alignItems = 'center'
                  parent.style.justifyContent = 'center'
                  parent.innerHTML = '<span style="color:#555;font-family:monospace;font-size:0.85rem;text-align:center;padding:1rem">// add photo to<br/>public/akshita.jpg</span>'
                }
              }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#fcd34d', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'var(--font-code)' }}>Akshita Kumari</p>
            <p style={{ color: 'rgba(254,215,170,0.6)', fontSize: '0.85rem' }}>Junior Automation & Platform Engineer</p>
            <p style={{ color: 'rgba(254,215,170,0.5)', fontSize: '0.8rem', fontFamily: 'var(--font-code)' }}>VIT Vellore · Class of 2025</p>
          </div>
        </div>
      </div>

      {/* ── What I Do ── */}
      <div style={{
        background: 'rgba(249,115,22,0.05)',
        border: '1px solid rgba(249,115,22,0.18)',
        borderRadius: '1.25rem',
        padding: '2rem 2.5rem',
        marginBottom: '3rem',
      }}>
        <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          // What I Do
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {whatIDo.map((item) => (
            <span key={item} style={{
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(253,186,116,0.3)',
              color: 'rgba(254,215,170,0.9)',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-code)',
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── What Drives Me ── */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          // What Drives Me
        </h3>
        <p style={{ color: 'rgba(254,215,170,0.75)', lineHeight: 1.85, marginBottom: '2rem' }}>
          I care about building AI automation that solves real business problems, backend systems that scale without breaking, and tools that make complex things simple for non-technical users. Currently open to Gen AI Engineering, Platform Engineering, Full-Stack and AI Automation roles.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {drives.map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: '#1a1a1a',
              border: '1px solid rgba(249,115,22,0.2)',
              borderRadius: '1rem',
              padding: '1.75rem',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(249,115,22,0.15)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
              <h4 style={{ color: '#fcd34d', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-code)' }}>{title}</h4>
              <p style={{ color: 'rgba(254,215,170,0.65)', fontSize: '0.9rem', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div style={{
        background: '#1a1a1a',
        border: '1px solid rgba(249,115,22,0.25)',
        borderRadius: '1.25rem',
        padding: '2rem 2.5rem',
        marginBottom: '3rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <div style={{
          background: 'rgba(249,115,22,0.12)',
          border: '1px solid rgba(249,115,22,0.3)',
          borderRadius: '0.75rem',
          padding: '1rem 1.25rem',
          fontFamily: 'var(--font-code)',
          fontSize: '2rem',
          lineHeight: 1,
        }}>🎓</div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
            // Education
          </h3>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>B.Tech in Computer Science</p>
          <p style={{ color: 'rgba(254,215,170,0.7)', fontSize: '0.9rem' }}>Vellore Institute of Technology · 2021 – 2025</p>
        </div>
        <div style={{
          background: 'rgba(0,255,136,0.08)',
          border: '1px solid rgba(0,255,136,0.25)',
          borderRadius: '9999px',
          padding: '0.4rem 1.1rem',
          color: '#00ff88',
          fontFamily: 'var(--font-code)',
          fontWeight: 700,
          fontSize: '0.95rem',
          whiteSpace: 'nowrap' as const,
        }}>
          CGPA 8.59
        </div>
      </div>

      {/* ── Achievements + Certifications ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        <div style={{
          background: '#1a1a1a',
          border: '1px solid rgba(249,115,22,0.2)',
          borderRadius: '1.25rem',
          padding: '2rem',
        }}>
          <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
            // Achievements
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {achievements.map((item) => (
              <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', fontSize: '0.7rem', marginTop: '0.35rem', flexShrink: 0 }}>▶</span>
                <span style={{ color: 'rgba(254,215,170,0.8)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: '#1a1a1a',
          border: '1px solid rgba(249,115,22,0.2)',
          borderRadius: '1.25rem',
          padding: '2rem',
        }}>
          <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
            // Certifications
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {certifications.map((item) => (
              <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', fontSize: '0.7rem', marginTop: '0.35rem', flexShrink: 0 }}>▶</span>
                <span style={{ color: 'rgba(254,215,170,0.8)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Fun Facts ── */}
      <div style={{
        background: 'rgba(249,115,22,0.05)',
        border: '1px solid rgba(249,115,22,0.18)',
        borderRadius: '1.25rem',
        padding: '2rem 2.5rem',
      }}>
        <h3 style={{ color: '#fcd34d', fontFamily: 'var(--font-code)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          // Fun Facts
        </h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { emoji: '📜', text: 'Patent holder at 22' },
            { emoji: '🔥', text: '500+ days LeetCode grind' },
            { emoji: '🐧', text: 'Linux & AI enthusiast' },
            { emoji: '⚡', text: 'Always learning (Golang & AWS next)' },
          ].map(({ emoji, text }) => (
            <div key={text} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(253,186,116,0.25)',
              borderRadius: '9999px',
              padding: '0.5rem 1.1rem',
              color: 'rgba(254,215,170,0.9)',
              fontSize: '0.9rem',
            }}>
              <span>{emoji}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
