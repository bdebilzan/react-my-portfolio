import { useState } from "react";
import "../styles/Skills.css";
import {
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaPhp,
  FaGit,
  FaGithub,
  FaAws,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJest,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiJenkins,
} from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "Java", icon: <FaJava /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Node.js", icon: <FaNode /> },
  ];

  return (
    <div className="card skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={`${index}-${hoveredSkill}`}
            className="skill"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
            animate={hoveredSkill === index ? { rotateY: 360 } : { rotateY: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
