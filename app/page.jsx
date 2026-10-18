 "use client";

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { FarmTracPreview, ConnectPreview, CmsPreview } from "@/components/ProjectPreview";
import { CareerSection, SkillsSection } from "@/components/PortfolioSections";

const projects = [
  {
    number: "01", title: "FarmTrac", url: "https://farmtrac.krishify.com", subtitle: "Large-scale AgriTech & CRM Platform",
    description: "A comprehensive platform for farmer management, cluster operations, advisory, finance and analytics. Built 40+ custom modules with reusable components and optimized performance for large datasets.",
    features: ["Dashboard & Analytics", "Team Tracker", "Analyse", "Finance", "Cluster Management", "Advisory"],
    stack: ["React.js", "Next.js", "Material UI", "Redux Toolkit", "REST APIs", "Charts"]
  },
  {
    number: "02", title: "FarmTrac", highlight: "Connect", url: "https://farmtrac-connect.com", subtitle: "Calling, Lead Management & Campaign Platform",
    description: "A calling and CRM platform for agricultural outreach. Enables teams to manage leads, run inbound and outbound campaigns, track call activity and allocate agents efficiently.",
    features: ["Lead Management", "Campaigns", "Call Tracking", "Agent Allocation", "Analytics & Reports", "CRM"],
    stack: ["React.js", "Material UI", "REST APIs", "Axios", "Socket.io"],
    reverse: true
  },
  {
    number: "03", title: "Analytics Vidhya", highlight: "CMS", url: "https://analyticsvidhya.com", subtitle: "Content Management System",
    description: "A custom CMS used to create, edit and publish website content. Helps manage blog posts, articles, events, courses and other content through a centralized editorial workflow.",
    features: ["Content Creation", "Blog Management", "Event Management", "Media Upload", "Content Editing"],
    stack: ["React.js", "Next.js", "Material UI", "REST APIs", "Figma"]
  }
];

const stats = [["1.9+", "Years Experience"], ["3", "Major Projects"], ["40+", "Custom Modules"], ["100%", "Frontend Focus"]];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <section className="hero page-wrap" id="about">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
          <div className="eyebrow">Frontend Developer</div>
          <h1>I’m Divyanshu Parmar.<br />I build <span>high-performance React & Next.js</span> web applications.</h1>
          <p>Frontend-focused MERN Stack Developer with 1.9+ years of experience crafting scalable CRMs, CMS, and AgriTech dashboards with modern web technologies.</p>
          <div className="hero-meta"><span><CalendarMonthRoundedIcon /> 1 Year 11 Months Experience</span><span><LocationOnRoundedIcon /> Indore / Ujjain, India</span></div>
          <div className="hero-actions"><Button className="gradient-button" component="a" href="/resume.pdf" download>↓ &nbsp; Download Resume</Button><Button className="outline-button" component="a" href="#contact">Contact Me <ArrowForwardRoundedIcon /></Button></div>
        </motion.div>
        <motion.div className="hero-aside" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}>
          <div className="code-card"><div className="code-dots"><i/><i/><i/></div><pre><span>const</span> dev = {"{"}{"\n"}  focus: <em>'Frontend Development'</em>,{"\n"}  tech: [<em>'React', 'Next.js', 'MUI'</em>],{"\n"}  build: <em>'Scalable Web Applications'</em>,{"\n"}  passion: <em>'Problem Solving'</em>,{"\n"}  learning: <em>'Always'</em>,{"\n"}{"}"}</pre></div>
          <div className="tech-heading">Tech Stack</div><div className="hero-tech">{["React.js", "Next.js", "Material UI", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS Amplify (basic)", "REST APIs", "Framer Motion"].map((x) => <span key={x}>{x}</span>)}</div>
          <div className="stats-grid">{stats.map(([n, label]) => <div className="stat-card" key={label}><b>{n}</b><span>{label}</span></div>)}</div>
        </motion.div>
      </section>

      <section id="projects" className="projects page-wrap">
        {projects.map((project) => <ProjectCard key={project.number} {...project}>
          {project.number === "01" ? <FarmTracPreview /> : project.number === "02" ? <ConnectPreview /> : <CmsPreview />}
        </ProjectCard>)}
      </section>

      <div className="page-wrap"><CareerSection /><SkillsSection /></div>

      <footer className="footer page-wrap" id="contact">
        <div><div className="eyebrow">Let's connect</div><h2>Let’s build something great together!</h2><p>I’m open to new opportunities, collaborations and interesting projects.</p></div>
        <a href="mailto:divyanshuparmar00@gmail.com" className="contact-link"><MailOutlineRoundedIcon /><span><b>divyanshuparmar00@gmail.com</b><small>Drop me an email</small></span></a>
        <a href="tel:+917049567526" className="contact-link"><PhoneRoundedIcon /><span><b>+91 7049567526</b><small>Let’s discuss</small></span></a>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/divyanshu-parmar-944088281/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn ↗</a>
          <a href="https://github.com/Divyanshu4321" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub ↗</a>
        </div>
        <Button className="gradient-button" component="a" href="mailto:divyanshuparmar00@gmail.com">Get In Touch <ArrowForwardRoundedIcon /></Button>
      </footer>
    </main>
  );
}
