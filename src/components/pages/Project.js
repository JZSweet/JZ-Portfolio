import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HW1 from "./img/HW1.png";
import HW2 from "./img/HW2.png";
import HW3 from "./img/HW3.png";
import GW1 from "./img/GW1.png";
import GW2 from "./img/GW2.png";
import GW3 from "./img/GW3.png";


class Project extends Component {
  render() {
    return (

      <Container>
        <Row>
          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={HW1} />
            <Card.Body>
              <Card.Title>React Employee Directory</Card.Title>
              <Card.Text>
                 Directory to all the non-sensitive employees information. Build with MERN. Host on Heroku.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/employee-directory" target="_blank">Checkout Repo</Card.Link>
              <Card.Link href="https://employee-directory-jz.herokuapp.com/" target="_blank">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={HW2} />
            <Card.Body>
              <Card.Title>Count Down Quiz</Card.Title>
              <Card.Text>
               Timed quiz on JavaScript fundamentals. My first project, not my best work but its especial to me.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/countdown-quiz" target="_blank">Checkout Repo</Card.Link>
              <Card.Link href="https://jzsweet.github.io/countdown-quiz/" target="_blank">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={HW3} />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
               A workout tracker i build (back end), connects to the MongoDB database. Host on Heroku.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/Fitness-Tracker" target="_blank">Checkout Repo</Card.Link>
              <Card.Link href="https://fitness-tracker-jz.herokuapp.com/?id=60628aaa5a725f00154fd6db" target="_blank">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>

        <Row>
          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={GW1} />
            <Card.Body>
              <Card.Title>Entertainment Guide</Card.Title>
              <Card.Text>
               An app to provide movies and TV shows information to users. My first group project. Used AJAX.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/entertainment-guide" target="_blank">Checkout Repo</Card.Link>
              <Card.Link href="https://kytaylor.github.io/project-1/" target="_blank">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={GW2} />
            <Card.Body>
              <Card.Title>Grocery list</Card.Title>
              <Card.Text>
               An app to keep track of your grocery. My second group project. Used orm to connect to SQL.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/Grocery-list" target="_blank">Checkout Repo</Card.Link>
              <Card.Link href="https://the-grocery-list.herokuapp.com/" target="_blank">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>
 
          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={GW3} />
            <Card.Body>
              <Card.Title>Social ButterFly</Card.Title>
              <Card.Text>
                A messenger app for social butterflies. My third group project. Used Firebase live DB.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/messenger-app" target="_blank">Checkout Repo</Card.Link>
              <Card.Link href="https://messenger-app-rsl.herokuapp.com/" target="_blank">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>

    );
  };
};


export default Project;
