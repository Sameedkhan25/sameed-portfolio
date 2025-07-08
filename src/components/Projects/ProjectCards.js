import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function ProjectCards({imgPath, isBlog, title, techUsed, description, link, isLink=true, githubLink}) {
  return (
    <div className="modern-project-card">
      <div className="project-image-container">
        <Card.Img variant="top" src={imgPath} alt="project" className="project-image" />
        <div className="project-overlay">
          <div className="project-actions">
            {isLink && (
              <Button variant="primary" href={link} target="_blank" className="modern-btn">
                <BiLinkExternal /> View Project
              </Button>
            )}
            {githubLink && (
              <Button variant="outline-primary" href={githubLink} target="_blank" className="modern-btn-outline">
                <FaGithub /> Code
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="tech-stack">
          {techUsed.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
