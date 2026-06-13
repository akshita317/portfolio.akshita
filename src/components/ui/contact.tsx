import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Mail, Download } from 'lucide-react'

const BACKGROUND_IMG =
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80'

const socialLinks = [
  {
    id: '1',
    name: 'GitHub',
    iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg',
    href: 'https://github.com/akshita317',
  },
  {
    id: '2',
    name: 'LinkedIn',
    iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/akshitakumari317/',
  },
  {
    id: '3',
    name: 'LeetCode',
    iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/leetcode.svg',
    href: 'https://leetcode.com/u/akshitakumari731/',
  },
]

const projectTypeOptions = [
  'Web App', 'Mobile App', 'AI / ML', 'Full-Stack',
  'Backend API', 'DevOps / Cloud', 'Freelance', 'Collaboration', 'Other',
]

export default function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  })
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      projectType: checked
        ? [...prev.projectType, type]
        : prev.projectType.filter(t => t !== type),
    }))
  }

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '', projectType: [] })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'calc(100vh - 70px)' }}
    >
      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        {/* dark scrim */}
        <div className="absolute inset-0 bg-black/72" />

        {/* Animated bubbles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-orange-400/25 rounded-full animate-contact-bubble"
              style={{
                width:  `${Math.random() * 22 + 8}px`,
                height: `${Math.random() * 22 + 8}px`,
                left:   `${Math.random() * 100}%`,
                top:    `${Math.random() * 100}%`,
                animationDelay:    `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl items-center">

          {/* ── Left: title + contact info ── */}
          <div className="flex flex-col justify-center p-4 lg:p-8">
            <p style={{
              fontFamily: 'var(--font-code)',
              color: '#f97316',
              fontSize: '0.82rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              {'< Contact />'}
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-lg mb-6"
              style={{ color: 'rgb(254,215,170)' }}
            >
              Let's build something{' '}
              <span style={{ color: '#f97316' }}>amazing</span>{' '}
              together
            </h1>

            <p className="text-gray-300 text-base mb-8 max-w-md leading-relaxed">
              I'm always excited to take on new challenges, collaborate on interesting projects,
              and turn ideas into reality.
            </p>

            {/* email */}
            <a
              href="mailto:akshitakumari731@gmail.com"
              className="flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors mb-5 text-sm font-medium w-fit"
            >
              <Mail size={15} />
              akshitakumari731@gmail.com
            </a>

            {/* Social icon buttons */}
            <div className="flex items-center gap-3 mb-7">
              <span className="text-gray-500 text-sm">OR</span>
              {socialLinks.map(link => (
                <Button
                  key={link.id}
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-orange-400/30 bg-orange-400/10 hover:bg-orange-400/20 hover:border-orange-400/60 transition-all w-9 h-9"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <img src={link.iconSrc} alt={link.name} className="h-4 w-4 invert opacity-80" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Resume download */}
            <a
              href="https://drive.google.com/file/d/1-TRw7nbG6QyzuV4jsyVfhBxpht5zE5Zy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-400/40 text-orange-300 hover:bg-orange-400/10 transition-all text-sm font-semibold w-fit"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          {/* ── Right: form card ── */}
          <div
            className="rounded-xl shadow-2xl border border-white/10 backdrop-blur-md p-6 md:p-8"
            style={{ background: 'rgba(8, 8, 8, 0.88)' }}
          >
            <h2 className="text-2xl font-bold mb-1" style={{ color: 'rgb(254,215,170)' }}>
              Let's talk! 👋
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Leave me a message and I'll get back to you within 24 hours
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16">
                <div className="text-5xl text-green-400">✓</div>
                <p className="text-green-400 text-lg font-bold">Message sent successfully!</p>
                <p className="text-gray-500 text-sm text-center">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* name + email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-gray-300 text-xs">Your name</Label>
                    <Input
                      id="name" name="name"
                      placeholder="Your name"
                      value={formData.name} onChange={handleChange} required
                      className="bg-white/[0.05] border-white/15 text-white placeholder:text-gray-600 focus-visible:ring-orange-500/40 focus-visible:border-orange-500/40 h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-gray-300 text-xs">Email</Label>
                    <Input
                      id="email" name="email" type="email"
                      placeholder="Email"
                      value={formData.email} onChange={handleChange} required
                      className="bg-white/[0.05] border-white/15 text-white placeholder:text-gray-600 focus-visible:ring-orange-500/40 focus-visible:border-orange-500/40 h-9 text-sm"
                    />
                  </div>
                </div>

                {/* message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-gray-300 text-xs">
                    Briefly describe your project idea…
                  </Label>
                  <Textarea
                    id="message" name="message"
                    placeholder="Briefly describe your project idea..."
                    className="min-h-[80px] bg-white/[0.05] border-white/15 text-white placeholder:text-gray-600 focus-visible:ring-orange-500/40 focus-visible:border-orange-500/40 text-sm resize-none"
                    value={formData.message} onChange={handleChange} required
                  />
                </div>

                {/* project type checkboxes */}
                <div className="space-y-3">
                  <p className="text-gray-500 text-xs">I'm looking for…</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2">
                    {projectTypeOptions.map(option => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.replace(/\s/g, '-').toLowerCase()}
                          checked={formData.projectType.includes(option)}
                          onCheckedChange={checked =>
                            handleCheckboxChange(option, checked as boolean)
                          }
                          className="border-orange-400/40 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 h-3.5 w-3.5 shrink-0"
                        />
                        <Label
                          htmlFor={option.replace(/\s/g, '-').toLowerCase()}
                          className="text-xs font-normal text-gray-400 cursor-pointer leading-none"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full font-bold text-white border-0 mt-2"
                  style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
                >
                  Send a message
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
