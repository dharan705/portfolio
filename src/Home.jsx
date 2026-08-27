import { useEffect, useState } from 'react'


import {
  Atom,
  Braces,
  Workflow,
  Code2,
  Palette,
  Coffee,
  Leaf,
  Globe,
  Database,
  Cloud,
  Server,
  GitBranch,
  FolderGit2,
  Code,
  Send,
  Zap,
  FlaskConical,
  FileCode2,
  Terminal,
  Smartphone,
  Search,
} from 'lucide-react';
 

/* ---------------------------------------------------
   CONTENT — edit this section with real details
--------------------------------------------------- */

const profile = {
  name: 'Dharanidharan',
  shortName: '',
  initials: 'DD',
  roles: ['Full Stack Developer', 'React.js Developer'],
  location: 'Chennai, India',
  email: 'dharanidharanvp705@email.com',
  phone: '+91 8056669507',
  linkedin: 'https://www.linkedin.com/in/dharani705/',
  github: 'https://github.com/dharan705',
  resume: '/dharanidharanvp.pdf',
  availability: 'Open to Work',
}

const skills = [
  // Frontend
  { label: 'React.js', icon: Atom, desc: 'Component-driven UIs' },
  { label: 'JavaScript', icon: Braces, desc: 'Core language, daily driver' },
  { label: 'Redux', icon: Workflow, desc: 'Predictable app state' },
  { label: 'HTML5', icon: Code2, desc: 'Semantic, accessible markup' },
  { label: 'CSS3 / SCSS', icon: Palette, desc: 'Styling & layout systems' },
 
  // Backend
  { label: 'Java', icon: Coffee, desc: 'Backend language of choice' },
  { label: 'Spring Boot', icon: Leaf, desc: 'REST services, fast' },
  { label: 'REST APIs', icon: Globe, desc: 'Client-server contracts' },
 
  // Database
  { label: 'MySQL', icon: Database, desc: 'Relational data modeling' },
 
  // Cloud & Hosting
  { label: 'AWS', icon: Cloud, desc: 'Cloud basics, deployment' },
  // { label: 'Square Brothers Hosting', icon: Server, desc: 'Production hosting setup' },
 
  // Tools
  { label: 'Git', icon: GitBranch, desc: 'Version control, branching' },
  { label: 'GitHub', icon: FolderGit2, desc: 'Collaboration & code review' },
  { label: 'VS Code', icon: Code, desc: 'Daily development editor' },
  { label: 'Postman', icon: Send, desc: 'API testing & debugging' },
  { label: 'Vite', icon: Zap, desc: 'Fast dev & builds' },
 
  // Testing
  { label: 'React Testing Library', icon: FlaskConical, desc: 'Component-level testing' },
 
  // Familiar With
  { label: 'TypeScript', icon: FileCode2, desc: 'Typed JS, safer code' },
  // { label: 'Python', icon: Terminal, desc: 'Scripting & automation' },
  { label: 'Responsive Web Design', icon: Smartphone, desc: 'Every screen size' },
  { label: 'SEO Optimization', icon: Search, desc: 'Findable, well-structured pages' },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce app built with React.js, Spring Boot, Spring Security, JWT, and MySQL — secure auth, product catalog, cart, orders, and an admin dashboard. Built independently to learn backend architecture end to end.',
    stack: ['React.js', 'Spring Boot', 'MySQL', 'JWT'],
    live: '#',
    github: 'https://github.com/dharan705/Smartcart',
    accent: 'from-teal-400/30 to-emerald-500/10',
  },
  {
    title: 'NarpaviTech Chennai',
    description:
      'Official NarpaviTech Chennai business website — reusable UI components, responsive layouts, SEO improvements, and performance tuning.',
    stack: ['React.js', 'JavaScript', 'SEO', 'Responsive'],
    live: 'https://narpavitech.com',
    github: 'https://github.com/dharan705/NarpaviChennai',
    accent: 'from-cyan-400/30 to-teal-500/10',
  },
  {
    title: 'NarpaviTech Mumbai',
    description:
      'NarpaviTech Mumbai business website — responsive design, reusable components, SEO optimization, and cross-browser compatibility.',
    stack: ['React.js', 'JavaScript', 'SEO', 'Responsive'],
    live: 'https://narpavitechmumbai.in',
    github: 'https://github.com/dharan705/NarpaviMumbai',
    accent: 'from-emerald-400/30 to-cyan-500/10',
  },
  {
    title: 'iBridge Website',
    description:
      'iBridge website — reusable UI components, responsive layouts, SEO, and frontend performance.',
    stack: ['React.js', 'JavaScript', 'SEO', 'Responsive'],
    live: 'https://ibridge.org.in',
    github: 'https://github.com/dharan705/ibridge',
    accent: 'from-teal-400/30 to-cyan-500/10',
  },
]


const experience = [
  {
    title: 'Junior Software Developer',
    company: 'Ranmars Corp',
    startYear: 2025,
    startMonth: 1,
    endYear: null, // ongoing → auto-highlighted, band grows monthly
    endMonth: null,
    details:
      'Developed responsive and scalable web applications using React.js, JavaScript, and REST APIs while collaborating with the team on frontend architecture. Contributed to SEO optimization, reusable component development, and performance improvements — increasing page load speed by 25% and reducing Largest Contentful Paint (LCP).',
  },
  
  // Next role goes here. Fill in the real endYear/endMonth above,
  // then add the new one first with endYear: null. Example:
  // {
  //   title: 'Frontend Developer',
  //   company: 'Next Company',
  //   startYear: 2027,
  //   startMonth: 1,
  //   endYear: null,
  //   endMonth: null,
  //   details: '...',
  // },
]

const education = [
  {
    // TODO: swap in your real BCA college name — placeholder for now
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Your BCA College Name',
    startYear: 2018,
    startMonth: 7, // July
    endYear: 2021,
    endMonth: 9, // September
    details: 'Undergraduate degree covering programming fundamentals, databases, and software development basics.',
  },
  {
    // NOTE: end month wasn't specified — assumed June (typical Indian
    // academic year-end). Change endMonth below if it was different.
    degree: 'Master of Computer Applications (MCA)',
    institution: 'M Kumarasamy College of Engineering, Karur',
    startYear: 2022,
    startMonth: 9, // September
    endYear: 2024,
    endMonth: 5, // assumed June — adjust if needed
    details: 'Postgraduate degree focused on software development, databases, and computer science fundamentals.',
  },
]

// PLACEHOLDER — swap in real certificates (title, issuer, year, view/download links)
const certificates = [
  {
    title: 'Database Management System',
    issuer: 'NPTEL',
    year: '2026',
    viewHref: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS41S4489019103041068',
    // downloadHref: '#',
  },
  // {
  //   title: 'Certificate title',
  //   issuer: 'Issuing platform',
  //   year: '2026',
  //   viewHref: '#',
  //   // downloadHref: '#',
  // },
]

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: 'phone' },
  { label: 'LinkedIn', value: 'dharani705', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', value: 'dharan705', href: profile.github, icon: 'github' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

/* ---------------------------------------------------
   ICONS — small inline set, no external dependency
--------------------------------------------------- */

const iconProps = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

const Icon = ({ name, ...rest }) => {
  const props = { ...iconProps, ...rest }
  switch (name) {
    case 'menu':
      return <svg {...props}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
    case 'close':
      return <svg {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    case 'arrow-right':
      return <svg {...props}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
    case 'arrow-up-right':
      return <svg {...props}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
    case 'mail':
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
    case 'phone':
      return <svg {...props}><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .56 3.5 1 1 0 0 1-.24 1z" /></svg>
    case 'map-pin':
      return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
    case 'user':
      return <svg {...props}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
    case 'github':
      return <svg {...props}><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
    case 'linkedin':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="8" y1="11" x2="8" y2="16" /><circle cx="8" cy="8" r="0.5" fill="currentColor" /><path d="M12 16v-3a2 2 0 0 1 4 0v3" /><line x1="12" y1="11" x2="12" y2="16" /></svg>
    case 'atom':
      return <svg {...props}><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" /><ellipse cx="12" cy="12" rx="9" ry="4" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" /></svg>
    case 'braces':
      return <svg {...props}><path d="M8 4c-2 0-2.5 1-2.5 3v3c0 1.2-.5 2-1.8 2 1.3 0 1.8.8 1.8 2v3c0 2 .5 3 2.5 3" /><path d="M16 4c2 0 2.5 1 2.5 3v3c0 1.2.5 2 1.8 2-1.3 0-1.8.8-1.8 2v3c0 2-.5 3-2.5 3" /></svg>
    case 'wind':
      return <svg {...props}><path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" /><path d="M3 12h14a2.5 2.5 0 1 1-2.5 2.5" /><path d="M3 16h9a2 2 0 1 1-2 2" /></svg>
    case 'coffee':
      return <svg {...props}><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" /><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" /><path d="M8 3c0 1-1 1-1 2s1 1 1 2M12 3c0 1-1 1-1 2s1 1 1 2" /></svg>
    case 'database':
      return <svg {...props}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
    case 'eye':
      return <svg {...props}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
    case 'award':
      return <svg {...props}><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" /></svg>
    case 'download':
      return <svg {...props}><path d="M12 3v12" /><polyline points="7 11 12 16 17 11" /><path d="M5 20h14" /></svg>
    case 'calendar':
      return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></svg>
    case 'send':
      return <svg {...props}><line x1="21" y1="3" x2="11" y2="13" /><polygon points="21 3 15 21 11 13 3 9 21 3" /></svg>
    case 'briefcase':
      return <svg {...props}><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
    case 'graduation-cap':
      return <svg {...props}><path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5z" /><path d="M6 11.5V17c0 1.2 2.7 3 6 3s6-1.8 6-3v-5.5" /><path d="M22 9.5v6" /></svg>
    default:
      return null
  }
}

/* ---------------------------------------------------
   NAV + OVERLAY MENU
--------------------------------------------------- */

function Nav({ onOpenMenu }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050b0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 text-sm font-bold text-[#050b0a]">
            {profile.initials[0]}
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">{profile.shortName}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.slice(0, 5).map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-teal-300">{link.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_40px_-15px_rgba(217,70,239,0.6)] transition hover:opacity-90 sm:inline-flex"
          >
            Reach Out
          </a>
          <button
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-[#050b0a]/98 backdrop-blur-2xl transition-opacity duration-300 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-6 py-4 lg:px-10">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
        >
          <Icon name="close" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col items-center justify-center gap-3">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="w-64 rounded-full px-8 py-3 text-center text-xl font-semibold text-slate-200 transition hover:bg-teal-400/90 hover:text-[#050b0a] hover:shadow-[0_0_40px_-5px_rgba(45,212,191,0.8)]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

/* ---------------------------------------------------
   HERO
--------------------------------------------------- */

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

function OrbitBadge({ icon, className }) {
  return (
    <div
      className={`absolute flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 bg-[#0a1614] text-teal-300 shadow-[0_0_25px_-5px_rgba(45,212,191,0.6)] ${className}`}
    >
      <Icon name={icon} width={18} height={18} />
    </div>
  )
}

function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-14 sm:px-8 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{ backgroundImage: 'radial-gradient(rgba(45,212,191,0.5) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">
            {role}
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-teal-300 align-middle" />
          </p>
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-teal-300">Hello I'm</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl">{profile.name}</h1>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            I build scalable full-stack web applications using React.js, Spring Boot, JavaScript, REST APIs, and MySQL — with a focus on fast, accessible, user-friendly interfaces.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-[#052014] transition hover:brightness-110">
              View My Work <Icon name="arrow-right" width={16} height={16} />
            </a>
            <a href={profile.resume} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050b0a] transition hover:bg-slate-200">
              My Resume
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2 text-slate-400">
            <a href="https://x.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-teal-400/60 hover:text-teal-300">𝕏</a>
            <a href={profile.linkedin} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-teal-400/60 hover:text-teal-300"><Icon name="linkedin" width={16} height={16} /></a>
            <a href={profile.github} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-teal-400/60 hover:text-teal-300"><Icon name="github" width={16} height={16} /></a>
          </div>
        </div>

        <div className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[440px] sm:w-[440px]">
          <div className="absolute inset-0 rounded-full border border-teal-400/20" />
          <div className="absolute inset-6 rounded-full border border-teal-400/30" />
          <div className="absolute inset-14 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500/25 via-emerald-500/10 to-transparent">
            <span className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 text-5xl font-bold text-[#052014] shadow-[0_0_60px_-10px_rgba(45,212,191,0.7)] sm:h-48 sm:w-48">
              {profile.initials}
            </span>
          </div>
          <OrbitBadge icon="atom" className="right-2 top-8" />
          <OrbitBadge icon="braces" className="left-0 top-1/2 -translate-y-1/2" />
          <OrbitBadge icon="database" className="bottom-6 right-4" />
          <OrbitBadge icon="wind" className="bottom-1/3 left-2" />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   ABOUT
--------------------------------------------------- */

function About() {
  const info = [
    { icon: 'user', label: 'Name', value: profile.name },
    { icon: 'map-pin', label: 'Location', value: profile.location },
    { icon: 'mail', label: 'Email', value: profile.email },
    { icon: 'clock', label: 'Availability', value: profile.availability, dot: true },
  ]

  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#0a1614]/80 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Icon name="user" className="text-teal-300" />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            I'm {profile.name}, a Full Stack Developer with hands-on frontend experience building production React interfaces, and backend skills in Spring Boot, Spring Security, JWT, and MySQL developed through independent, self-directed projects.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 text-slate-500"><Icon name={item.icon} width={18} height={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                  <p className="mt-1 flex items-center gap-2 text-base font-semibold text-white">
                    {item.dot && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={profile.resume} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-400/60 hover:text-teal-300">
              More About Me <Icon name="arrow-right" width={16} height={16} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-400/60 hover:text-teal-300">
              View My Projects <Icon name="arrow-right" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   SKILLS
--------------------------------------------------- */

// Split into two lanes so the marquee reads well at 20 items,
// each duplicated once for a seamless loop.
const skillsMid = Math.ceil(skills.length / 2)
const skillsLaneA = skills.slice(0, skillsMid)
const skillsLaneB = skills.slice(skillsMid)

function SkillCard({ skill }) {
  const { label, icon: SkillIcon, desc } = skill
  return (
    <div className="group relative flex shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/5 bg-[#0a1614]/60 px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-[#0a1614]/90">
      <div className="pointer-events-none absolute -top-2 left-1/2 z-30 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg border border-teal-400/30 bg-[#081210] px-3 py-1.5 text-xs font-medium text-teal-200 opacity-0 shadow-lg shadow-black/40 transition duration-200 group-hover:opacity-100">
        {desc}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-teal-400/30 bg-[#081210]" />
      </div>

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300 transition duration-300 group-hover:scale-110 group-hover:bg-teal-400/20 group-hover:text-teal-200">
        <SkillIcon width={22} height={22} strokeWidth={1.75} />
      </span>
      <span className="w-28 text-center text-sm text-slate-300 transition group-hover:text-white">
        {label}
      </span>
    </div>
  )
}

function MarqueeLane({ items, duration }) {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className="relative overflow-x-hidden overflow-y-visible pt-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max gap-6"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {[...items, ...items].map((skill, i) => (
          <SkillCard key={`${skill.label}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 lg:px-10">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          My <span className="text-teal-300">Skills</span>
        </h2>
        <p className="mt-3 text-slate-400">Modern applications, modern technologies</p>

        <div className="mt-14 flex flex-col gap-6">
          <MarqueeLane items={skillsLaneA} duration={38} />
          <MarqueeLane items={skillsLaneB} duration={44} />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   PROJECTS
--------------------------------------------------- */

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">Featured Projects</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Selected <span className="text-teal-300">Work</span>
            </h2>
          </div>
          <a href={profile.github} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300 transition hover:text-white">
            View All Projects <Icon name="arrow-up-right" width={16} height={16} />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1614]/70 transition hover:border-teal-400/40">
              <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${project.accent} text-3xl font-bold text-white/20`}>
                {project.title.split(' ').map((w) => w[0]).join('').slice(0, 3)}
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-5">
                  <a href={project.live} className="inline-flex items-center gap-1 text-sm font-semibold text-teal-300 transition hover:text-white">
                    View Project <Icon name="arrow-up-right" width={14} height={14} />
                  </a>
                  <a href={project.github} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-400 transition hover:text-slate-100">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   EXPERIENCE + EDUCATION — one shared center-year axis
--------------------------------------------------- */

const TIMELINE_START_YEAR = 2018
const YEAR_HEIGHT = 112 // px per year (12 months)

function monthsFromTimelineStart(year, month, monthFraction = 0) {
  return (year - TIMELINE_START_YEAR) * 12 + (month - 1 + monthFraction)
}

function EducationExperienceTimeline() {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth() + 1

  const years = []
  for (let y = TIMELINE_START_YEAR; y <= currentYear; y++) years.push(y)
  const containerHeight = years.length * YEAR_HEIGHT

  const offsetToTop = (monthsFromStart) => containerHeight - (monthsFromStart / 12) * YEAR_HEIGHT

  const getBandStyle = (entry) => {
    const isOngoing = !entry.endYear
    const endYear = isOngoing ? currentYear : entry.endYear
    const endMonth = isOngoing ? currentMonth : entry.endMonth

    const startOffset = monthsFromTimelineStart(entry.startYear, entry.startMonth, 0)
    const endOffset = monthsFromTimelineStart(endYear, endMonth, 1)

    const top = offsetToTop(endOffset)
    const height = Math.max(offsetToTop(startOffset) - top, 54)
    return { top, height, isOngoing }
  }

  const todayOffset = monthsFromTimelineStart(currentYear, currentMonth, 0.5)
  const todayTop = offsetToTop(todayOffset)

  const renderBand = (entry, side, key) => {
    const { top, height, isOngoing } = getBandStyle(entry)
    const isWork = side === 'work'
    const accent = isWork
      ? { border: 'border-teal-400/50', bg: 'bg-teal-400/[0.08]', text: 'text-teal-300', dot: 'bg-teal-400', badge: 'bg-teal-400/15', quietBorder: 'border-teal-400/15', shadow: 'shadow-[0_0_40px_-16px_rgba(45,212,191,0.55)]' }
      : { border: 'border-fuchsia-400/50', bg: 'bg-fuchsia-400/[0.08]', text: 'text-fuchsia-300', dot: 'bg-fuchsia-400', badge: 'bg-fuchsia-400/15', quietBorder: 'border-fuchsia-400/15', shadow: 'shadow-[0_0_40px_-16px_rgba(217,70,239,0.55)]' }

    const periodLabel = isOngoing
      ? `${entry.startYear} — Present`
      : `${entry.startYear} — ${entry.endYear}`

    return (
      <div
        key={key}
        style={{ top: `${top}px`, height: `${height}px` }}
        className={`absolute w-full rounded-2xl border px-4 py-3 transition ${
          isOngoing ? `${accent.border} ${accent.bg} ${accent.shadow}` : `${accent.quietBorder} bg-[#0a1614]/70`
        } ${isWork ? 'right-0' : 'left-0'}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${isOngoing ? accent.text : 'text-slate-500'}`}>
            {periodLabel}
          </span>
          {isOngoing && (
            <span className={`inline-flex items-center gap-1 rounded-full ${accent.badge} px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${accent.text}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} /> Current
            </span>
          )}
        </div>
        <p className={`mt-1.5 text-sm font-semibold ${isOngoing ? 'text-white' : 'text-slate-200'}`}>
          {isWork ? entry.title : entry.degree}
        </p>
        <p className="text-xs text-slate-400">{isWork ? entry.company : entry.institution}</p>
      </div>
    )
  }

  return (
    <section id="experience" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">My Journey</p>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Experience &amp; Education</h2>
          <p className="mt-3 text-slate-400">2018 to now — one timeline, read from the years in the middle</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-8 text-xs text-slate-400">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-400" /> Experience</span>
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400" /> Education</span>
        </div>

        <div className="mt-12 hidden lg:grid lg:grid-cols-[1fr_92px_1fr] lg:gap-6">
          <p className="pb-3 text-right text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">Experience</p>
          <span />
          <p className="pb-3 text-left text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Education</p>

          <div className="relative" style={{ height: `${containerHeight}px` }}>
            {experience.map((item, i) => renderBand(item, 'work', i))}
          </div>

          <div className="relative" style={{ height: `${containerHeight}px` }}>
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-teal-400/50 via-white/15 to-fuchsia-400/50" />
            {years.map((year) => {
              const top = offsetToTop(monthsFromTimelineStart(year, 6, 0.5))
              const isCurrent = year === currentYear
              return (
                <div
                  key={year}
                  style={{ top: `${top}px` }}
                  className="absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${
                      isCurrent
                        ? 'border-teal-400/70 bg-teal-400/15 text-teal-200 shadow-[0_0_25px_-8px_rgba(45,212,191,0.9)]'
                        : 'border-white/15 bg-[#0a1614] text-slate-400'
                    }`}
                  >
                    {year}
                  </span>
                </div>
              )
            })}
            <div
              style={{ top: `${todayTop}px` }}
              className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300 shadow-[0_0_12px_2px_rgba(45,212,191,0.8)]"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-teal-300 opacity-70" />
            </div>
          </div>

          <div className="relative" style={{ height: `${containerHeight}px` }}>
            {education.map((item, i) => renderBand(item, 'education', i))}
          </div>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {[...experience.map((e) => ({ ...e, side: 'work' })), ...education.map((e) => ({ ...e, side: 'education' }))]
            .sort((a, b) => (b.endYear || currentYear + 1) - (a.endYear || currentYear + 1) || b.startYear - a.startYear)
            .map((item, i) => {
              const isOngoing = !item.endYear
              const isWork = item.side === 'work'
              const accentText = isWork ? 'text-teal-300' : 'text-fuchsia-300'
              const accentBorder = isOngoing ? (isWork ? 'border-teal-400/50 bg-teal-400/[0.06]' : 'border-fuchsia-400/50 bg-fuchsia-400/[0.06]') : 'border-white/10 bg-[#0a1614]/60'
              const period = isOngoing ? `${item.startYear} — Present` : `${item.startYear} — ${item.endYear}`
              return (
                <div key={i} className={`rounded-2xl border p-5 ${accentBorder}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}>{isWork ? 'Experience' : 'Education'}</span>
                    <span className="text-xs text-slate-500">{period}</span>
                    {isOngoing && <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${accentText}`}>Current</span>}
                  </div>
                  <p className="mt-2 text-base font-semibold text-white">{isWork ? item.title : item.degree}</p>
                  <p className="text-sm text-slate-400">{isWork ? item.company : item.institution}</p>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return <EducationExperienceTimeline />
}

/* ---------------------------------------------------
   CERTIFICATES
--------------------------------------------------- */

function Certificates() {
  return (
    <section id="certificates" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">My Achievements</p>
        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Certificates</h2>
        <p className="mt-3 text-slate-400">My learning &amp; achievements</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <div key={i} className="rounded-3xl border border-dashed border-white/15 bg-[#0a1614]/60 p-7 text-left">
              <div className="flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-sm text-slate-500">
                Certificate preview
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300"><Icon name="award" width={16} height={16} /></span>
                <div>
                  <p className="font-semibold text-white">{cert.title}</p>
                  <p className="text-sm text-slate-500">{cert.issuer}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <Icon name="calendar" width={14} height={14} /> {cert.year}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={cert.viewHref} className="flex-1 rounded-full border border-teal-400/40 py-2 text-center text-sm font-semibold text-teal-300 transition hover:bg-teal-400/10">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-teal-400/10 to-fuchsia-500/10 p-6 sm:flex-row sm:text-left">
          <p className="text-slate-200">
            <span className="font-semibold text-teal-300">Continuous Learning —</span> add every course or workshop certificate here as you complete them.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   CONTACT
--------------------------------------------------- */

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert(`Thank you, ${form.name || 'there'}! Your message was sent.`)
    setForm({ name: '', email: '', company: '', message: '' })
  }

  const fields = [
    { name: 'name', placeholder: 'Your Name', icon: 'user', type: 'text' },
    { name: 'email', placeholder: 'Email Address', icon: 'mail', type: 'email' },
    { name: 'company', placeholder: 'Company Name (optional)', icon: 'briefcase', type: 'text' },
  ]

  return (
    <section id="contact" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 px-4 py-1 text-xs uppercase tracking-[0.3em] text-teal-300">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" /> Get In Touch
        </p>
        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Let's Create Something <span className="text-teal-300">Amazing</span> Together
        </h2>
        <p className="mt-4 text-slate-400">Have an idea in mind? Fill out the form and let's bring it to life.</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-teal-400/50 hover:text-teal-300">
              <Icon name={item.icon} width={15} height={15} /> {item.value}
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-10 rounded-[2rem] border border-teal-400/20 bg-[#0a1614]/70 p-8 text-left sm:p-10">
          <div className="mx-auto mb-8 flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-teal-400/40 text-teal-300">
              <Icon name="send" width={22} height={22} />
            </span>
            <h3 className="text-2xl font-bold text-white">Send us a Message!</h3>
          </div>

          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050b0a]/80 px-4 py-3.5 transition focus-within:border-teal-400/50">
                <span className="text-teal-300"><Icon name={field.icon} width={16} height={16} /></span>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.name !== 'company'}
                  className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 outline-none"
                />
              </div>
            ))}
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-[#050b0a]/80 px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-teal-400/50"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-[#050b0a] transition hover:brightness-105"
            >
              Send Message <Icon name="send" width={16} height={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ---------------------------------------------------
   FOOTER
--------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050b0a] px-6 py-8 text-sm text-slate-500 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with React + Tailwind.</p>
        <div className="flex flex-wrap items-center gap-5 text-slate-400">
          <a href={profile.linkedin} className="transition hover:text-teal-300">LinkedIn</a>
          <a href={profile.github} className="transition hover:text-teal-300">GitHub</a>
          <a href={profile.resume} className="transition hover:text-teal-300">Resume</a>
        </div>
      </div>
    </footer>
  )
}

/* ---------------------------------------------------
   PAGE
--------------------------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="min-h-screen bg-[#050b0a] font-sans text-slate-100">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap'); .font-sans{font-family:'Inter',ui-sans-serif,system-ui;} h1,h2,h3{font-family:'Sora',ui-sans-serif,system-ui;}`}</style>
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}