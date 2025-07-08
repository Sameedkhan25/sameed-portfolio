import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm <strong className="main-name">MUHAMMAD SAMEED KHAN</strong>
              </h1>

              <h2 style={{ 
                fontSize: "1.8em", 
                paddingLeft: "50px", 
                paddingTop: "20px",
                color: "#c770f0",
                fontWeight: "600"
              }}>
                Full-Stack Developer | MERN + Next.js Expert
              </h2>

              <p style={{ 
                fontSize: "1.2em", 
                paddingLeft: "50px", 
                paddingTop: "15px",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6"
              }}>
                3+ years of experience building scalable web applications.
                <br />
                Specialized in React, Next.js, Node.js, and modern web technologies.
              </p>

              <div style={{ padding: "30px 50px", textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
