import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiApple, DiChrome } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
