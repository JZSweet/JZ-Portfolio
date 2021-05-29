import React from "react";
import { Figure, Container, Row, Col } from 'react-bootstrap';
// import JZa from "./JZA.png"
// import JZb from "./JZB.png"
import JZa from "./img/jz1.png";
import JZb from "./img/jz2.png";

const btn ={backgroundColor: '#2B4141'};
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
      <div style = {styleObj}>Welcome to JZ's portfolio</div>
      </Row>
    {/* <Row className="justify-content-md-center">Here is somethings about me</Row> */}
    <Row>
      <Col>
        <Figure>
          <Figure.Image
            src={JZa}
          />
        </Figure>
      </Col>
      <Col>
      <Figure>
          <Figure.Image
            src={JZb}
          />
        </Figure>
      </Col>
    </Row>
  </Container>
);

export default About;
