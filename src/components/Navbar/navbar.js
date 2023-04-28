import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ImHome ,ImUserTie,ImBubbles,ImQuill,ImBooks} from 'react-icons/im';
import './navbar.css'; // import CSS file here

export default function NavbarContent() {
  function downloadResume() {
    var resumeUrl = "../../krishna_moorthy_resume.pdf"; // Replace with the URL of your resume file
    var fileName = "krishna moorthy resume.pdf"; // Replace with the file name you want to give your resume file
    var link = document.createElement("a");
    link.href = resumeUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <Navbar

    // expanded={expand}
    fixed="top"
    expand="md"
     className="navbar" 
     > {/* add inline style to set background color */}
      <Container fluid className="container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto items align-self-*-center">
            <Nav.Link as={Link} to="/" className="nav-link">
              <ImHome className="navbar-icons" />Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="nav-link">
              <ImUserTie className="navbar-icons" />About
            </Nav.Link>
            <Nav.Link as={Link} to="/Skill" className="nav-link">
              <ImQuill className="navbar-icons" />Skill
            </Nav.Link>
            <Nav.Link as={Link} to="/Project" className="nav-link">
              <ImBooks className="navbar-icons" />Project
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="nav-link">
              <ImBubbles className="navbar-icons" />Contact
            </Nav.Link>
            <Button  className='resume' onClick={downloadResume}>resume</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
