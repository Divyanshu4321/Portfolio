 "use client";

import { motion } from "framer-motion";
import { Chip } from "@mui/material";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SectionHeading from "./SectionHeading";

export function CareerSection() {
  return (
    <section className="career-grid" id="experience">
      <motion.article className="info-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="info-heading"><WorkOutlineRoundedIcon /><h3>Work Experience</h3></div>
        <div className="timeline-item"><span className="timeline-dot" /><b>Innovation Stack Technology Pvt. Ltd.</b><small>Indore, Madhya Pradesh</small><strong>Frontend React / Next.js Developer</strong><p>08 Sep 2024 – 08 Jul 2026</p><ul><li>Worked on FarmTrac CRM and FarmTrac Connect.</li><li>Built reusable UI components, dashboards and charts.</li><li>Integrated REST APIs and optimized data-heavy interfaces.</li><li>Used AI-assisted tools to speed up development and iteration.</li></ul></div>
      </motion.article>
      <motion.article className="info-card" id="education" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="info-heading"><SchoolRoundedIcon /><h3>Education</h3></div>
        <div className="education-item"><b>Master of Computer Application (MCA)</b><span className="tag tag-green">Pursuing</span><p>RGPV · Through MIT College, Ujjain</p><small>Expected completion: 2027</small></div>
        <div className="education-item"><b>Bachelor of Commerce with Computer Application</b><span className="tag">Completed</span><p>Ujjain, Madhya Pradesh</p></div>
      </motion.article>
      <motion.article className="info-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="info-heading"><WorkspacePremiumRoundedIcon /><h3>Certification</h3></div>
        <div className="timeline-item"><span className="timeline-dot purple" /><b>MERN Stack Development</b><p>Mantra Institute, Ujjain</p><span className="tag tag-purple">In progress</span><ul><li>Practical full-stack learning.</li><li>React, Node.js, Express and MongoDB.</li><li>Building project-based applications.</li></ul></div>
      </motion.article>
    </section>
  );
}

const skillGroups = [
  { title: "Frontend", skills: ["React.js", "Next.js", "Material UI", "Redux Toolkit", "JavaScript", "Bootstrap", "HTML5", "CSS3"] },
  { title: "APIs & Data", skills: ["REST APIs", "Axios", "Google APIs", "Socket.io", "Charts / Recharts"] },
  { title: "Backend basics", skills: ["Node.js", "Express.js", "MongoDB"] },
  { title: "Tools & workflow", skills: ["AWS Amplify (basic)", "Framer Motion", "Figma", "Git / GitHub", "AI tools (ChatGPT, Cursor)"] }
];

export function SkillsSection() {
return (
  <section id="skills" className="skills-section">
    <div className="skills-title">
      <div className="info-heading">
        <AutoAwesomeRoundedIcon />
        <h3>Skills & Technologies</h3>
      </div>
      <span>AI-assisted development for faster implementation</span>
    </div>

    <div className="skill-groups">
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <b>{group.title}</b>

          <div>
            {group.skills.map((skill) => (
              <Chip key={skill} label={skill} size="small" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
}
