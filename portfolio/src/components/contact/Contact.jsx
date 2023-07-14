import React from 'react';
import EmailLogo from './EmailIcon.jsx';
import GitHubLogo from './GitHubLogo.jsx';
import LinkedInLogo from './LinkedInLogo.jsx';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Contact = () => {
    return (
      <Container
        id="contact"
        className="section-container"
        style={{ paddingBottom: "60px" }}
      >
        <Row>
          <h2>Contact</h2>
        </Row>
        <Row className="justify-content-center">
          <hr className="subtitle-break" />
        </Row>
        <Row id="contact-container">
          <GitHubLogo />
          <EmailLogo />
          <LinkedInLogo />
        </Row>
      </Container>
    );
}

export default Contact;