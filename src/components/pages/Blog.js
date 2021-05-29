import React, { Component } from "react";
import { FaCameraRetro, FaHandHoldingHeart } from "react-icons/fa";
import { Carousel, Container, Row, Col, ListGroup } from "react-bootstrap";
import sky1 from "./img/1.jpg";
import sky2 from "./img/2.jpg";
import sky3 from "./img/3.JPG";

class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item> <FaHandHoldingHeart size={16}/>  Here are some fragments of my works and life outside of coding.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item> <FaCameraRetro size={16}/> Photo credit: JZ</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sky1}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sky2}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sky3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default Blog;
