import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./contact.css";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    // send the form data to the server
    console.log("Form submitted!");
  };


  return (
    <div className="contact ">
    <Container>
      <Row>
        <Col md={{ span: 6 }}>
          <h2 >Contact</h2>
          <Form>
            <Form.Group controlId="formBasicName ">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button className="sendbutton" type="button" onClick={handleSend}>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactContent;
