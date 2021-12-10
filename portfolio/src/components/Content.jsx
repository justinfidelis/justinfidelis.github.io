import React from 'react';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';

const Content = () => {
    return (
        <div id="content">
            <div id="content-body">
                <Intro />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Contact />
            </div>
        </div>
    );
}

export default Content;