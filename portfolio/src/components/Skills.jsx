import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Skills = () => {
    return (
      <Container id="skills" className="section-container">
        <Row>
          <h2>Skills</h2>
        </Row>
        <Row className="justify-content-center">
          <hr className="subtitle-break" />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card className="skill-card">
              <Card.Body className="pt-2 px-2">
                <Card.Title>
                  <h5 className="card-title">Programming Languages</h5>
                </Card.Title>
                <div className="d-flex justify-content-center">
                  <hr className="card-break" />
                </div>
                <Card.Text>
                  <ul className="skills-list">
                    <li className="skills-li">C</li>
                    <li className="skills-li">C++</li>
                    <li className="skills-li">Java</li>
                    <li className="skills-li">Python</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="skill-card">
              <Card.Body className="pt-2 px-2">
                <Card.Title>
                  <h5 className="card-title">Hardware Technologies</h5>
                </Card.Title>
                <div className="d-flex justify-content-center">
                  <hr className="card-break" />
                </div>
                <Card.Text>
                  <ul className="skills-list">
                    <li className="skills-li">Verilog</li>
                    <li className="skills-li">Arduino</li>
                    <li className="skills-li">Raspberry Pi</li>
                    <li className="skills-li">ARM</li>
                    <li className="skills-li">ROS</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="skill-card">
              <Card.Body className="pt-2 px-2">
                <Card.Title>
                  <h5 className="card-title">Database Management</h5>
                </Card.Title>
                <div className="d-flex justify-content-center">
                  <hr className="card-break" />
                </div>
                <Card.Text>
                  <ul className="skills-list">
                    <li className="skills-li">PostgreSQL</li>
                    <li className="skills-li">MySQL</li>
                    <li className="skills-li">Firestore</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="skill-card">
              <Card.Body className="pt-2 px-2">
                <Card.Title>
                  <h5 className="card-title">Web Development</h5>
                </Card.Title>
                <div className="d-flex justify-content-center">
                  <hr className="card-break" />
                </div>
                <Card.Text>
                  <ul className="skills-list">
                    <li className="skills-li">HTML/CSS/JavaScript</li>
                    <li className="skills-li">ReactJS</li>
                    <li className="skills-li">Firebase</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default Skills;