import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container id="about">
            <Row>
                <h2>About</h2>
            </Row>
            <Row className="justify-content-center">
                <hr className="subtitle-break" />
            </Row>
            <Row>
                <Col className="section-text" id="about-text-container">
                    <p> Hello! My name is Justin and I am currently a Year 3 computer engineering student at the National University of Singapore. </p>
                    <p> I have an interest in Artificial Intelligence, Machine Learning and Computer Vision. </p>
                </Col>
                <Col className="px-0" id="about-image-container">
                    <img className="about-image" src="self-pic.jpg" alt=""></img>
                </Col>
            </Row>
        </Container>
    );
}

export default About;