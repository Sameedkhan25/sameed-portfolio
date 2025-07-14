import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Muhammad Sameed Khan</span>, a passionate Full-Stack Developer 
            from <span className="purple">Islamabad, Pakistan</span>.
            <br />
            <br />
            Currently working as a Full-Stack Web Developer at <span className="purple">MonetizeMore</span>, 
            I focus on developing efficient algorithms for ad-tech platforms and working with remote teams 
            across different time zones to deliver high-quality solutions.
            <br />
            <br />
            I'm also working on exciting side projects, including an <span className="purple">AI Interviewer </span> 
            that helps conduct interviews and provides intelligent feedback based on candidate performance using AI.
            <br />
            <br />
            When I'm not coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and frameworks
            </li>

            <li className="about-activity">
              <ImPointRight /> Watching tech conferences and tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing different cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
