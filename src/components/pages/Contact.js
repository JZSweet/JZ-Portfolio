import React, { Component } from "react";
import { FaLinkedin, FaGithub, FaMailBulk, FaFileDownload } from "react-icons/fa";
import { Figure, Container, Row, Col, ListGroup, } from "react-bootstrap";
import Resume from "./resume/JiaqianZhao.pdf";
import JZc from "./img/jz3.jpg";
import Appa from "./img/APPA.png";

class Contact extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                src={JZc}
              />
            </Figure>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a href="https://www.linkedin.com/in/jiaqian-zhao-2502781ba/" rel="noreferrer" target="_blank"> <FaLinkedin size={30} /></a> Find me on LinkedIn
                 </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://github.com/JZSweet" rel="noreferrer" target="_blank"> <FaGithub size={30} /></a> Find me on GitHub
                </ListGroup.Item>
              <ListGroup.Item>
              <a href={Resume} download="JiaqianZhao"> <FaFileDownload size={30} /></a>  Resume Download
              </ListGroup.Item>
              <ListGroup.Item>
              < a href="mailto:workmailjz@gmail.com"> <FaMailBulk size={30} /></a>  E-mail me from here
              </ListGroup.Item>
            </ListGroup>
            <Figure>
              <Figure.Image
                src={Appa}
              />
            </Figure>
          </Col>
        </Row>
      </Container>
    )
  };
};

export default Contact;
