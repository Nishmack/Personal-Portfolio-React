// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter1.svg";
import colorSharp from "../assets/img/color-sharp.png"; 

export const Skills = ()=>{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

return(
  <section className="skill" id="skills">
    <Container>
      <Col>
      <Row>
        <div className="skill-bx">
          <h2>
            Skills
          </h2>
          <p>
          I have honed a diverse set of skills in both front-end and back-end development.
          My proficiency in various web technologies, coupled with my ability to quickly adapt and learn new tools, allows me to deliver high-quality, 
          responsive, and user-friendly web applications.
          </p>
          <Carousel responsive={responsive} infinite={true} className="skill-slider">
          <div className="item">
              <img src={meter1} alt="Image" />
              <h5>HTML</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>CSS</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>Javascript</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>ReactJs</h5>
            </div>
            <div className="item">
              <img src={meter2} alt="Image" />
              <h5>NodeJs</h5>
            </div>
            <div className="item">
              <img src={meter3} alt="Image" />
              <h5>ExpressJs</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>MongoDB</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>Bootstrap</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>Typescript</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Image" />
              <h5>MySQl</h5>
            </div>
          </Carousel>
        </div>

      </Row>
      
      </Col>
      </Container>
      <img className="background-image-left" src={colorSharp} />

  </section>
)

}