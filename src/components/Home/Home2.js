import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import dp from '../../Assets/pic.JPG';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Myself </span> 
            </h1>
            <p className="home-about-body">
            I have a huge passion for learning new things work in a competitive environment. I have expertise in working with remote jobs and can work with flexible hours with good efficiency
              <br />
              <br />I am a Full-Stack Developer with most of my experience in 
              <i>
                <b className="purple">  Javascript ,React, Node, Express, MongoDB (MERN) </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
                {/* also in areas related to{" "} */}
             
              </i>
              <br />
              <br />
              I have worked with several Technologies such as:
               
              <i>
                <b className="purple">
                  {" "}
                  html, css, sass, bootstrap , jquery
                  <br />
                  nextjs, typescript , nodejs , express
                  <br />
                  strapi, graphCMS
                  <br />
                  react native 
                  <br/>
                  materialUi, tailwind , styled components, chakra ui
                  <br/>
                  DB: mongoDB, mysql, firebase firestore & firebase realtiem DB
                  <br/>
                  DEVOPS: git, github, bitbucket, jira, aws EC2, aws S3, docker, jenkins
                </b>
              </i>
           
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <img 
              style={{width: '50%', height: '50%' , borderRadius: '20%'}}
              src={dp} className="img-fluid" alt="avatar" /> 
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sameed-khan-717a8b109/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://github.com/Sameedkhan25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
           
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
