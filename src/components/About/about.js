import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./about.css";

export default function AboutContent() {
  return (
    <div className="about">
      <Container fluid="true" className="aboutcontainer">
        <Row>
          <Col>
          <h3>About Myself</h3>
            <p>
              Hello! My name is Krishna Moorthy, and I'm a Full Stack Web
              Development . I may not have any professional experience
              just yet, but I have a passion for web development and a strong
              desire to learn more. I'm currently studying and honing my skills
              in full stack web development, and I'm excited to start my career
              in this field.
            </p>
            <p>
              My love for web development began with a fascination for the power
              of the internet and the ability to create digital solutions that
              can make a difference in people's lives. I'm passionate about
              developing web applications that deliver intuitive user
              experiences and high performance. I enjoy working with both
              front-end and back-end technologies, and I'm committed to writing
              clean, maintainable code.
            </p>
            <p>
              In my free time, I enjoy working on personal projects, exploring
              new technologies, and engaging in fitness activities. I believe
              that a healthy work-life balance is essential to being successful
              in any field.
            </p>
            <p>
              I'm eager to start my career in full stack web development and am
              willing to work hard to gain the necessary experience and skills.
              I'm a fast learner, a problem solver, and am eager to take on new
              challenges. I'm confident that with my passion, dedication, and
              willingness to learn, I'll be able to contribute to any team and
              make a meaningful impact in the field of web development.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
