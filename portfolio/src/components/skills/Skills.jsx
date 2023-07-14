import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Skills = () => {
    return (
      <Container id="skills" className="section-container">
        <Row>
          <h2>Skills</h2>
        </Row>
        <Row className="justify-content-center">
          <hr className="subtitle-break" />
        </Row>
        <Row className="w-100">
          <div className="skills-container">
            <div className="skill-card">
              <h5 className="card-title">Programming Languages</h5>
              <hr className="card-break" />
              <ul className="skills-list">
                <li className="skills-li">C/C++</li>
                <li className="skills-li">Java</li>
                <li className="skills-li">Python</li>
              </ul>
            </div>
            <div className="skill-card">
              <h5 className="card-title">AI / Machine Learning</h5>
              <hr className="card-break" />
              <ul className="skills-list">
                <li className="skills-li">PyTorch</li>
                <li className="skills-li">TensorFlow</li>
              </ul>
            </div>
            <div className="skill-card">
              <h5 className="card-title">Hardware</h5>
              <hr className="card-break" />
              <ul className="skills-list">
                <li className="skills-li">Verilog / HLS</li>
                <li className="skills-li">Arduino</li>
                <li className="skills-li">Raspberry Pi</li>
                <li className="skills-li">ARM</li>
              </ul>
            </div>
            <div className="skill-card">
              <h5 className="card-title">Database</h5>
              <hr className="card-break" />
              <ul className="skills-list">
                <li className="skills-li">PostgreSQL</li>
                <li className="skills-li">MySQL</li>
                <li className="skills-li">Firestore</li>
              </ul>
            </div>
            <div className="skill-card">
              <h5 className="card-title">Web Development</h5>
              <hr className="card-break" />
              <ul className="skills-list">
                <li className="skills-li">HTML / CSS / JavaScript</li>
                <li className="skills-li">ReactJS</li>
                <li className="skills-li">Bootstrap</li>
                <li className="skills-li">Firebase</li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    );
}

export default Skills;