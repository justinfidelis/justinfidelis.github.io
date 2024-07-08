import React from 'react';
import Intro from './intro/Intro';
import About from './about/About';
import Skills from './skills/Skills';
import Education from './education/Education';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import Container from 'react-bootstrap/Container';

function Content() {
    return (
      <Container fluid id="content">
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </Container>
    );
}

export default Content;