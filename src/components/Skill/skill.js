import React from "react";
import "./skill.css";
import { Container, ProgressBar, Row, Col } from "react-bootstrap";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNetlify,
  SiRender,
} from "react-icons/si";

export default function SkillContent() {
  return (
    <div className="Skill">
      
      <Container className="d-flex flex-column">
        <Row><Col style={{textAlign:"center"}}><h1>Skills and Technologies</h1></Col></Row>
        <Row className="justify-content-center align-items-center">
          <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <FaHtml5 className="html-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">HTML5</span>
          </Col>
          <Col md={8} sm={8} lg={6} xl={6}>
            <ProgressBar variant="primary" max={100} min={0} striped now={80} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <FaCss3Alt className="css-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">CSS3</span>
          </Col>
          <Col md={8} sm={8} lg={6} xl={6}>
            <ProgressBar variant="primary" max={100} min={0} striped now={80} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <FaJsSquare className="js-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">JavaScript</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={70} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <FaBootstrap className="bootstrap-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">Bootstrap</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={80} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <SiReact className="react-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">React.js</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={60} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <SiMysql className="mysql-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">MySQL</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={40} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <SiMongodb className="mongodb-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">MongoDB</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={60} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <SiExpress className="express-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">Express.js</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={60} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <FaNodeJs className="node-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">Node.js</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={60} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <FaGithubSquare className="github-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">GitHub</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={80} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <SiNetlify className="netlify-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">Netlify</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={70} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
        <Col md={2} sm={2} lg={1} xl={1}>
            <span className="skills-icon">
              <SiRender className="render-icon icons" />
            </span>
          </Col>
          <Col md={2} sm={2} lg={2} xl={2}>
            <span className="skills-name">Render</span>
          </Col>
           <Col md={8} sm={8} lg={6} xl={6}>

            <ProgressBar variant="primary" max={100} min={0} striped now={60} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
