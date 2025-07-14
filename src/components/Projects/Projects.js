import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

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
      <Container>
        <h1 className="project-heading">
          Work Experience <strong className="purple">Timeline </strong>
        </h1>
        <Timeline/>
        <h2 className="project-heading">
          Projects 
        </h2>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
          <a style={{textDecoration:"none"}}href="https://www.monetizemore.com/solutions/pubguru/">
            <ProjectCard
              imgPath={HeaderBidding}
              isBlog={false}
              title="Pubguru (Header bidding and reporting platform)"
              techUsed={['React','Next.js','Javascript','prebidjs','kibana' ]}
              description="Pubguru is a header bidding and reporting platform for publishers. Built with React and Next.js for optimal performance. It is a web application that allows publishers to manage their campaigns and report on their performance. I am working mostly on the header bidding side, making our algorithm more efficient and adding new features to the application that are helpful to publishers."
              link="https://www.monetizemore.com/solutions/pubguru/"
            />
            </a>
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Go}
              isBlog={false}
              title="Go (cloud based EHR platform)"
              description="Worked as a React Engineer on a GO project. Involved in the development of delivering the next generation of healthcare EHR and practice management software. Work alongside product team to comprehend or implement new features, and improve an existing product responsibly for the front-end side of data-intensive application Carecloud GO handling millions of medical records, and have contributed to understanding product requirements and delivering features efficiently."
              techUsed={['React', 'Typescript', 'firebase', 'redux', 'graphql', 'context-api', 'storybook', 'css', 'styled components']}
              isLink={false}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={iconnect}
              isBlog={false}
              title="iConnect (employee engagement platform)"
              description="Worked on iconnect a cross platform employee engagement communication web app in partnership with Interloop. Worked on the admin portal to create content for the mobile application. Worked in agile development process. Worked on many libraries and tools grapejs, mdb react calendar plugin, surveyjs"
              techUsed={['React', 'redux', 'Rest api', 'grapeJs', 'surveyJs', 'mdbReact']}
              isLink={false}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Breeze}
              isBlog={false}
              title="Breeze (appointment management (patient + practice portal))"
              description="worked on cloud based cross platform appointment application for patients and practices. worked on the web patient side web application. participate in sprint planning for development of new features. Responsible for building and maintaining both frontend and backend of the application."
              techUsed={['React', 'Typescript', 'redux', 'graphql', 'context-api', 'aws-s3']}
              isLink={false}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Klinker}
              isBlog={false}
              title="Klinker (concrete order / delivery platform)"
              description="Concrete delivery service app with multiple roles and interfaces like admin, customer, suppliers. Created mockups in adobeXD. Webapp on reactjs and firebase for backend"
              techUsed={['React', 'redux', 'context-api', 'Rest api', 'material ui', 'firebase']}
              isLink={false}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={careerdev}
              isBlog={false}
              title="CareerDev (job/courses/funding search platform)"
              description="Job searching platform for employers and job seekers built with React and Next.js. The web app fetches recent jobs in the UK from different APIs and displays them in a clean and easy to use UI. The app also provides information regarding courses and funding opportunities with server-side rendering for better SEO."
              techUsed={['React', 'Next.js', 'context-api', 'material ui', 'Rest api']}
              isLink={false}
            />
          </Col>
          
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social App (social media platform)"
              description="Social media app that has all the latest features like posting, liking, commenting, sharing, and more. The app is built on react native and uses a rest api to fetch data from the server."
              techUsed={['React Native', 'context-api', 'redux', 'Rest api']}
              isLink={false}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={libere}
              isBlog={false}
              title="Libere (bottle refill green app)"
              description="bottle refilling mobile app that allows user to refill bottles from specific locations and based on the loyalty points they will be rewarded. the app basically focus on green bottle refill and to avoid the use of plastic bottles."
              techUsed={['React Native', 'context-api', 'redux', 'Rest api', 'firebase']}
              isLink={false}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
