import { createElement, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
} from 'react-icons/fa6'
import {
  HiOutlineAcademicCap,
  HiOutlineArrowUpRight,
  HiOutlineCheckBadge,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineSparkles,
  HiOutlineUser,
} from 'react-icons/hi2'

const navItems = [
  { id: 'home', label: 'Home', icon: HiOutlineHome },
  { id: 'about', label: 'About', icon: HiOutlineUser },
  { id: 'skills', label: 'Skills', icon: HiOutlineCpuChip },
  { id: 'projects', label: 'Projects', icon: HiOutlineCodeBracket },
  { id: 'education', label: 'Journey', icon: HiOutlineAcademicCap },
  { id: 'contact', label: 'Contact', icon: HiOutlineEnvelope },
]

const Motion = motion

const skills = [
  'Python', 'JavaScript', 'C', 'HTML', 'CSS', 'FastAPI', 'Node.js',
  'Express.js', 'React.js', 'REST APIs', 'LLM Integration',
  'Prompt Engineering', 'AI API Integration', 'Backend Development',
  'Chrome Extension Development', 'Git', 'GitHub', 'OpenRouter API',
  'Groq API', 'Gemini API', 'VS Code',
]

const skillDetails = {
  Python: {
    summary: 'Used for backend logic, API workflows, and AI-powered processing.',
    usedIn: 'CodeMentor AI backend with FastAPI and AI response handling.',
  },
  JavaScript: {
    summary: 'Used for interactive frontend behavior and browser extension logic.',
    usedIn: 'TrustLens Pro Chrome Extension and portfolio interactions.',
  },
  C: {
    summary: 'Core programming language used for strengthening logic building and problem solving.',
    usedIn: 'Academic programming and fundamentals.',
  },
  HTML: {
    summary: 'Used for structuring web pages and frontend layouts.',
    usedIn: 'Portfolio UI and browser extension pages.',
  },
  CSS: {
    summary: 'Used for styling, responsive design, animation, and visual polish.',
    usedIn: 'Portfolio design, glowing UI, and extension interface.',
  },
  FastAPI: {
    summary: 'Python web framework used to build fast backend APIs.',
    usedIn: 'CodeMentor AI backend services.',
  },
  'Node.js': {
    summary: 'JavaScript runtime used for backend APIs and server-side logic.',
    usedIn: 'TrustLens Pro backend API experiments.',
  },
  'Express.js': {
    summary: 'Lightweight Node.js framework used for REST API development.',
    usedIn: 'TrustLens Pro backend routes.',
  },
  'React.js': {
    summary: 'Frontend library used for building component-based user interfaces.',
    usedIn: 'CodeMentor AI frontend and this portfolio.',
  },
  'REST APIs': {
    summary: 'Used to connect frontend, backend, and AI services.',
    usedIn: 'CodeMentor AI and TrustLens Pro.',
  },
  'LLM Integration': {
    summary: 'Connecting applications with large language models for intelligent outputs.',
    usedIn: 'CodeMentor AI code analysis and TrustLens Pro credibility checks.',
  },
  'Prompt Engineering': {
    summary: 'Designing structured prompts to get reliable AI responses.',
    usedIn: 'CodeMentor AI explanations, bug detection, and interview question generation.',
  },
  'AI API Integration': {
    summary: 'Integrating external AI model APIs into real applications.',
    usedIn: 'OpenRouter, Groq, and Gemini integrations.',
  },
  'Backend Development': {
    summary: 'Building server-side logic, APIs, validation, and AI workflows.',
    usedIn: 'CodeMentor AI and TrustLens Pro.',
  },
  'Chrome Extension Development': {
    summary: 'Building browser extensions using Manifest V3 and browser APIs.',
    usedIn: 'TrustLens Pro.',
  },
  Git: {
    summary: 'Version control for tracking and managing code changes.',
    usedIn: 'All portfolio and project development.',
  },
  GitHub: {
    summary: 'Hosting code repositories and project versions publicly.',
    usedIn: 'CodeMentor AI and TrustLens Pro repositories.',
  },
  'OpenRouter API': {
    summary: 'AI model routing platform used to access multiple LLMs.',
    usedIn: 'CodeMentor AI fallback/provider experiments.',
  },
  'Groq API': {
    summary: 'Fast AI inference API used for LLM responses.',
    usedIn: 'CodeMentor AI AI-provider testing.',
  },
  'Gemini API': {
    summary: 'Google AI API used for text and multimodal AI features.',
    usedIn: 'TrustLens Pro and CodeMentor AI.',
  },
  'VS Code': {
    summary: 'Development editor used for writing, testing, and managing code.',
    usedIn: 'Portfolio and project development.',
  },
}

const strengths = [
  'Problem Solving', 'Backend Development', 'API Integration',
  'AI Application Development', 'Full-Stack Development',
  'Fast Learning Ability', 'Team Collaboration',
]

const interests = [
  'Artificial Intelligence', 'Backend Engineering', 'Full-Stack Development',
  'AI Tools & Automation', 'Developer Platforms', 'Badminton', 'Traveling',
]

const projects = [
  {
    number: '01',
    title: 'CodeMentor AI',
    type: 'AI DEV PLATFORM',
    description:
      'An intelligent code review and interview preparation platform. It analyzes code, explains logic, detects bugs, suggests optimizations, generates interview questions, and provides AI chatbot support.',
    tech: ['Python', 'FastAPI', 'React', 'OpenRouter', 'Groq', 'Gemini'],
    icon: HiOutlineCodeBracket,
    repository: 'https://github.com/uzumakiansh22-byte/code-mentor-ai',
  },
  {
    number: '02',
    title: 'TrustLens Pro',
    type: 'AI BROWSER EXTENSION',
    description:
      'A Chrome Extension for detecting misinformation, deepfakes, and manipulated digital content through LLM-based forensic analysis and streamlined browser extension workflows.',
    tech: ['Chrome Extension', 'JavaScript', 'Backend APIs', 'AI Integration'],
    icon: HiOutlineSparkles,
    repository: 'https://github.com/uzumakiansh22-byte/trustlens-chrome_extension',
  },
]

const certifications = [
  ['Kaggle Certification', 'Introduction to Machine Learning', 'https://www.kaggle.com/learn/certification/anshtiwari22/intro-to-machine-learning'],
  ['LetsUpgrade', 'Node.js Bootcamp', 'https://verify.letsupgrade.in/certificate/LUENJSFEB126163'],
  ['HP Certified', 'Critical Thinking in the AI Era', 'https://www.life-global.org/certificate/ad938090-829b-49eb-98ac-9fb3bfc4b127'],
  ['Cisco', 'Python Essentials 1', 'https://www.netacad.com/certificates/?issuanceId=17b2117b-c712-4343-9057-9c780b629be6'],
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/uzumakiansh22-byte', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ansh-tiwari-b64ab1385', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com/anxh_ious/?hl=en', icon: FaInstagram },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <Motion.div
      className="section-title"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow"><i /> {eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Motion.div>
  )
}

function ProfileVisual() {
  const [failed, setFailed] = useState(false)

  return (
    <Motion.div
      className="profile-stage"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="profile-glow" />
      <Motion.div
        className="profile-frame"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {failed ? (
          <div className="profile-placeholder">AT</div>
        ) : (
          <img src="/profile.png" alt="Ansh Tiwari" onError={() => setFailed(true)} />
        )}
      </Motion.div>
      <div className="status-chip"><span /> AVAILABLE FOR COLLABORATION</div>
      <div className="data-chip chip-left"><small>FOCUS</small><b>AI / ML</b></div>
      <div className="data-chip chip-right"><small>MODE</small><b>BUILD</b></div>
    </Motion.div>
  )
}

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <div className="site-shell">
      <div className="background-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <aside className="side-rail">
        <a className="rail-logo" href="#home" aria-label="Home">AT</a>
        <div className="rail-line" />
        <nav>
          {navItems.map(({ id, label, icon }) => (
            <a key={id} href={`#${id}`} aria-label={label} data-label={label}>
              {createElement(icon)}
            </a>
          ))}
        </nav>
        <div className="rail-line" />
        <span className="rail-index">07</span>
      </aside>

      <header className="topbar">
        <a className="brand" href="#home"><span>&lt;</span>ANSH<span>/&gt;</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <Motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="eyebrow"><i /> HELLO, WORLD. I'M</span>
            <h1>ANSH<br /><span>TIWARI</span></h1>
            <div className="role-line"><span>01</span><p>Computer Science Engineering Student<br /><b>AI/ML Enthusiast</b> & Full-Stack Developer</p></div>
            <p className="hero-summary">
              I build practical AI-powered systems that solve real-world problems,
              from intelligent developer tools to robust backend experiences.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore projects <HiOutlineArrowUpRight /></a>
              <a className="ghost-btn" href="/resume.pdf" download><FaDownload /> Download resume</a>
            </div>
            <div className="hero-meta">
              <span><FaLocationDot /> Prayagraj, India</span>
              <span><HiOutlineEnvelope /> uzumakiansh22@gmail.com</span>
            </div>
          </Motion.div>
          <ProfileVisual />
        </section>

        <section className="about section-wrap" id="about">
          <SectionTitle eyebrow="02 / ABOUT" title="Engineering ideas into impact." />
          <div className="about-grid">
            <Motion.article className="glass-card about-main tilt-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-corner">PROFILE.SYS</span>
              <p>
                Computer Science Engineering student at Dr. A.P.J. Abdul Kalam Technical
                University with strong interests in Artificial Intelligence, Backend
                Development, and Full-Stack Web Development.
              </p>
              <p>
                Passionate about building practical AI-powered systems that solve real-world
                problems. Experienced in developing AI-integrated applications, REST APIs,
                browser extensions, and developer tools.
              </p>
              <div className="about-stat-row">
                <div><b>02+</b><span>AI PROJECTS</span></div>
                <div><b>21</b><span>CORE SKILLS</span></div>
                <div><b>04</b><span>CERTIFICATIONS</span></div>
              </div>
            </Motion.article>
            <Motion.div className="mini-stack" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <article className="glass-card mini-card"><HiOutlineCpuChip /><span>PRIMARY FOCUS</span><b>Intelligent<br />systems</b></article>
              <article className="glass-card mini-card"><FaCode /><span>DEVELOPMENT</span><b>Backend +<br />Full-stack</b></article>
            </Motion.div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionTitle eyebrow="03 / CAPABILITIES" title="A toolkit for the next build." description="Technologies and disciplines I use to turn ideas into working products." />
          <Motion.div className="glass-card skill-cloud" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {skills.map((skill, index) => (
              <button
                type="button"
                key={skill}
                className={`${index < 6 ? 'featured ' : ''}${selectedSkill === skill ? 'active' : ''}`}
                aria-pressed={selectedSkill === skill}
                onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
              >
                {skill}
              </button>
            ))}
          </Motion.div>
          {selectedSkill && (
            <Motion.article
              className="glass-card skill-detail"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
            >
              <span className="card-kicker">SELECTED CAPABILITY</span>
              <h3>{selectedSkill}</h3>
              <p>{skillDetails[selectedSkill].summary}</p>
              <div><b>USED IN</b><span>{skillDetails[selectedSkill].usedIn}</span></div>
            </Motion.article>
          )}
          <div className="detail-grid">
            <Motion.article className="glass-card list-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-kicker">STRENGTHS</span>
              {strengths.map((item) => <div key={item}><i />{item}</div>)}
            </Motion.article>
            <Motion.article className="glass-card list-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-kicker">INTERESTS</span>
              {interests.map((item) => <div key={item}><i />{item}</div>)}
            </Motion.article>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionTitle eyebrow="04 / SELECTED WORK" title="Projects with a purpose." description="Applied AI, backend engineering, and web experiences designed around real use cases." />
          <div className="project-grid">
            {projects.map(({ number, title, type, description, tech, icon, repository }) => (
              <Motion.article className="glass-card project-card tilt-card" key={title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="project-head"><span>{number}</span>{createElement(icon)}</div>
                <small>{type}</small>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-list">{tech.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-foot">
                  <span>CONCEPT / DEVELOPMENT</span>
                  <a href={repository} target="_blank" rel="noopener noreferrer">View Repository <FaGithub /></a>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="journey section-wrap" id="education">
          <SectionTitle eyebrow="05 / JOURNEY" title="Learning in motion." />
          <div className="journey-grid">
            <Motion.article className="glass-card timeline-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-kicker">EDUCATION</span>
              <div className="timeline-item">
                <i />
                <small>2024 — 2028</small>
                <h3>B.Tech Computer Science Engineering</h3>
                <a className="institution-link" href="https://www.united.ac.in/" target="_blank" rel="noopener noreferrer">
                  United College of Engineering and Research (UCER), Prayagraj <HiOutlineArrowUpRight />
                </a>
                <a className="affiliation-link" href="https://aktu.ac.in/" target="_blank" rel="noopener noreferrer">
                  Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU) <HiOutlineArrowUpRight />
                </a>
              </div>
              <div className="timeline-item">
                <i />
                <small>FOUNDATION</small>
                <h3>School Education</h3>
                <a className="institution-link" href="https://newrsj.in/Chhatnag/" target="_blank" rel="noopener noreferrer">
                  New R. S. J. Public School <HiOutlineArrowUpRight />
                </a>
              </div>
            </Motion.article>
            <Motion.article className="glass-card certificate-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-kicker">CERTIFICATIONS</span>
              {certifications.map(([issuer, course, href]) => (
                <a className="certificate" href={href} target="_blank" rel="noopener noreferrer" key={course}>
                  <HiOutlineCheckBadge />
                  <span><b>{course}</b><small>{issuer}</small><em>View Certificate <HiOutlineArrowUpRight /></em></span>
                </a>
              ))}
            </Motion.article>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <Motion.div className="contact-box" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow"><i /> 06 / CONTACT</span>
            <h2>Have an idea?<br /><span>Let's build it.</span></h2>
            <p>I'm open to collaborating on ambitious products, developer tools, and AI-powered experiences.</p>
            <a className="mail-link" href="mailto:uzumakiansh22@gmail.com">uzumakiansh22@gmail.com <HiOutlineArrowUpRight /></a>
            <div className="social-row">
              {socials.map(({ label, href, icon }) => <a key={label} href={href} target="_blank" rel="noreferrer">{createElement(icon)} {label}</a>)}
            </div>
          </Motion.div>
        </section>
      </main>

      <footer>
        <span>ANSH TIWARI <i /> 2026</span>
        <span>DESIGNED FOR THE FUTURE</span>
      </footer>
    </div>
  )
}

export default App
