import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Text from "./text";
import "./home.css";


export default function HomeContent () {
  function openGitHub() {
    var username = "Krishnamoorthy2000"; 
    var url = "https://github.com/" + username;
    window.open(url, '_blank');
  }
  function openLinkedIn() {
    var username = "krishna-moorthy-544937271"; 
    var url = "https://www.linkedin.com/in/" + username;
    window.open(url, '_blank');
  }

  function composeEmail() {
    var recipient = "krishnamalathi2000@gmail.com"; 
    var subject = "Hello!"; 
    var body = "Hi, how are you?"; 
    var url = "https://mail.google.com/mail/?view=cm&to=" + recipient + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(url);
  }
  

  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col >
            <h1 className="headtext">
              HELLO <span className="wave">👋 </span>  I'm KRISHNA MOORTHY              
            </h1>
            
            <h4>Thank you for visiting my portfolio! If you'd like to get in touch, please click on the Mail or WhatsApp icon and send me a message. I'll get back to you as soon as possible. Looking forward to hearing from you!</h4>
            <Text />
            <div className="social-media-buttons">
              <button className="social-media-button github" onClick={openGitHub}>
                <AiFillGithub className="icon-github" />
              </button>
              <button className="social-media-button linkedin" onClick={openLinkedIn}>
                <AiFillLinkedin className="icon-linkedin" />
              </button>
              <button className="social-media-button mail" onClick={composeEmail}>
                <GrMail className="icon-mail" />
              </button>
             
            </div>
          </Col>
          
          <Col className="d-flex justify-content-center">
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

