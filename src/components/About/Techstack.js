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
  DiNginx,
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
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiSwagger,
  SiTerraform,
  SiJira,
  SiSlack,
  SiInsomnia,
  SiKibana,
} from "react-icons/si";

function Techstack() {
  const frontendTechs = [
    { icon: <DiReact />, name: "React.js", color: "#61DAFB" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiSass />, name: "Sass", color: "#CC6699" },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
  ];

  const backendTechs = [
    { icon: <DiNodejs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <DiPython />, name: "Python", color: "#3776AB" },
    { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
  ];

  const databaseTechs = [
    { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <DiAws />, name: "AWS", color: "#FF9900" },
  ];

  const toolsTechs = [
    { icon: <DiGit />, name: "Git", color: "#F05032" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiJest />, name: "Jest", color: "#C21325" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    { icon: <SiWebpack />, name: "Webpack", color: "#8DD6F9" },
    { icon: <SiEslint />, name: "ESLint", color: "#4B32C3" },
    { icon: <SiPrettier />, name: "Prettier", color: "#F7B93E" },
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiNetlify />, name: "Netlify", color: "#00C7B7" },
    { icon: <SiSwagger />, name: "Swagger", color: "#85EA2D" },
    { icon: <DiNginx />, name: "Nginx", color: "#009639" },
    { icon: <SiTerraform />, name: "Terraform", color: "#7B42BC" },
    { icon: <SiJira />, name: "Jira", color: "#0052CC" },
    { icon: <SiSlack />, name: "Slack", color: "#4A154B" },
    { icon: <SiInsomnia />, name: "Insomnia", color: "#4000BF" },
    { icon: <SiKibana />, name: "Kibana", color: "#005571" },
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
      
      <TechSection 
        title="Development Tools" 
        subtitle="& Deployment" 
        techs={toolsTechs} 
      />
    </div>
  );
}

export default Techstack;
