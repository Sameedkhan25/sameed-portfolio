import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiAws,
  DiBitbucket,
} from "react-icons/di";
import {
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiJest,
} from "react-icons/si";

function Techstack() {
  const frontendTechs = [
    { icon: <DiReact />, name: "React.js", color: "#61DAFB" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
  ];

  const backendTechs = [
    { icon: <DiNodejs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
    { icon: <DiPython />, name: "Python", color: "#3776AB" },
  ];

  const databaseTechs = [
    { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <DiAws />, name: "AWS", color: "#FF9900" },
  ];

  const TechCard = ({ tech }) => (
    <div className="tech-card">
      <div className="tech-icon" style={{ color: tech.color }}>
        {tech.icon}
      </div>
      <span className="tech-name">{tech.name}</span>
    </div>
  );

  const TechSection = ({ title, techs, subtitle }) => (
    <div className="tech-section">
      <h3 className="tech-section-title">
        <strong className="purple">{title}</strong> {subtitle}
      </h3>
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="techstack-container">
      <TechSection 
        title="Frontend" 
        subtitle="Technologies" 
        techs={frontendTechs} 
      />
      
      <TechSection 
        title="Backend" 
        subtitle="Technologies" 
        techs={backendTechs} 
      />
      
      <TechSection 
        title="Database" 
        subtitle="& Cloud" 
        techs={databaseTechs} 
      />
    </div>
  );
}

export default Techstack;
