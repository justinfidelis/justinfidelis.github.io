import React from 'react';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Container from 'react-bootstrap/Container';

function Content() {
    return (
      <Container fluid id="content">
        <Intro />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </Container>
    );
}

export default Content;