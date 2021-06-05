import React from "react";
import { Figure, Container, Row, Col } from 'react-bootstrap';
import JZ from "./img/jz.png";

const btn = { backgroundColor: '#2B4141' };
const styleObj = {
  fontSize: 20,
  color: "#E0E1F5",
  display: "inline-flex",
  position: "relative",
  paddingTop: "20px",
}

const About = () => (
  <Container style={btn}>
    <Row className="justify-content-md-center" >
      <div style={styleObj}>Welcome to JZ's portfolio</div>
    </Row>
    <Row>
      <Col>
        <Figure>
          <Figure.Image
            src={JZ}
          />
        </Figure>
      </Col>
    </Row>
  </Container>
);

export default About;
