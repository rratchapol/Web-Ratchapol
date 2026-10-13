'use client';

import { ArrowRight, Bot, Cable, Code2, Download, GitBranch, Link2, Mail, Menu, X, Server, Layers3, Workflow, Wrench, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { independentProjects, projects } from './projects';
import { ProjectCard } from './project-card';
import { TechToolIcon } from './tech-tool-icon';

const skills = [
  ['Frontend & UI', 'Reusable components and responsive product interfaces.', ['Angular', 'React', 'Next.js', 'Tailwind CSS', 'Ant Design'], Layers3],
  ['Backend', 'Application services, APIs and content management.', ['Laravel', 'NestJS', 'Strapi'], Server],
  ['Languages', 'Typed applications, scripting and automation.', ['TypeScript', 'JavaScript', 'Python', 'Go', 'C', 'PHP'], Code2],
  ['APIs & integrations', 'External services, analytics and messaging.', ['REST API', 'GA4', 'LINE LIFF'], Cable],
  ['AI & MCP workflows', 'Tool-connected research, implementation and review.', ['Codex', 'Claude', 'Gemini CLI', 'Copilot', 'MCP'], Bot],
  ['Development tools', 'Local development, version control and delivery.', ['VS Code', 'Docker', 'Git'], Wrench],
] as const;

const engineeringApproach = [
  ['Understand', 'Map the users, requirements and constraints.'],
  ['Design', 'Define the journeys, data flow and API contracts.'],
  ['Build', 'Connect interfaces, services and integrations.'],
  ['Refine', 'Verify behavior and keep the system maintainable.'],
] as const;

const featuredProjectSlugs = ['qa-mcp', 'pet-community-thailand', 'nci-crm'];
const portfolioProjects = [...projects, ...independentProjects];
const featuredProjects = featuredProjectSlugs.flatMap((slug) => {
  const project = portfolioProjects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [portraitInteracting, setPortraitInteracting] = useState(false);
  const [portraitGreeting, setPortraitGreeting] = useState(false);
  const portraitStageRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const handlePortraitMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const depth = portraitInteracting ? 13 : 8;
    const horizontal = ((event.clientX - bounds.left) / bounds.width - 0.5) * depth;
    const vertical = ((event.clientY - bounds.top) / bounds.height - 0.5) * depth;
    const stage = portraitStageRef.current;
    if (!stage) return;
    stage.style.setProperty('--portrait-x', `${vertical}deg`);
    stage.style.setProperty('--portrait-y', `${horizontal * -1}deg`);
    stage.style.setProperty('--portrait-shift-x', `${horizontal * 2}px`);
    stage.style.setProperty('--portrait-shift-y', `${vertical * 1.25}px`);
    stage.style.setProperty('--orbit-x', `${horizontal * -1.1}px`);
    stage.style.setProperty('--orbit-y', `${vertical * -0.85}px`);
    stage.style.setProperty('--halo-x', `${horizontal * -0.45}px`);
    stage.style.setProperty('--halo-y', `${vertical * -0.35}px`);
    stage.style.setProperty('--plinth-x', `${horizontal * 0.55}px`);
    stage.style.setProperty('--portrait-scale', portraitInteracting ? '1.035' : '1.015');
  };

  const resetPortraitPose = () => {
    const stage = portraitStageRef.current;
    if (!stage) return;
    ['--portrait-x', '--portrait-y', '--portrait-shift-x', '--portrait-shift-y', '--orbit-x', '--orbit-y', '--halo-x', '--halo-y', '--plinth-x'].forEach((property) => stage.style.setProperty(property, property.includes('x') || property.includes('y') ? '0px' : '0deg'));
    stage.style.setProperty('--portrait-x', '0deg');
    stage.style.setProperty('--portrait-y', '0deg');
    stage.style.setProperty('--portrait-scale', '1');
  };

  const handlePortraitPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPortraitInteracting(true);
  };

  const handlePortraitPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setPortraitInteracting(false);
  };

  const playPortraitGreeting = () => {
    setPortraitGreeting(false);
    window.requestAnimationFrame(() => setPortraitGreeting(true));
  };

  // Scroll progress + back-to-top visibility + active nav tracking
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollProgress(progress);
      setShowTop(el.scrollTop > 400);

      const sections = ['home', 'work', 'engineering', 'experience', 'contact'];
      for (const id of [...sections].reverse()) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
      const bounds = el.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) el.classList.add('visible');
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Case studies', id: 'work' },
    { label: 'Tech Stack', id: 'engineering' },
    { label: 'Experience', id: 'experience' },
  ];

  return (
    <main>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Back to top */}
      <button
        className={`back-top${showTop ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ChevronUp size={18} />
      </button>

      {/* Navigation */}
      <header className="nav">
        <a className="brand" href="#home" onClick={close}>
          <span className="mark">RR</span>
          <span>RATCHAPOL RUJIWATCH</span>
        </a>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={'#' + id}
              onClick={close}
              className={activeSection === id ? 'active' : ''}
            >{label}</a>
          ))}
          <a
            className={`nav-contact${activeSection === 'contact' ? ' active' : ''}`}
            href="#contact"
            onClick={close}
          >Contact <ArrowRight size={14} /></a>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* Hero */}
      <section id="home" className="hero section-pad">
        <div className="hero-copy reveal">
          <p className="eyebrow accent">RATCHAPOL RUJIWATCH / PORTFOLIO 2026</p>
          <h1>RATCHAPOL<br /><span>RUJIWATCH</span></h1>
          <p className="hero-role">FULL-STACK DEVELOPER</p>
          <div className="hero-thesis">
            <span>A developer portfolio for</span>
            <strong>PRODUCT SYSTEMS<br />BUILT TO BE USED.</strong>
            <p>Selected CRM, admin, automation and open-source work — from the interface through the API layer.</p>
          </div>
          <div className="interface-contract" aria-label="Design intent flows into responsive UI and reliable API integration">
            <div><b>01</b><small>read the operating context</small></div>
            <span className="contract-line"><i /></span>
            <div><b>02</b><small>make the next action clear</small></div>
          </div>
          <div className="actions">
            <a className="btn primary" href="#work">Explore Case Studies <ArrowRight size={16} /></a>
            <a className="btn ghost cv-download" href="/CV.pdf" download>Download CV <Download size={15} /></a>
          </div>
          <div className="focus-strip" aria-label="Core work focus">
            <span>Product systems</span><span>Automation</span><span>Open source</span>
          </div>
          <div className="hero-about">
            <div className="hero-about-top">
              <p className="eyebrow">ABOUT ME</p>
              <span>PROFILE / 01</span>
            </div>
            <div className="hero-about-lede">
              <span>01</span>
              <p>I turn product requirements into <em>systems people can use with confidence.</em></p>
            </div>
            <p className="hero-about-copy">I&apos;m Ratchapol Rujiwatch, a full-stack developer based in Bang Pa In, Thailand. I build CRM, admin tools and API-connected product workflows, from the interface through the services behind it.</p>
            <details className="hero-background">
              <summary>Background &amp; approach</summary>
            <div className="hero-principles">
              <div><b>WHAT I BUILD</b><strong>Product UI &amp; connected systems</strong><span>CRM, admin tools and workflow-focused web applications.</span></div>
              <div><b>HOW I WORK</b><strong>Clear before clever</strong><span>Thoughtful UX, reliable handoffs and room to iterate.</span></div>
            </div>
            <div className="hero-facts">
              <span><b>BASED IN</b>Bang Pa In, Thailand</span>
              <span><b>BACKGROUND</b>Computer Engineering · KMITL</span>
              <span><b>FOCUS</b>Full-stack systems &amp; product UI</span>
            </div>
            </details>
          </div>
        </div>
        <div className="hero-visual">
          <div
            ref={portraitStageRef}
            className={`portrait-stage${portraitInteracting ? ' is-interacting' : ''}`}
            aria-label="Interactive 3D portrait of Ratchapol Rujiwatch"
            role="button"
            tabIndex={0}
            onPointerMove={handlePortraitMove}
            onPointerDown={handlePortraitPointerDown}
            onPointerUp={handlePortraitPointerUp}
            onPointerCancel={handlePortraitPointerUp}
            onPointerLeave={() => { if (!portraitInteracting) resetPortraitPose(); }}
            onClick={playPortraitGreeting}
            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); playPortraitGreeting(); } }}
          >
            <div className="portrait-grid" aria-hidden="true" />
            <span className="portrait-index">SYSTEM / 01</span>
            <span className="portrait-vertical">FULL-STACK<br />DEVELOPER</span>
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-crosshair" aria-hidden="true" />
            <div className="portrait-plinth" aria-hidden="true" />
            <div className={`portrait-card${portraitGreeting ? ' is-greeting' : ''}`} onAnimationEnd={(event) => { if (event.animationName === 'portrait-greeting') setPortraitGreeting(false); }}>
              <div className="portrait-model">
                <img className="portrait-pose" src="/images/ratchapol-3d-avatar-cutout.webp" srcSet="/images/ratchapol-3d-avatar-cutout-480.webp 480w, /images/ratchapol-3d-avatar-cutout-768.webp 768w, /images/ratchapol-3d-avatar-cutout.webp 1024w" sizes="(max-width: 620px) 80vw, (max-width: 1040px) 50vw, 460px" width={1024} height={1536} fetchPriority="high" alt="3D chibi portrait of Ratchapol Rujiwatch in a navy suit" />
              </div>
            </div>
            <div className="portrait-status"><i /> BASED IN THAILAND · FULL-STACK PRODUCT WORK</div>
            <div className="portrait-skill-tag tag-ui">UI / SYSTEMS</div>
            <div className="portrait-skill-tag tag-api">API / WORKFLOWS</div>
            <span className="portrait-caption">SELECTED SYSTEMS · PERSONAL BUILDS · ENGINEERING NOTES</span>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section section-pad">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">WORK RECORD</p>
            <h2>Systems I&apos;ve helped build.</h2>
            <p>Three representative builds first — then the complete record of product systems, automation and open-source work.</p>
          </div>
          <span className="work-index">03 FEATURED / 10 TOTAL</span>
        </div>
        <div className="selected-work-grid project-card-grid">
          {featuredProjects.map(project => <ProjectCard project={project} reveal key={project.slug} />)}
        </div>
        <div className="work-archive-control reveal">
          <div>
            <p className="eyebrow">COMPLETE WORK ARCHIVE</p>
            <span>Open all 10 project records across professional work, independent builds and academic work.</span>
          </div>
          <a className="work-archive-toggle" href="/projects">View all project records <ArrowRight size={15} /></a>
        </div>
      </section>

      {/* Engineering */}
      <section id="engineering" className="section tech-stack section-pad" aria-labelledby="tech-stack-title">
        <div className="tech-stack-layout">
          <div className="tech-stack-intro reveal">
            <p className="eyebrow">TECH STACK &amp; TOOLS</p>
            <h2 id="tech-stack-title">Built across<br />the stack.</h2>
            <p>From the interface people use to the services behind it — the tools I work with across the stack.</p>
            <div className="tech-stack-layers" aria-label="Full-stack scope">
              <div><Layers3 size={20} aria-hidden="true" /><span><strong>Interfaces</strong><small>Product screens &amp; user journeys</small></span></div>
              <div><Server size={20} aria-hidden="true" /><span><strong>Services</strong><small>APIs, data &amp; application logic</small></span></div>
              <div><Workflow size={20} aria-hidden="true" /><span><strong>Workflows</strong><small>Integrations, automation &amp; delivery</small></span></div>
            </div>
            <p className="tech-stack-intro-note">Different tools. One connected product.</p>
          </div>
          <div className="tech-stack-grid">
            {skills.map(([name, description, tools, Icon]) => (
              <article className="tech-stack-card reveal" key={name}>
                <div className="tech-stack-card-heading">
                  <span className="tech-stack-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3>{name}</h3>
                </div>
                <p>{description}</p>
                <ul className="tech-stack-tags" aria-label={`${name} tools`}>
                  {tools.map(tool => <li key={tool}><TechToolIcon name={tool} /><span>{tool}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="tech-stack-approach reveal">
          <div className="tech-stack-approach-heading">
            <Workflow size={20} strokeWidth={1.7} aria-hidden="true" />
            <div><p className="eyebrow">FULL-STACK APPROACH</p><h3>How I put the tools to work.</h3></div>
          </div>
          <ol className="tech-stack-process">
            {engineeringApproach.map(([title, description], index) => (
              <li key={title}><span aria-hidden="true">0{index + 1}</span><h4>{title}</h4><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience section-pad">
        {/* Saved fallbacks: experience-layout-two-column and experience-layout-single-column. */}
        <div className="experience-layout experience-layout-alternating reveal">
          <div className="experience-main">
          <p className="eyebrow">EXPERIENCE TIMELINE</p>
          <h2>Where I&apos;ve put it into practice.</h2>
          <div className="experience-timeline-head" aria-label="Timeline summary">
            <span>CAREER RECORD / 03 MILESTONES</span>
            <span>PRODUCT SYSTEMS · CRM · AUTOMATION</span>
          </div>
          <div className="timeline">
            <div className="timeline-entry timeline-entry-current">
              <div className="timeline-index"><span>NOW</span><small>2025 — PRESENT</small></div>
              <article className="timeline-content">
                <div className="timeline-card-top"><b>WITSAWA CORPORATION CO., LTD.</b><div className="timeline-card-meta"><time>2025 — PRESENT</time><span>CURRENT · PRODUCT DELIVERY</span></div></div>
                <strong>Web Applications &amp; Enhancements</strong>
                <p className="timeline-scope">Eastspring · LDB Pro · CMDF · Well Kid · NFI x Classwin</p>
                <ul className="timeline-highlights">
                  <li>Built CMDF interfaces from supplied designs and integrated Google Analytics 4.</li>
                  <li>Delivered fixes and features for NFI x Classwin, plus browser and SDK compatibility work for Eastspring and Well Kid.</li>
                  <li>Built an event QR-scanning module for LDB Pro.</li>
                </ul>
                <div className="timeline-project-links"><a href="/work/cmdf">CMDF ↗</a><a href="/work/nfi-classwin">NFI x Classwin ↗</a></div>
              </article>
            </div>
            <div className="timeline-entry">
              <div className="timeline-index"><span>2025</span></div>
              <article className="timeline-content">
                <div className="timeline-card-top"><b>ASCEND CO., LTD.</b><div className="timeline-card-meta"><time>2025</time><span>CONNECTED WORKFLOW</span></div></div>
                <strong>CRM &amp; LINE LIFF</strong>
                <p className="timeline-scope">SOS Wasty</p>
                <ul className="timeline-highlights">
                  <li>Built responsive CRM and LINE LIFF interfaces for SOS Wasty.</li>
                  <li>Connected screens to project APIs using Next.js, Tailwind CSS and Ant Design.</li>
                </ul>
                <div className="timeline-project-links"><a href="/work/sos-wasty">SOS Wasty ↗</a></div>
              </article>
            </div>
            <div className="timeline-entry">
              <div className="timeline-index"><span>2024</span></div>
              <article className="timeline-content">
                <div className="timeline-card-top"><b>ASHA TECH CORPORATION</b><div className="timeline-card-meta"><time>2024 — 2025</time><span>INTERNAL OPERATIONS</span></div></div>
                <strong>CRM &amp; Admin Systems</strong>
                <p className="timeline-scope">NCI CRM · TRR Admin System</p>
                <ul className="timeline-highlights">
                  <li>Built role-aware NCI CRM screens and API-connected forms with Angular and Tailwind CSS.</li>
                  <li>Developed TRR dashboards, calendars, tables and forms for internal operations.</li>
                  <li>Added map views using latitude and longitude data.</li>
                </ul>
                <div className="timeline-project-links"><a href="/work/nci-crm">NCI CRM ↗</a><a href="/work/trr-admin-system">TRR Admin ↗</a></div>
              </article>
            </div>
          </div>
          </div>
          <aside className="experience-side" aria-label="Work throughline">
            <p className="eyebrow">WORK THROUGHLINE</p>
            <h3>What connects the roles.</h3>
            <p>Each milestone adds another part of the same practice: practical systems that make work clearer and easier to move forward.</p>
            <ol className="experience-throughline-list">
              <li><span>01</span><div><b>Product systems</b><p>CRM, admin and workflow tools people return to every day.</p></div></li>
              <li><span>02</span><div><b>Connected services</b><p>Interfaces joined to APIs, analytics and external channels.</p></div></li>
              <li><span>03</span><div><b>Practical delivery</b><p>Feature work and improvements that stay usable in production.</p></div></li>
            </ol>
            <div className="experience-side-stamp">FULL-STACK<br /><i>PRODUCT WORK</i></div>
          </aside>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact section-pad">
        <div className="reveal">
          <p className="eyebrow">PROFILE &amp; CONTACT</p>
          <h2>Open to full-stack product roles.</h2>
          <p>I&apos;m interested in teams building internal products, customer workflows and tools that need thoughtful engineering from interface to API.</p>
          <p className="availability"><i /> Based in Bang Pa In, Thailand · Computer Engineering, KMITL</p>
          <div className="contact-links">
            <a href="mailto:rratchapol@gmail.com"><Mail size={17} /> rratchapol@gmail.com</a>
            <a href="https://github.com/rratchapol" target="_blank" rel="noreferrer"><GitBranch size={17} /> github.com/rratchapol</a>
            <a href="https://www.linkedin.com/in/ratchapol-rujiwach" target="_blank" rel="noreferrer"><Link2 size={17} /> linkedin.com/in/ratchapol-rujiwach</a>
          </div>
        </div>
        <div className="contact-actions reveal" style={{ transitionDelay: '110ms' }}>
          <p className="contact-actions-label">CONTACT DETAILS</p>
          <h3>Start with the work.</h3>
          <p>For a role, interview or product conversation, email me with the team context and the problem you&apos;re working on.</p>
          <a className="contact-email-cta" href="mailto:rratchapol@gmail.com">
            <Mail size={18} />
            <span><small>EMAIL</small>rratchapol@gmail.com</span>
            <ArrowRight size={18} />
          </a>
          <div className="contact-alternatives">
            <span>ALSO ON</span>
            <a href="https://github.com/rratchapol" target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub</a>
            <a href="https://www.linkedin.com/in/ratchapol-rujiwach" target="_blank" rel="noreferrer"><Link2 size={15} /> LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Ratchapol Rujiwatch. Built with Next.js.</span>
        <div className="footer-links">
          <a href="https://github.com/rratchapol" target="_blank" rel="noreferrer"><GitBranch size={13} /> GitHub</a>
          <a href="https://www.linkedin.com/in/ratchapol-rujiwach" target="_blank" rel="noreferrer"><Link2 size={13} /> LinkedIn</a>
          <a href="mailto:rratchapol@gmail.com"><Mail size={13} /> Email</a>
        </div>
        <a href="#home" className="back-link">Scroll to top <ChevronUp size={14} /></a>
      </footer>
    </main>
  );
}
