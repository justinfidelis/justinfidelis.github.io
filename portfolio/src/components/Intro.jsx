import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Intro() {
    return (
        <Container id="content-intro">
            <Row className="w-100 mx-0" id="intro-greeting">
                Hi, my name is
            </Row>
            <Row className="w-100 mx-0" id="intro-name">
                Justin Wong.
            </Row>
            <Row className="w-100 mx-0" id="intro-description">
                I'm currently studying computer engineering at NUS.
            </Row>
        </Container>
    );
}

export default Intro;