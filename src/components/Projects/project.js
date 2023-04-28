import React from "react";
import "./project.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import natureImage from "../../images/nature.jpg";

export default function ProjectContent() {
  return (
    <div className="projects">
          <h3>My Projects</h3>


    <div className="d-flex flex-row flex-wrap justify-content-center ">

      <Card >
        <Card.Img variant="top" src={natureImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row>
            <Col>
              <Button >Live Demo</Button>
            </Col>
            <Col>
              <Button >Front End</Button>
            </Col>
            <Col>
              <Button >Back End</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card  >
        <Card.Img variant="top" src={natureImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row>
            <Col>
              <Button >Live Demo</Button>
            </Col>
            <Col>
              <Button >Front End</Button>
            </Col>
            <Col>
              <Button >Back End</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card   >
        <Card.Img variant="top" src={natureImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row>
            <Col>
              <Button >Live Demo</Button>
            </Col>
            <Col>
              <Button >Front End</Button>
            </Col>
            <Col>
              <Button >Back End</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card   >
        <Card.Img variant="top" src={natureImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row>
            <Col>
              <Button >Live Demo</Button>
            </Col>
            <Col>
              <Button >Front End</Button>
            </Col>
            <Col>
              <Button >Back End</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card   >
        <Card.Img variant="top" src={natureImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row>
            <Col>
              <Button >Live Demo</Button>
            </Col>
            <Col>
              <Button >Front End</Button>
            </Col>
            <Col>
              <Button >Back End</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
     
            
        
            
        
      
    </div>
    </div>
  );
}
