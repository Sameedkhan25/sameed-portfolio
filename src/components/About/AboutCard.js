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
            I specialize in building scalable web applications using the <span className="purple">MERN stack</span> 
            and <span className="purple">Next.js</span> with over <span className="purple">3+ years of professional experience</span>. 
            Currently working as a Full-Stack Web Developer at <span className="purple">MonetizeMore</span>, where I've contributed to 
            increasing client revenue by <span className="purple">25-90%</span> through A/B testing platform improvements.
            <br />
            <br />
            My expertise includes developing responsive user interfaces with <span className="purple">React.js and Next.js</span>, 
            building robust APIs with <span className="purple">Node.js and Express.js</span>, and implementing 
            efficient algorithms for ad-tech platforms. I have experience working with remote teams across 
            different time zones and delivering high-quality solutions.
            <br />
            <br />
            When I'm not coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech conferences and tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing different cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building scalable solutions that make a real impact!"
          </p>
          <footer className="blockquote-footer">Muhammad Sameed Khan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
