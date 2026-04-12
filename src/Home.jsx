import { useState } from "react";

const SKILLS = [
  {
    cat: "Frontend",
    items: [
      { name: "React.js", pct: 90 },
      { name: "JavaScript", pct: 85 },
      { name: "HTML + CSS", pct: 92 },
    ],
  },
  {
    cat: "Backend",
    items: [
      { name: "Spring Boot", pct: 82 },
      { name: "Java", pct: 80 },
      { name: "REST APIs", pct: 85 },
    ],
  },
  {
    cat: "Database",
    items: [
      { name: "MySQL", pct: 80 },
      { name: "JPA / Hibernate", pct: 72 },
    ],
  },
  {
    cat: "Tools",
    items: [
      { name: "Git + GitHub", pct: 88 },
      { name: "Postman", pct: 85 },
      { name: "SEO", pct: 75 },
    ],
  },
];

const PROJECTS = [
  {
    file: "PROJECT_01.jsx",
    title: "Figma-like Editor",
    desc: "Browser-based design tool with drag-and-drop canvas, real-time element editing, and export — built entirely in React.",
    stack: ["React.js", "Canvas API", "CSS Modules"],
    live: "#",
    github: "#",
  },
  {
    file: "PROJECT_02.jsx",
    title: "iBridge Website",
    desc: "Responsive corporate website with SEO-optimised structure, clean components, and mobile-first design.",
    stack: ["React.js", "SEO", "Responsive"],
    live: "#",
    github: "#",
  },
  {
    file: "PROJECT_03.java",
    title: "Full Stack To-Do App",
    desc: "Task manager with React frontend + Spring Boot REST backend, CRUD ops, auth, and MySQL persistence.",
    stack: ["React.js", "Spring Boot", "MySQL", "Java"],
    live: "#",
    github: "#",
  },
  {
    file: "PROJECT_04.jsx",
    title: "Responsive UI Kit",
    desc: "Reusable component library showcasing accessible forms, layouts, and interactive patterns in React + CSS.",
    stack: ["React.js", "CSS3", "Accessibility"],
    live: "#",
    github: "#",
  },
];

const TECH_PILLS = ["React.js", "Spring Boot", "Java", "MySQL", "REST APIs", "Git", "SEO"];

const CONTACT_LINKS = [
  { icon: "@",  label: "email",    value: "dharanidharanvp705@email.com",          href: "mailto:dharanidharanvp705@email.com" },
  { icon: "#",  label: "phone",    value: "+91 8056669507",             href: "tel:+919999999999" },
  { icon: "in", label: "linkedin", value: "https://www.linkedin.com/in/dharani705/",   href: "#" },
  { icon: "gh", label: "github",   value: "github.com/dharan705",        href: "#" },
];

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');

  :root {
    --bg: #080c14;
    --surface: #0d1220;
    --surface2: #111827;
    --green: #00ff87;
    --blue: #38bdf8;
    --purple: #a78bfa;
    --text: #e2e8f0;
    --muted: #64748b;
    --border: #1e293b;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body, #root {
    font-family: 'Space Grotesk', sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: .35; pointer-events: none; z-index: 0;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: center;
    padding: 1rem 3rem;
    background: rgba(8,12,20,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .logo { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 500; }
  .logo .green { color: var(--green); }
  .logo .blue { color: var(--blue); }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a { font-size: .8rem; font-weight: 500; color: var(--muted); text-decoration: none; letter-spacing: .05em; transition: color .2s; }
  .nav-links a:hover { color: var(--green); }

  /* HERO */
  .hero { min-height: 100vh; display: flex; align-items: center; padding: 8rem 3rem 4rem; position: relative; z-index: 1; }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: .6rem; font-family: 'JetBrains Mono', monospace; font-size: .75rem; color: var(--green); margin-bottom: 2rem; }
  .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); animation: pulse 2s infinite; }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,135,.4); }
    50% { box-shadow: 0 0 0 8px rgba(0,255,135,0); }
  }
  .hero-h1 { font-size: clamp(3rem, 7vw, 6rem); font-weight: 700; line-height: 1; letter-spacing: -.03em; margin-bottom: 1.5rem; }
  .hero-h1 .role { display: block; color: transparent; -webkit-text-stroke: 1px #334155; font-weight: 700; }
  .hero-h1 .role span {
    background: linear-gradient(90deg, var(--blue), var(--purple));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 0;
  }
  .hero-desc { font-size: 1.05rem; color: var(--muted); line-height: 1.8; max-width: 520px; margin-bottom: 2.5rem; }
  .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
  .tech-row { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 2rem; }
  .tech-pill {
    font-family: 'JetBrains Mono', monospace; font-size: .7rem; padding: .3rem .8rem;
    border: 1px solid var(--border); color: var(--muted); background: var(--surface);
    cursor: default; transition: all .2s;
  }
  .tech-pill:hover { border-color: var(--green); color: var(--green); background: rgba(0,255,135,.05); }

  /* BUTTONS */
  .btn-glow {
    background: var(--green); color: #000; padding: .85rem 2rem;
    font-family: 'Space Grotesk', sans-serif; font-size: .85rem; font-weight: 600;
    border: none; cursor: pointer; text-decoration: none; display: inline-block;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    transition: opacity .2s, transform .2s;
  }
  .btn-glow:hover { opacity: .85; transform: translateY(-2px); }
  .btn-ghost {
    background: transparent; color: var(--text); padding: .85rem 2rem;
    font-family: 'Space Grotesk', sans-serif; font-size: .85rem; font-weight: 500;
    border: 1px solid var(--border); cursor: pointer; text-decoration: none; display: inline-block;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    transition: all .2s;
  }
  .btn-ghost:hover { border-color: var(--blue); color: var(--blue); }

  /* SECTIONS */
  .section { padding: 5rem 3rem; position: relative; z-index: 1; }
  .sec-label { font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--green); letter-spacing: .15em; text-transform: uppercase; margin-bottom: .75rem; }
  .sec-h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; letter-spacing: -.02em; margin-bottom: 2.5rem; }

  /* ABOUT */
  .about { background: var(--surface); }
  .about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start; }
  .about-text p { color: var(--muted); line-height: 1.9; font-size: .95rem; margin-bottom: 1rem; }
  .terminal { background: #060a10; border: 1px solid var(--border); padding: 1.5rem; font-family: 'JetBrains Mono', monospace; font-size: .78rem; line-height: 1.8; position: relative; }
  .terminal::before { content: '● ● ●'; position: absolute; top: .75rem; left: 1rem; font-size: .6rem; color: var(--muted); letter-spacing: .5rem; }
  .terminal-body { margin-top: 1.5rem; }
  .t-key { color: var(--blue); }
  .t-val { color: var(--green); }
  .t-str { color: var(--purple); }
  .t-muted { color: var(--muted); }

  /* SKILLS */
  .skills-wrap { background: var(--surface2); }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: var(--border); }
  .skill-box { background: var(--surface); padding: 1.75rem; transition: background .2s; }
  .skill-box:hover { background: var(--surface2); }
  .skill-box-title { font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 1rem; display: flex; align-items: center; gap: .5rem; }
  .skill-box-title::before { content: '//'; color: var(--green); }
  .skill-list { display: flex; flex-direction: column; gap: .6rem; }
  .skill-item { display: flex; align-items: center; gap: .75rem; font-size: .85rem; }
  .skill-bar { flex: 1; height: 2px; background: var(--border); position: relative; overflow: hidden; }
  .skill-fill { height: 100%; background: linear-gradient(90deg, var(--green), var(--blue)); }
  .skill-pct { font-family: 'JetBrains Mono', monospace; font-size: .65rem; color: var(--muted); min-width: 2.5rem; text-align: right; }

  /* PROJECTS */
  .projects-wrap { background: var(--surface); }
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1px; background: var(--border); }
  .proj-card { background: var(--bg); padding: 2rem; position: relative; overflow: hidden; transition: background .3s; cursor: default; }
  .proj-card:hover { background: var(--surface2); }
  .proj-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--green), var(--blue)); transform: scaleX(0); transform-origin: left; transition: transform .4s; }
  .proj-card:hover::after { transform: scaleX(1); }
  .proj-num { font-family: 'JetBrains Mono', monospace; font-size: .65rem; color: var(--muted); margin-bottom: 1.5rem; }
  .proj-title { font-size: 1.1rem; font-weight: 600; margin-bottom: .75rem; }
  .proj-desc { font-size: .83rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.5rem; }
  .proj-stack { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1.5rem; }
  .proj-badge { font-family: 'JetBrains Mono', monospace; font-size: .62rem; padding: .2rem .6rem; border: 1px solid var(--border); color: var(--muted); }
  .proj-links { display: flex; gap: 1rem; }
  .proj-link { font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--green); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color .2s; }
  .proj-link:hover { border-color: var(--green); }
  .proj-link.gh { color: var(--muted); }
  .proj-link.gh:hover { color: var(--blue); border-color: var(--blue); }

  /* RESUME */
  .resume-wrap { text-align: center; }
  .resume-box { display: inline-block; border: 1px solid var(--border); padding: 3rem 4rem; background: var(--surface); max-width: 500px; width: 100%; }
  .resume-box p { color: var(--muted); font-size: .9rem; margin-bottom: 2rem; }
  .btn-download { display: inline-block; background: transparent; border: 1px solid var(--green); color: var(--green); padding: .85rem 2.5rem; font-family: 'JetBrains Mono', monospace; font-size: .8rem; text-decoration: none; transition: all .2s; cursor: pointer; }
  .btn-download:hover { background: var(--green); color: #000; }

  /* CONTACT */
  .contact-wrap { background: var(--surface); }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
  .contact-head p { color: var(--muted); font-size: .9rem; line-height: 1.8; margin-bottom: 2rem; }
  .contact-links { display: flex; flex-direction: column; gap: 1rem; }
  .c-link { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid var(--border); background: var(--bg); transition: border-color .2s; text-decoration: none; color: var(--text); }
  .c-link:hover { border-color: var(--blue); }
  .c-link-icon { width: 36px; height: 36px; background: var(--surface2); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--blue); flex-shrink: 0; }
  .c-link-label { font-size: .7rem; color: var(--muted); font-family: 'JetBrains Mono', monospace; letter-spacing: .05em; }
  .c-link-val { font-size: .85rem; font-weight: 500; }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  .f-group { display: flex; flex-direction: column; gap: .4rem; }
  .f-label { font-family: 'JetBrains Mono', monospace; font-size: .65rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; }
  .f-input, .f-textarea { background: var(--bg); border: 1px solid var(--border); padding: .8rem 1rem; font-family: 'Space Grotesk', sans-serif; font-size: .85rem; color: var(--text); outline: none; transition: border-color .2s; }
  .f-input:focus, .f-textarea:focus { border-color: var(--green); }
  .f-textarea { resize: vertical; min-height: 120px; }
  .btn-send { background: var(--green); color: #000; padding: .9rem 2rem; font-family: 'JetBrains Mono', monospace; font-size: .8rem; font-weight: 500; border: none; cursor: pointer; align-self: flex-start; transition: opacity .2s; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
  .btn-send:hover { opacity: .85; }

  /* FOOTER */
  footer { border-top: 1px solid var(--border); padding: 1.75rem 3rem; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; background: var(--bg); }
  .foot-text { font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--muted); }
  .foot-socials { display: flex; gap: 1.5rem; }
  .foot-socials a { font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--muted); text-decoration: none; transition: color .2s; }
  .foot-socials a:hover { color: var(--green); }

  @media (max-width: 768px) {
    .nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .section { padding: 3.5rem 1.5rem; }
    .hero { padding: 6rem 1.5rem 3rem; }
    .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    footer { flex-direction: column; gap: 1rem; text-align: center; padding: 1.5rem; }
  }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <span className="green">&lt;</span>Dharani<span className="blue">D</span><span className="green">/&gt;</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <div className="hero-eyebrow">
          <span className="status-dot" />
          Available for hire · Chennai, India
        </div>
        <h1 className="hero-h1">
          Dharanidharan
          <span className="role"><span>Full Stack Dev</span></span>
        </h1>
        <p className="hero-desc">
          I build end-to-end web applications — React.js frontends that delight users and Spring Boot APIs that scale. Clean code. Real results.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-glow">View Projects →</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
        <div className="tech-row">
          {TECH_PILLS.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="sec-label">// 01 — about_me</div>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="sec-h2">Who I am</h2>
          <p>I'm Dharanidharan, a Full Stack Developer based in Chennai. I specialise in scalable, high-performance web apps using modern JavaScript and Java ecosystems.</p>
          <p>From pixel-perfect React UIs to Spring Boot REST APIs, I enjoy owning the complete development lifecycle of a product.</p>
          <p>I also bring SEO awareness to every frontend project — great code should also be discoverable.</p>
        </div>
        <div className="terminal">
          <div className="terminal-body">
            <div><span className="t-key">const</span> <span className="t-val">developer</span> = {"{"}</div>
            <div>&nbsp;&nbsp;<span className="t-key">name</span>: <span className="t-str">"Dharanidharan"</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">role</span>: <span className="t-str">"Full Stack Dev"</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">location</span>: <span className="t-str">"Chennai, India"</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">frontend</span>: [<span className="t-str">"React"</span>, <span className="t-str">"JS"</span>, <span className="t-str">"CSS"</span>],</div>
            <div>&nbsp;&nbsp;<span className="t-key">backend</span>: [<span className="t-str">"SpringBoot"</span>, <span className="t-str">"Java"</span>],</div>
            <div>&nbsp;&nbsp;<span className="t-key">database</span>: <span className="t-str">"MySQL"</span>,</div>
            <div>{"}"}</div>
            <div style={{ marginTop: ".75rem" }}><span className="t-muted">// building something great...</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-wrap" id="skills">
      <div className="sec-label">// 02 — skills</div>
      <h2 className="sec-h2">What I use</h2>
      <div className="skills-grid">
        {SKILLS.map(({ cat, items }) => (
          <div className="skill-box" key={cat}>
            <div className="skill-box-title">{cat}</div>
            <div className="skill-list">
              {items.map(({ name, pct }) => (
                <div className="skill-item" key={name}>
                  {name}
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="skill-pct">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-wrap" id="projects">
      <div className="sec-label">// 03 — projects</div>
      <h2 className="sec-h2">What I've built</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="proj-card" key={p.title}>
            <div className="proj-num">{p.file}</div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-stack">
              {p.stack.map((s) => <span className="proj-badge" key={s}>{s}</span>)}
            </div>
            <div className="proj-links">
              <a href={p.live} className="proj-link">live demo ↗</a>
              <a href={p.github} className="proj-link gh">github →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="section resume-wrap" id="resume">
      <div className="resume-box">
        <div className="sec-label" style={{ textAlign: "left" }}>// 04 — resume</div>
        <h2 className="sec-h2">Download CV</h2>
        <p>Full overview of my experience, education, and technical skills — in one clean PDF.</p>
        <a href="/dharani-resume.pdf" className="btn-download" download>↓ dharani_resume.pdf</a>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = () => {
    alert(`Thanks ${form.name}! Message received.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section contact-wrap" id="contact">
      <div className="sec-label">// 05 — contact</div>
      <div className="contact-grid">
        <div className="contact-head">
          <h2 className="sec-h2">Let's work<br />together.</h2>
          <p>Open to full-time roles, freelance gigs, and cool collaborations. Reach out — I reply fast.</p>
          <div className="contact-links">
            {CONTACT_LINKS.map((c) => (
              <a href={c.href} className="c-link" key={c.label}>
                <div className="c-link-icon">{c.icon}</div>
                <div>
                  <div className="c-link-label">{c.label}</div>
                  <div className="c-link-val">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-form">
          {[
            { label: "name",    name: "name",    type: "text",  ph: "dharani" },
            { label: "email",   name: "email",   type: "email", ph: "dd@example.com" },
          ].map((f) => (
            <div className="f-group" key={f.name}>
              <label className="f-label">{f.label}</label>
              <input className="f-input" type={f.type} name={f.name} placeholder={f.ph} value={form[f.name]} onChange={change} />
            </div>
          ))}
          <div className="f-group">
            <label className="f-label">message</label>
            <textarea className="f-textarea" name="message" placeholder="Tell me about your project..." value={form.message} onChange={change} />
          </div>
          <button className="btn-send" onClick={submit}>send_message() →</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot-text">© 2025 Dharanidharan — Chennai, India</div>
      <div className="foot-socials">
        <a href="https://github.com/dharan705">GitHub</a>
        <a href="https://www.linkedin.com/in/dharani705/">LinkedIn</a>
        <a href="mailto:dharanidharanvp705@gmail.com">Email</a>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <>
      <style>{css}</style>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}