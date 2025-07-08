import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiApple, DiChrome } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGit,
  SiGithub,
  SiJira,
  SiSlack,
  SiDocker,
  SiJest,
} from "react-icons/si";

function Toolstack() {
  const devTools = [
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiGithub />, name: "GitHub", color: "#181717" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiJest />, name: "Jest", color: "#C21325" },
  ];

  const deploymentTools = [
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiHeroku />, name: "Heroku", color: "#430098" },
    { icon: <SiJira />, name: "Jira", color: "#0052CC" },
    { icon: <SiSlack />, name: "Slack", color: "#4A154B" },
    { icon: <DiApple />, name: "macOS", color: "#000000" },
    { icon: <SiLinux />, name: "Linux", color: "#FCC624" },
  ];

  const ToolCard = ({ tool }) => (
    <div className="tech-card">
      <div className="tech-icon" style={{ color: tool.color }}>
        {tool.icon}
      </div>
      <span className="tech-name">{tool.name}</span>
    </div>
  );

  const ToolSection = ({ title, tools, subtitle }) => (
    <div className="tech-section">
      <h3 className="tech-section-title">
        <strong className="purple">{title}</strong> {subtitle}
      </h3>
      <div className="tech-grid">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="techstack-container">
      <ToolSection 
        title="Development" 
        subtitle="Tools" 
        tools={devTools} 
      />
      
      <ToolSection 
        title="Deployment" 
        subtitle="& Collaboration" 
        tools={deploymentTools} 
      />
    </div>
  );
}

export default Toolstack;
