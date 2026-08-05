import { useState } from 'react'

const profile = {
  name: 'Dharanidharan',
  role: 'Full Stack Developer',
  location: 'Chennai, India',
  email: 'dharanidharanvp705@email.com',
  phone: '+91 8056669507',
  linkedin: 'https://www.linkedin.com/in/dharani705/',
  github: 'https://github.com/dharan705',
}

const skills = [
  { label: 'React', value: 'Experienced with React 19, hooks, and state-driven UI.' },
  { label: 'Tailwind CSS', value: 'Fast layout development with utility-first styling.' },
  { label: 'JavaScript', value: 'Modern ES modules, responsive UI, and front-end performance.' },
  { label: 'Spring Boot', value: 'REST API development with Java and MySQL integration.' },
  { label: 'Web Accessibility', value: 'Accessible navigation, semantic structure, and keyboard support.' },
]

const projects = [
  {
    title: 'Figma-style Editor',
    description: 'Drag-and-drop design workspace with editable layers, canvas controls, and export-ready assets.',
    stack: ['React', 'Canvas API', 'Tailwind'],
    live: '#',
    github: '#',
  },
  {
    title: 'iBridge Website',
    description: 'Responsive business landing page with SEO-aware content structure and custom animations.',
    stack: ['React', 'Tailwind', 'Responsive Design'],
    live: '#',
    github: '#',
  },
  {
    title: 'Full Stack To-Do App',
    description: 'Task manager with React frontend, Spring Boot API, user workflows, and MySQL persistence.',
    stack: ['React', 'Spring Boot', 'MySQL'],
    live: '#',
    github: '#',
  },
  {
    title: 'UI Component Kit',
    description: 'Reusable interface components for forms, cards, and navigation in polished dark theme.',
    stack: ['React', 'Tailwind', 'Accessibility'],
    live: '#',
    github: '#',
  },
]

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance Projects',
    time: '2022 - Present',
    details: 'Building complete web products with React frontends and REST APIs for enterprise-style clients.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Startup Studio',
    time: '2021 - 2022',
    details: 'Delivered user-facing interfaces, content updates, and performance improvements for customer-facing apps.',
  },
]

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin },
  { label: 'GitHub', value: profile.github, href: profile.github },
]

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/75 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">dharani.dev</a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#projects" className="transition hover:text-white">Work</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a href="/resume.pdf" className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-sky-300 transition hover:border-sky-400 hover:text-white">Resume</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-12 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-sky-500/20 bg-slate-900/80 px-4 py-1 text-xs uppercase tracking-[0.35em] text-sky-300 shadow-[0_20px_120px_-60px_rgba(14,165,233,0.45)]">Full Stack Portfolio</div>
            <div className="space-y-5">
              <p className="text-lg font-semibold uppercase tracking-[0.3em] text-sky-300">Hello, I’m</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">{profile.name}</h1>
              <p className="max-w-2xl text-xl leading-relaxed text-slate-300 sm:text-2xl">I design and develop polished web experiences with React, Tailwind CSS, and modern backend APIs.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white">Let’s Connect</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_35px_120px_-60px_rgba(59,130,246,0.45)] backdrop-blur-xl">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/95 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Core profile</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{profile.role}</h2>
                <p className="mt-4 text-slate-300">Chennai-based engineer focused on scalable apps, clean UI, and fast delivery.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/95 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
                  <p className="mt-3 text-lg font-medium text-white">{profile.location}</p>
                </div>
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/95 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Availability</p>
                  <p className="mt-3 text-lg font-medium text-white">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-500/20 bg-slate-900/80 px-4 py-1 text-xs uppercase tracking-[0.35em] text-sky-300">About Me</div>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Product-focused design and engineering.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">I craft responsive, accessible web applications for businesses and startups. My work spans polished React interfaces, clean Tailwind layouts, and back-end services built with Spring Boot.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="section-card p-8">
            <h3 className="text-xl font-semibold text-white">What I do</h3>
            <p className="mt-4 text-slate-300">I partner with product teams to turn ideas into high-impact digital experiences, from landing pages to full stack business applications.</p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Designing responsive interfaces with clean interaction patterns.</li>
              <li>• Building React-driven, performant frontends for modern apps.</li>
              <li>• Implementing backend APIs with Spring Boot and MySQL.</li>
            </ul>
          </div>
          <div className="section-card p-8">
            <h3 className="text-xl font-semibold text-white">Resume highlights</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-white">Engineering leadership</p>
                <p className="mt-2">Leading development from planning to launch on client-facing web products.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Technical delivery</p>
                <p className="mt-2">Shipping accessible, responsive UIs with production-ready code and testing awareness.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Collaboration</p>
                <p className="mt-2">Working closely with stakeholders to align product goals, design, and engineering execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Core skills</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">What I work with</h2>
          </div>
          <div className="hidden rounded-3xl border border-slate-800/90 bg-slate-900/80 px-6 py-4 text-sm text-slate-400 sm:block">Built with React + Vite + Tailwind CSS.</div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.label} className="glass-panel p-6">
              <h3 className="text-xl font-semibold text-white">{skill.label}</h3>
              <p className="mt-3 text-slate-300">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Featured work</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Projects that tell the story</h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="section-card overflow-hidden p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Featured</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700/80 px-3 py-1 text-sm text-slate-300">{item}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={project.live} className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300 transition hover:text-white">Live demo</a>
                <a href={project.github} className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400 transition hover:text-slate-100">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Professional experience</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Career highlights</h2>
        </div>
        <div className="grid gap-6">
          {experience.map((item) => (
            <div key={item.title} className="glass-panel p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.time}</p>
              </div>
              <p className="mt-4 text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert(`Thank you, ${form.name || 'there'}! Your message was sent.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Ready to build together?</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card p-8">
            <p className="text-slate-300">Reach out for collaborations, freelance work, or to request the full resume.</p>
            <div className="mt-8 space-y-4 text-slate-300">
              {contactLinks.map((item) => (
                <a key={item.label} href={item.href} className="block rounded-3xl border border-slate-800/90 bg-slate-950/80 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-white">
                  <span className="block text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</span>
                  <span className="mt-1 block text-base font-medium text-white">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="section-card p-8">
            <div className="space-y-6">
              <label className="block text-sm font-medium text-slate-200">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                />
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/90 bg-slate-950/90 px-6 py-8 text-sm text-slate-500 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with React + Tailwind.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <a href={profile.linkedin} className="transition hover:text-white">LinkedIn</a>
          <a href={profile.github} className="transition hover:text-white">GitHub</a>
          <a href="/resume.pdf" className="transition hover:text-white">Resume</a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
