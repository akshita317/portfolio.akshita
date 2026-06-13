import { useEffect, useState } from 'react'
import { Terminal, Code2, Cpu, GitBranch } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LayoutPreloaderProps {
  onComplete?: () => void
  duration?: number
}

const NAME = 'AKSHITA KUMARI'
const ROLE = 'Software Engineer'
const TAGS = ['AI Systems', 'Full-Stack', 'Platform Eng', 'Patent Holder']
const LINES = [
  '> initializing portfolio...',
  '> loading: Python · Java · React · Docker',
  '> loading: BigQuery · PostgreSQL · Gen AI',
  '> ready.',
]

export default function LayoutPreloader({
  onComplete,
  duration = 3200,
}: LayoutPreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [visibleChars, setVisibleChars] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // progress bar
    const step = 100 / (duration / 30)
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        const next = p + step
        if (next >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return next
      })
    }, 30)

    // letter-by-letter name reveal
    let charIndex = 0
    const nameTimer = setInterval(() => {
      charIndex++
      setVisibleChars(charIndex)
      if (charIndex >= NAME.length) clearInterval(nameTimer)
    }, 80)

    // terminal lines cascade
    LINES.forEach((_, i) => {
      setTimeout(() => setVisibleLines((l) => Math.max(l, i + 1)), 400 + i * 520)
    })

    // exit
    const exitTimer = setTimeout(() => {
      setExiting(true)
      setTimeout(() => onComplete?.(), 700)
    }, duration)

    return () => {
      clearInterval(progressTimer)
      clearInterval(nameTimer)
      clearTimeout(exitTimer)
    }
  }, [duration, onComplete])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center overflow-hidden',
        'bg-[#0a0a0a] transition-opacity duration-700',
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          animation: 'noise-animation 0.4s steps(1) infinite',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,153,255,0.04) 0%, transparent 70%)' }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl px-6 text-center">

        {/* Top bar */}
        <div className="flex items-center justify-center gap-2 mb-10 text-[#00ff88] font-mono text-xs tracking-widest opacity-70">
          <Terminal size={12} />
          <span>portfolio.init()</span>
          <span className="text-[#333]">·</span>
          <GitBranch size={12} />
          <span>main</span>
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-[0.15em] text-white mb-3">
          {NAME.slice(0, visibleChars)}
          {visibleChars < NAME.length && (
            <span className="text-[#00ff88] animate-pulse">▌</span>
          )}
        </h1>

        {/* Role */}
        <p
          className="font-mono text-sm sm:text-base tracking-[0.4em] uppercase mb-6"
          style={{
            color: '#00ff88',
            opacity: visibleChars >= NAME.length ? 1 : 0,
            transition: 'opacity 0.6s ease 0.2s',
          }}
        >
          {ROLE}
        </p>

        {/* Tags */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          style={{
            opacity: visibleChars >= NAME.length ? 1 : 0,
            transition: 'opacity 0.6s ease 0.5s',
          }}
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1 border rounded-sm"
              style={{ color: '#888', borderColor: '#2a2a2a' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Terminal lines */}
        <div className="text-left bg-[#111] border border-[#222] rounded-md px-4 py-3 mb-10 font-mono text-xs space-y-1 min-h-[88px]">
          {LINES.slice(0, visibleLines).map((line, i) => (
            <p
              key={i}
              className="animate-in fade-in slide-in-from-left-2 duration-300"
              style={{ color: i === LINES.length - 1 ? '#00ff88' : '#555' }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="flex justify-between font-mono text-xs mb-2" style={{ color: '#444' }}>
            <span>loading</span>
            <span style={{ color: '#00ff88' }}>{Math.round(progress)}%</span>
          </div>
          <div className="h-px w-full rounded-full overflow-hidden" style={{ background: '#1a1a1a' }}>
            <div
              className="h-full transition-all duration-100 ease-linear"
              style={{
                width: `${progress}%`,
                background: '#00ff88',
                boxShadow: '0 0 8px #00ff88, 0 0 20px rgba(0,255,136,0.4)',
              }}
            />
          </div>
        </div>

        {/* Bottom icons */}
        <div className="flex gap-6 justify-center mt-8" style={{ color: '#2a2a2a' }}>
          <Code2 size={14} />
          <Cpu size={14} />
          <Terminal size={14} />
        </div>
      </div>
    </div>
  )
}
