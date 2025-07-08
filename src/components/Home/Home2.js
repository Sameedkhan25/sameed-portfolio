import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dp from '../../Assets/pic.JPG';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <div className="about-content-modern">
              <h1 className="about-heading-modern">
                <span className="gradient-text">Why Choose Me?</span> 
              </h1>
              
              <div className="value-proposition">
                <p className="intro-text">
                  I'm passionate about creating <span className="highlight">scalable web solutions</span> that drive business growth.
                  With expertise in modern technologies and a proven track record of delivering results.
                </p>
                
                <div className="achievements-grid">
                  <div className="achievement-card">
                    <div className="achievement-icon">🚀</div>
                    <div className="achievement-content">
                      <h4>Revenue Growth</h4>
                      <p>Increased client revenue by <span className="highlight">25-90%</span> through A/B testing optimizations</p>
                    </div>
                  </div>
                  
                  <div className="achievement-card">
                    <div className="achievement-icon">👥</div>
                    <div className="achievement-content">
                      <h4>User Impact</h4>
                      <p>Built responsive applications serving <span className="highlight">thousands of users</span></p>
                    </div>
                  </div>
                  
                  <div className="achievement-card">
                    <div className="achievement-icon">⚡</div>
                    <div className="achievement-content">
                      <h4>Efficiency</h4>
                      <p>Developed reusable UI components improving <span className="highlight">development efficiency</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="expertise-section">
                  <h3 className="section-title">💻 Technical Expertise</h3>
                  <p className="expertise-text">
                    I specialize in <span className="highlight">MERN Stack Development</span> with proficiency in:
                  </p>
                  <div className="tech-list">
                    <span className="tech-item">React.js</span>
                    <span className="tech-item">Next.js</span>
                    <span className="tech-item">Node.js</span>
                    <span className="tech-item">Express.js</span>
                    <span className="tech-item">MongoDB</span>
                    <span className="tech-item">TypeScript</span>
                    <span className="tech-item">GraphQL</span>
                  </div>
                </div>
                
                <div className="what-i-bring">
                  <h3 className="section-title">🎯 What I Bring</h3>
                  <div className="benefits-list">
                    <div className="benefit-item">
                      <span className="benefit-icon">🌍</span>
                      <span><span className="highlight">Remote work expertise</span> with flexible hours</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🤝</span>
                      <span><span className="highlight">Cross-functional collaboration</span> with product teams</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">⚡</span>
                      <span><span className="highlight">Agile development</span> and sprint planning experience</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🔧</span>
                      <span><span className="highlight">Performance optimization</span> and scalable architecture</span>
                    </div>
                  </div>
                </div>
                
                <div className="cta-section">
                  <p className="cta-text">Ready to build something amazing together? Let's connect!</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={4} className="myAvtar">
            <div className="avatar-container">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                gyroscope={true}
              >
                <div className="avatar-wrapper">
                  <img src={dp} className="avatar-image" alt="Muhammad Sameed Khan" />
                  <div className="avatar-glow"></div>
                </div>
              </Tilt>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <div className="social-section">
              <h2 className="social-heading">Let's Connect</h2>
              <p className="social-text">
                Feel free to <span className="highlight">connect</span> with me on social platforms
              </p>
              <div className="social-links-container">
                <a
                  href="https://github.com/msameedkhan25"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/msameedkhan25/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
