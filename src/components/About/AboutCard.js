import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I am <span className="purple">Sameed Khan </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />I am frontend developer with hands on expereince on backend technologies as well,
            <br />
            <br />
            apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music and soundtracks
            </li>
            <li className="about-activity">
              <ImPointRight /> exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
