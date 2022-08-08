import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({imgPath, isBlog, title, techUsed, description, link,isLink=true}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
         <b className="purple">Technology Used: </b> 
         {techUsed.map(tech => <span
         style={{ background: "purple",padding: "5px", borderRadius: "30px", margin:"3px"}}
         >{tech}</span> )}
        </Card.Text>
       { isLink && <Button variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {isBlog ? "View Blog" : "View Project"}
        </Button>}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
