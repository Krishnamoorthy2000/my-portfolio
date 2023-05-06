import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ImHome, ImUserTie, ImBubbles, ImQuill, ImBooks } from "react-icons/im";
import "./navbar.css"; // import CSS file here

export default function NavbarContent() {


  return (
    <Navbar
      // expanded={expand}
      fixed="top"
      expand="md"
      className="navbar"
    >
      {" "}
      {/* add inline style to set background color */}
      <Container fluid className="container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto items align-self-*-center">
            <Nav.Link as={Link} to="/" className="nav-link">
              <ImHome className="navbar-icons" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="nav-link">
              <ImUserTie className="navbar-icons" />
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Skill" className="nav-link">
              <ImQuill className="navbar-icons" />
              Skill
            </Nav.Link>
            <Nav.Link as={Link} to="/Project" className="nav-link">
              <ImBooks className="navbar-icons" />
              Project
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="nav-link">
              <ImBubbles className="navbar-icons" />
              Contact
            </Nav.Link>
            <Button className="resume">
              <a
                href="https://drive.google.com/file/d/10jVn0t_fLBLx3XdDCvgbCqmwdM9SrS6x/view?usp=sharing"
                rel="noopener noreferrer" target="_blank"
                >
                  Resume
              </a>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
