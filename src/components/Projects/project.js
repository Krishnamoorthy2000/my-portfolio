import React from "react";
import "./project.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import natureImage from "../../images/nature.jpg";
import portfolio from "../../images/portfolio.jpeg";
import social from "../../images/social media.jpeg"

export default function ProjectContent() {
  return (
    <div className="projects">
      <h3>My Projects</h3>

      <div className="d-flex flex-row flex-wrap justify-content-center ">
        <Card>
          <Card.Img variant="top" src={portfolio} />
          <Card.Body>
            <Card.Title>My Portfolio</Card.Title>
            <Card.Text>
              This project showcases my skills and experience as a developer,
              with a focus on creating an aesthetically pleasing and functional
              portfolio website.
            </Card.Text>
            <Row>
              <Col>
                <Button>
                  <a
                    href="https://krishnamoorthy-portfolio.netlify.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </Button>
              </Col>
              <Col>
                <Button>
                  <a
                    href="https://github.com/Krishnamoorthy2000/my-portfolio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Front End
                  </a>
                </Button>
              </Col>
              <Col>
                <Button>
                  <a
                    href="https://github.com/Krishnamoorthy2000/backend-portfolio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Back End
                  </a>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={social} />
          <Card.Body>
            <Card.Title>social media</Card.Title>
            <Card.Text>
            The social media management tool is a simple user interface project that includes features for user login, signup, and it is project of buffer clone.            </Card.Text>
            <Row>
              <Col>
                <Button> <a
                    href="https://social-media-webs.netlify.app"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a></Button>
              </Col>
              <Col>
                <Button> <a
                    href="https://github.com/Krishnamoorthy2000/Social-media-management-frontend"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Front End
                  </a></Button>
              </Col>
              <Col>
                <Button> <a
                    href="https://github.com/Krishnamoorthy2000/Social-media-management-backend"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Back End
                  </a></Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* <Card>
          <Card.Img variant="top" src={natureImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Row>
              <Col>
                <Button>Live Demo</Button>
              </Col>
              <Col>
                <Button>Front End</Button>
              </Col>
              <Col>
                <Button>Back End</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={natureImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Row>
              <Col>
                <Button>Live Demo</Button>
              </Col>
              <Col>
                <Button>Front End</Button>
              </Col>
              <Col>
                <Button>Back End</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={natureImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Row>
              <Col>
                <Button>Live Demo</Button>
              </Col>
              <Col>
                <Button>Front End</Button>
              </Col>
              <Col>
                <Button>Back End</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
}
