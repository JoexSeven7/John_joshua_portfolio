import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { education, experience, projects, skills } from './data/projects';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-950/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="nav-brand group flex items-center gap-3" aria-label="Go to home">
              <div className="relative w-11 h-11 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="absolute inset-0 rounded-2xl bg-white/20 group-hover:scale-110 transition-transform"></span>
                <span className="relative text-white font-black">JJ</span>
              </div>
              <div className="text-left">
                <p className="text-base font-black leading-none text-slate-900 dark:text-white">
                  John<span className="text-blue-500">Joshua</span>
                </p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Frontend Developer</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-1 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Hire Me
              </button>
              <button
                onClick={toggleTheme}
                className="nav-icon"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="nav-icon"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="nav-icon"
                aria-label="Toggle navigation"
                aria-expanded={mobileMenuOpen}
              >
                <span className={`nav-burger ${mobileMenuOpen ? "open" : ""}`}></span>
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""} lg:hidden`}>
          <div className="mx-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/95 backdrop-blur-xl p-3 shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-nav-item"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-3 w-full py-3 rounded-2xl bg-blue-500 text-white font-bold"
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.14),transparent_35%)]"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(59,130,246,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.8)_1px,transparent_1px)] bg-size-[56px_56px]"></div>
        <div className="hero-orbit absolute -top-12 -left-12 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="hero-orbit hero-orbit-delayed absolute -right-20 top-24 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="hero-orbit absolute bottom-16 left-1/4 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 mb-6 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Frontend Developer
              </div>

              <h1 className="hero-gradient-text text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
                Designing With Code. Building With Purpose.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0">
                I'm John Joshua, a Full-Stack Developer who turns ideas into clean, responsive, and user-friendly digital experiences.
              </p>

              <p className="text-base text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                From architecture to software development, I bring structure, creativity, and problem-solving into every project I build.
              </p>

              <div className="glass rounded-2xl p-5 mb-8 max-w-xl mx-auto lg:mx-0">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-500">01</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Architecture mindset</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-cyan-500">02</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Software development</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-indigo-500">03</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">User-centered design</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all hover:-translate-y-1"
                >
                  Contact Me
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                {["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-orbit flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-8 rounded-full border border-blue-500/30"></div>
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-[spin_18s_linear_infinite]"></div>
                <div className="absolute -top-2 left-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></div>
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>

                <div className="hero-orbit hero-orbit-delayed relative z-10 w-full h-full rounded-full border border-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.35)] overflow-hidden">
                  <img 
                    src="/joshua-900.webp"
                    srcSet="/joshua-480.webp 480w, /joshua-900.webp 900w, /joshua-1200.webp 1200w"
                    sizes="(max-width: 1024px) 80vw, 420px"
                    alt="Profile" 
                    className="w-full h-full object-cover object-bottom"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Current Focus</p>
                  <p className="font-bold text-slate-800 dark:text-white">Frontend Excellence</p>
                </div>

                <div className="absolute top-8 -right-2 sm:right-4 glass rounded-2xl p-4 shadow-xl">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Stack</p>
                  <p className="font-bold text-slate-800 dark:text-white">React + Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-shell relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">About Me</span>
            <h2 className="section-title mt-4">Architecture Mindset. Software Execution.</h2>
            <p className="section-subtitle">
              I combine the structure of architecture with modern software development to create digital experiences that are organized, scalable, and pleasant to use.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            <div className="feature-card glass lg:col-span-3 rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <svg className="w-5 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                My background in architecture taught me how to plan, structure, and think visually. Now I apply that same discipline to frontend and full-stack development, focusing on clean interfaces, dependable code, and user-centered products.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether I'm building a landing page, testing a frontend framework, or studying a codebase deeply, I focus on making every part of the experience intentional and useful.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { label: "React/Next.js", value: "95%" },
                { label: "Node.js", value: "90%" },
                { label: "TypeScript", value: "85%" }
              ].map((skill) => (
                <div key={skill.label} className="feature-card glass rounded-3xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-slate-800 dark:text-white">{skill.label}</span>
                    <span className="text-blue-500 font-bold">{skill.value}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-linear-to-br from-blue-500 to-cyan-500 h-2.5 rounded-full" style={{ width: skill.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-shell relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">Work Experience</span>
            <h2 className="section-title mt-4">Building Reliable Frontend Products</h2>
            <p className="section-subtitle">
              My current work focuses on frontend quality, code understanding, testing, and strengthening the structure of web applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            {experience.map((job) => (
              <article key={job.id} className="feature-card glass rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-500 font-semibold mb-1">{job.company}</p>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{job.role}</h3>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 text-sm font-semibold w-fit">
                    {job.dates}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm">{job.location}</span>
                  <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm">Frontend</span>
                  <span className="px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm">QA Testing</span>
                </div>

                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-lg shadow-blue-500/40"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <aside className="feature-card glass rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="section-kicker">What I Bring</span>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-4 mb-4">
                  A careful approach to frontend quality and product thinking.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I focus on understanding how code works, improving interface stability, and making sure every interaction feels intentional.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {["Clean UI", "Code Study", "Testing", "Performance"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/60 dark:bg-slate-900/60 p-4 text-center">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-shell relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">Educational Background</span>
            <h2 className="section-title mt-4">From Architecture to Software Development</h2>
            <p className="section-subtitle">
              My education connects visual structure, applied thinking, and modern development skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <article key={item.id} className="feature-card glass rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/15 to-cyan-500/15 flex items-center justify-center mb-6">
                  <svg className="w-5 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-3.004 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{item.institution}</h3>
                <p className="text-blue-500 font-semibold mb-2">{item.degree}</p>
                <p className="text-slate-600 dark:text-slate-300">{item.field}</p>
                {item.description && (
                  <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">{item.description}</p>
                )}
              </article>
            ))}
          </div>

          <div className="feature-card glass rounded-3xl p-8 mt-6 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-3">Field of Study</p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
              Architectural_technology & Applied_Science → Software Development
            </h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-shell relative py-24 overflow-hidden bg-slate-950 text-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">My Projects</span>
            <h2 className="section-title mt-4 text-white">Selected Work That Solves Real Problems</h2>
            <p className="section-subtitle text-slate-300">
              A collection of responsive websites and digital products built with attention to layout, usability, and modern frontend practices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-shell relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">Skills & Technologies</span>
            <h2 className="section-title mt-4">Tools I Use to Build Modern Web Experiences</h2>
            <p className="section-subtitle">
              A practical stack for frontend development, backend logic, styling, version control, and content-driven websites.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass rounded-3xl p-5 flex flex-col items-center justify-center text-center min-h-37.5">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/15 to-cyan-500/15 flex items-center justify-center mb-3">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-shell relative py-24 overflow-hidden bg-slate-950 text-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">Get In Touch</span>
            <h2 className="section-title mt-4 text-white">Let's Build Something Useful Together</h2>
            <p className="section-subtitle text-slate-300">
              Have a project, idea, or opportunity? Reach out and let's turn it into a clean, responsive, and user-friendly digital experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
            <div className="contact-card glass rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.28-.98L3 21l1.86-4.6A7.95 7.95 0 014 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready when you are.</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm open to frontend development work, QA testing, responsive website builds, and projects that need a thoughtful product mindset.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Frontend Development", "QA Testing", "Responsive Websites", "WordPress Projects"].map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:+2347040602452" className="contact-card glass rounded-3xl p-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-lg font-bold text-white">+234 7040602452</p>
                <p className="mt-2 text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform">Call me</p>
              </a>

              <a href="mailto:johnjoshuaaaaaa@gmail.com" className="contact-card glass rounded-3xl p-6 group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-lg font-bold text-white">johnjoshuaaaaaa@gmail.com</p>
                <p className="mt-2 text-sm text-cyan-400 font-medium group-hover:translate-x-1 transition-transform">Send email</p>
              </a>

              <a href="https://github.com/JoexSeven7" target="_blank" rel="noopener noreferrer" className="contact-card glass rounded-3xl p-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="text-lg font-bold text-white">JoexSeven7</p>
                <p className="mt-2 text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform">Open profile</p>
              </a>

              <a href="https://www.linkedin.com/in/john-joshua-ink" target="_blank" rel="noopener noreferrer" className="contact-card glass rounded-3xl p-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="text-lg font-bold text-white">John Joshua</p>
                <p className="mt-2 text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform">Connect</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.16),transparent_35%)]"></div>
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(148,163,184,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.8)_1px,transparent_1px)] bg-size-[48px_48px]"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold text-white">
                John<span className="text-blue-500">Joshua</span>
              </div>
              <p className="mt-3 text-slate-400">
                Building thoughtful digital experiences with clean code, structure, and user-focused design.
              </p>
              <button
                onClick={() => scrollToSection('hero')}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 text-white font-medium transition-all hover:bg-blue-600 hover:-translate-y-1 shadow-lg shadow-blue-500/30"
              >
                Back to top
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                {["Home", "About", "Experience", "Education", "Projects", "Skills", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="footer-link px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3">Built With</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Vite", "Tailwind CSS", "JavaScript"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} John Joshua. All rights reserved.</p>
            <p>Designed with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
