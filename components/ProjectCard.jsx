 "use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function ProjectCard({ number, title, url, subtitle, description, features, stack, href, children, reverse = false, highlight }) {
  return (
    <motion.article
      className={`project-card ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="project-copy">
        <div className="project-kicker"><span className="project-number">{number}</span><span>Featured Project</span></div>
        <h3>{title} {highlight && <em>{highlight}</em>}</h3>
        <a className="project-url" href={url} target="_blank" rel="noreferrer">{url.replace(/^https?:\/\//, "")} <ArrowOutwardRoundedIcon fontSize="inherit" /></a>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <div className="feature-chips">{features.map((feature) => <Chip key={feature} label={feature} size="small" variant="outlined" />)}</div>
        <div className="project-stack">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">
          <Button className="gradient-button" component="a" href={url} target="_blank" rel="noreferrer" endIcon={<ArrowOutwardRoundedIcon />}>View Live Project</Button>
          <Button className="outline-button" component="a" href={href || url} target="_blank" rel="noreferrer" endIcon={<ArrowForwardRoundedIcon />}>Project Details</Button>
        </div>
      </div>
      <div className="project-visual">{children}</div>
    </motion.article>
  );
}
