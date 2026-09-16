'use client';

import { ArrowRight, Bot, Cable, Download, GitBranch, Link2, Mail, Menu, X, Database, Server, Layers3, Container, Workflow, Wrench, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { academicProjects, independentProjects, projectCaseStudies, projects } from './projects';

const skills = [
  ['Frontend','Angular / React / Next.js','Responsive interfaces and component-based UI',Layers3],
  ['Backend','Laravel / NestJS / Strapi','Practical API integration for web applications',Server],
  ['Programming','TypeScript / JavaScript / Python','Also experienced with Go, C and PHP',Database],
  ['UI Development','Tailwind CSS / Ant Design','From design mockups to polished interfaces',Container],
  ['Integration','REST API / GA4 / LINE LIFF','Connected experiences that support real workflows',Workflow],
  ['AI-Assisted Development','Codex / Claude / Gemini CLI / Copilot','Rapid prototyping, implementation and code review',Bot],
  ['MCP Workflows','Tool-connected AI development','Use project context and connected tools to research, build and debug faster',Cable],
  ['Development Tools','VS Code / Docker / Git','A practical local workflow from build to delivery',Wrench],
] as const;

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
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Case studies', id: 'work' },
    { label: 'Engineering notes', id: 'engineering' },
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
          >Profile <ArrowRight size={14} /></a>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
            <p className="hero-about-copy">From the interface to the API layer, I build practical tools that stay clear for users and maintainable for the team behind them.</p>
            <div className="hero-principles">
              <div><b>WHAT I BUILD</b><strong>Product UI &amp; connected systems</strong><span>CRM, admin tools and workflow-focused web applications.</span></div>
              <div><b>HOW I WORK</b><strong>Clear before clever</strong><span>Thoughtful UX, reliable handoffs and room to iterate.</span></div>
            </div>
            <div className="hero-facts">
              <span><b>BASED IN</b>Bang Pa In, Thailand</span>
              <span><b>BACKGROUND</b>Computer Engineering · KMITL</span>
              <span><b>FOCUS</b>Full-stack systems &amp; product UI</span>
            </div>
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
            onClick={() => setPortraitGreeting(true)}
            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setPortraitGreeting(true); } }}
          >
            <div className="portrait-grid" aria-hidden="true" />
            <span className="portrait-index">SYSTEM / 01</span>
            <span className="portrait-vertical">FULL-STACK<br />DEVELOPER</span>
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-crosshair" aria-hidden="true" />
            <div className="portrait-plinth" aria-hidden="true" />
            <div className={`portrait-card${portraitGreeting ? ' is-greeting' : ''}`} onAnimationEnd={() => setPortraitGreeting(false)}>
              <div className="portrait-model">
                <img src="/images/ratchapol-3d-avatar-cutout.png?v=transparent" alt="A cute 3D chibi portrait of Ratchapol Rujiwatch in a navy suit" />
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
            <p>A focused record of product systems, automation and open-source work — with the problem, scope and ownership made explicit.</p>
          </div>
          <span className="work-index">11 PROJECT RECORDS</span>
        </div>
        <div className="work-group-head reveal">
          <p>01 / PROFESSIONAL WORK ARCHIVE</p>
          <span>COMMISSIONED PRODUCT SYSTEMS</span>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <article
              className="project reveal"
              key={p.title}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="project-top"><span>{p.n}</span><small>PROJECT RECORD</small></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className={'project-evidence ' + p.tone}><span>{p.category}</span><b>{p.preview}</b><small>ROLE / {projectCaseStudies[p.slug].role}</small></div>
              <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              <a className="case" href={`/work/${p.slug}`}>Read Project Record <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
        <div className="work-group independent-work">
          <div className="work-group-head reveal">
            <p>02 / PERSONAL BUILDS &amp; OPEN SOURCE</p>
            <span>EXPERIMENTS THAT BECAME USEFUL TOOLS</span>
          </div>
          <div className="independent-grid">
            {independentProjects.map((build, index) => {
              const BuildIcon = build.kind === 'qa' ? Cable : build.kind === 'bot' ? Bot : build.kind === 'platform' ? Workflow : Database;
              return (
                <article className="independent-project reveal" key={build.title} style={{ transitionDelay: `${index * 110}ms` }}>
                  <div className="independent-project-top">
                    <span>{build.kicker} / 0{index + 1}</span>
                    <BuildIcon size={20} strokeWidth={1.8} />
                  </div>
                  <h3>{build.title}</h3>
                  <p>{build.desc}</p>
                  <div className="independent-package">{build.packageName}</div>
                  <div className="tags">{build.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="case" href={`/work/${build.slug}`}>Read Case Study <ArrowRight size={14} /></a>
                </article>
              );
            })}
          </div>
        </div>
        <div className="work-group academic-work">
          <div className="work-group-head reveal">
            <p>03 / ACADEMIC TEAM PROJECT</p>
            <span>PRODUCT DESIGN + MULTI-SURFACE DELIVERY</span>
          </div>
          <div className="academic-grid">
            {academicProjects.map((project) => (
              <article className="independent-project academic-project reveal" key={project.title}>
                <div className="independent-project-top">
                  <span>{project.kicker}</span>
                  <Workflow size={20} strokeWidth={1.8} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="independent-package">{project.packageName}</div>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="case" href={`/work/${project.slug}`}>Read Project Record <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section id="engineering" className="section engineering section-pad">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">ENGINEERING PRACTICE</p>
            <h2>Patterns I rely on when building product systems.</h2>
            <p>Not a service menu — a working reference for the tools and decisions behind the case studies above.</p>
          </div>
        </div>
        <div className="engineering-grid">
          <div className="architecture reveal">
            <div className="architecture-head">
              <p>ENGINEERING NOTES</p>
              <span>WORKING PRACTICE / 01—04</span>
            </div>
            <div className="workflow">
              <div className="workflow-step">
                <span>01</span>
                <div><b>Read the operating context</b><p>Start with the people, constraints and information behind the request.</p></div>
              </div>
              <div className="workflow-step">
                <span>02</span>
                <div><b>Make the interface legible</b><p>Build responsive UI that makes the next action and current state clear.</p></div>
              </div>
              <div className="workflow-step featured">
                <span>03</span>
                <div><b>Connect the system</b><p>Bring APIs, data and external tools into the place where work happens.</p></div>
              </div>
              <div className="workflow-step">
                <span>04</span>
                <div><b>Leave room to improve</b><p>Keep the product maintainable enough to observe, refine and extend.</p></div>
              </div>
            </div>
            <div className="tool-rail">
              <span>UI</span><p>Angular · React · Next.js</p>
              <span>DATA</span><p>Laravel · NestJS · REST API</p>
              <span>SHIP</span><p>GA4 · Docker · Git</p>
            </div>
            <div className="architecture-stamp">BUILT<br />TO<br /><i>OPERATE</i></div>
          </div>
          <div className="skill-grid">
            {skills.map(([name, a, b, Icon], i) => (
              <div className="skill reveal" key={name} style={{ transitionDelay: `${i * 65}ms` }}>
                <Icon size={19} />
                <div><b>{name}</b><span>{a}</span><small>{b}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience section-pad">
        <div className="reveal">
          <p className="eyebrow">EXPERIENCE TIMELINE</p>
          <h2>Product work across internal systems and real-world workflows.</h2>
          <div className="timeline">
            <div className="timeline-entry">
              <span className="timeline-index">01</span>
              <div className="timeline-content">
              <b>WITSAWA CORPORATION CO., LTD.</b>
              <strong>Web Applications &amp; Enhancements</strong>
              <span>Eastspring · LDB Pro · CMDF · Well Kid · NFI x Classwin</span>
              <p>Contributed to a varied portfolio of web initiatives, helping teams turn operational requirements, existing systems and design direction into more reliable digital experiences. The work ranged from compatibility improvements and focused workflow tools to user-interface delivery, analytics and ongoing product enhancement.</p>
              <p>For Eastspring, helped bridge the gap between Internet Explorer and modern browsers. Built a custom QR code scanning module for LDB Pro to support event participation by doctors and pharmacists, transformed CMDF design mockups into working UI with Google Analytics 4, resolved Well Kid library incompatibilities after SDK updates, and improved the NFI x Classwin website through fixes and new features.</p>
              </div>
            </div>
            <div className="timeline-entry">
              <span className="timeline-index">02</span>
              <div className="timeline-content">
              <b>ASCEND CO., LTD.</b>
              <strong>CRM &amp; LINE LIFF</strong>
              <span>SOS Wasty</span>
              <p>Worked on SOS Wasty, a CRM and LINE LIFF experience designed to keep workflows accessible across devices. The focus was on delivering a clear, responsive frontend while ensuring the interface connected smoothly with the underlying APIs.</p>
              <p>Used Next.js, Tailwind CSS and Ant Design to build polished interface components and responsive layouts. The result was a practical customer-facing and operational experience that brings CRM interactions into the LINE ecosystem without compromising usability.</p>
              </div>
            </div>
            <div className="timeline-entry">
              <span className="timeline-index">03</span>
              <div className="timeline-content">
              <b>ASHA TECH CORPORATION</b>
              <strong>CRM &amp; Admin Systems</strong>
              <span>NCI CRM · TRR Admin System</span>
              <p>Developed web interfaces for CRM and administrative workflows where usability, access control and clear information management were central to the product. This included building responsive screens that help internal teams work confidently with forms, data and day-to-day operational tasks.</p>
              <p>For the National Cancer Institute CRM, created role-based user permissions with Angular and Tailwind CSS, then developed responsive forms connected to APIs for internal staff. For Thai Roong Ruang Group, built an admin system with dashboards, charts, calendars, data tables and forms, including location views generated from latitude and longitude data.</p>
              </div>
            </div>
          </div>
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
