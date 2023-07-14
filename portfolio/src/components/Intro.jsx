import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Intro() {
    return (
        <Container id="intro">
            <Row>
                <p className="mb-0" id="intro-greeting">
                    Hi, my name is
                </p>
            </Row>
            <Row>
                <p className="mb-0" id="intro-name">
                    Justin Wong.
                </p>
            </Row>
            <Row>
                <p className="mb-0" id="intro-description">
                    I'm currently studying computer engineering at NUS.
                </p>
            </Row>
        </Container>
    );
}

export default Intro;