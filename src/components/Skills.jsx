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

function Skills() {
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
          <div key={index} className="skill">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
