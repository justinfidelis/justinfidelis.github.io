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
        <div id="content">
            <Container id="content-body">
                <Intro />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Contact />
            </Container>
        </div>
    );
}

export default Content;