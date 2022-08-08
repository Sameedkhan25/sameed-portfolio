import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import HeaderBidding from "../../Assets/Projects/HeaderBidding.png"
import Go from "../../Assets/Projects/go.png"
import Breeze from "../../Assets/Projects/breeze.png"
import iconnect from "../../Assets/Projects/iconnect.png"
import social from "../../Assets/Projects/social.png"
import Klinker from "../../Assets/Projects/klinker.png"
import libere from "../../Assets/Projects/libere.png"
import careerdev from "../../Assets/Projects/careerdev.png"


import Timeline from "./Timeline/Timeline";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work Experience <strong className="purple">Timeline </strong>
        </h1>
        <Timeline/>
        <h2 className="project-heading">
          Projects 
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       

        
          <Col md={6} className="project-card">
          <a style={{textDecoration:"none"}}href="https://www.monetizemore.com/solutions/pubguru/">
            <ProjectCard
              imgPath={HeaderBidding}
              isBlog={false}
              title="Pubguru (Header bidding and reporting platform)"
              techUsed={['React','Javascript','prebidjs','kibana' ]}
              description="Pubguru is a header bidding and reporting platform for publishers. It is a web application that allows publishers to manage their campaigns and report on their performance. I am working mostly on the header bidding side, making our algorithm more efficient and adding new features to the application that are helful to publishers. "
              link="https://www.monetizemore.com/solutions/pubguru/"
            />
            </a>
          </Col>
          <Col md={6} className="project-card">
          <a style={{textDecoration:"none"}}href="https://www.carecloud.com/go/features/">
            <ProjectCard
              imgPath={Go}
              isBlog={false}
              title="Go (cloud based EHR platform)"
              techUsed={['React','Typescript','firebase','redux','graphql','context-api','storybook','css', 'styled components' ]}
              description="Worked as a React Engineer on a GO project. Involved in the development of delivering the next generation of healthcare EHR and practice management software. Work alongside product team to comprehend or implement new features, and improve an existing product.responsible for the front-end side of data-intensive application Carecloud GO handling millions of medical records, and have contributed to understanding product requirements and delivering features efficiently.
              Technology Used:"
              link="https://www.carecloud.com/go/features/"
            />
            </a>
          </Col>
          <Col md={6} className="project-card">
          <a style={{textDecoration:"none"}}href="https://www.carecloud.com/breeze/">
            <ProjectCard
              imgPath={Breeze}
              isBlog={false}
              techUsed={['React','Typescript','redux','graphql','context-api','aws-s3' ]}

              title="Breeze (appointment management (patient + practice portal))"
              description='worked on cloud based cross platform appointment application for patients and practices. worked on the web patient side web application. participate in sprint planning for development of new features. Responsible for building and mantaining both frontend and backend of the application.'
              link="https://www.carecloud.com/breeze/"
            />
             </a>
          </Col>
          <Col md={6} className="project-card">
          <a style={{textDecoration:"none"}}href="https://apps.apple.com/ky/app/iconnect/id1506599056">
            <ProjectCard
              imgPath={iconnect}
              isBlog={false}
              techUsed={['React','redux','Rest api' ,'grapeJs','surveyJs','mdbReact' ]}
              title="iConnect (employee engagement platform)"
              description='Worked on Iconnect a cross platform employee engagement communication web app in partnership with Interloop.Worked on the admin portal to create content for the mobile application. Worked in agile development process Worked on many libraries and tools grapejs, mdb react calendar plugin, surveyjs'
              link="https://apps.apple.com/ky/app/iconnect/id1506599056"
            />
             </a>
          </Col>
          <Col md={6} className="project-card">
          <a style={{textDecoration:"none"}}href="https://klinker-7c3d3.web.app/">
            <ProjectCard
              imgPath={Klinker}
              isBlog={false}
              techUsed={['React','redux','context-api','Rest api' ,'material ui', 'firebase' ]}
              title="Klinker (concrete order / delivery platform)"
              description='Concrete delivery service app with multiple roles and interfaces like admin, customer , suppliers Created mockups in adobeXD. Webapp on reactjs and firebase for backend'
              link="https://klinker-7c3d3.web.app/"
            />
             </a>
          </Col>
          
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={careerdev}
              isBlog={false}
              isLink={false}
              techUsed={['React','context-api','material ui', 'Rest api' ]}
              title="CareerDev (job/courses/funding search platform)"
              description='Job searching platform for employers and job seekers. the web app fetches recent jobs in the UK from different apis and displays them in a clean and easy to use UI. the app also provides information regarding courses and funding opportunities'
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              isLink={false}
              techUsed={['React Native','context-api','redux', 'Rest api' ]}
              title="Social App (social media platform)"
              description='Social media app that has all the latest features like posting, liking, commenting, sharing, and more. The app is built on react native and uses a rest api to fetch data from the server.'
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={libere}
              isLink={false}
              isBlog={false}
              techUsed={['React Native','context-api','redux', 'Rest api', 'firebase' ]}
              title="Libere (bottle refill green app)"
              description='bottle refilling mobile app that allows user to refill bottles from specific locations and based on the loyalty points they will be rewarded. the app basically focus on green bottle refill and to avoid the use of plastic bottles.'
            />
          </Col>

        </Row>
        <h6 style={{color:"white"}}>
        I have worked on more than <strong className="purple"> 50 projects </strong> projects.
       related to web, mobile , machine learning and desktop development for my clients and different companies.
          </h6>
      </Container>
    </Container>
  );
}

export default Projects;
