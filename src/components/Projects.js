import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
//array
  const projects = [
    
    {
      title: "Chat App",
      description: "A real-time chat app enables users to exchange text messages,share photos, and engage in instant communication within a dynamic platform.",
      imgUrl: projImg1,
      link: "https://github.com/Nishmack/GroupChatAppcompleted"
    },
    {
      title: "Expense Tracker App",
      description: "Efficient expense tracker application for seamless finanacial management.",
      imgUrl: projImg2,
      link: "https://github.com/Nishmack/expense-tracker-app"
    },
    {
      title: "Personal Portfolio",
      description: "Website is a showcase of my skills, projects, and professional journey as a MERN stack developer.",
      imgUrl: projImg3,
    },
    {
      title: "Construction Company website",
      description: "comprehensive website developed for a construction company, designed to showcase their services, portfolio, and company information",
      imgUrl: projImg4,
      
    },
    {
      title: "IoT Based reat-time flood detection system",
      description: "Published in 2022 International Conference on Intelligent Innovations in Engineering and Technology (ICIIET)",
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            
                <h2>Projects</h2>
                <p>Following projects showcases my skills and experience through real-world examples of my work.Each project is briefly described with links to code repositories.
                  It reflects my ability to solve complex problems,work with different technologies and manage projects effectively.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Projects...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Projects...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </div>}
                </TrackVisibility>
             </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}