import React from 'react';
import Timeline from '../timeline/Timeline';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Education = () => {
    const educationData = [
      {
        date: 
          "Aug 2020 - Present\n" +
          "(Graduating May 2024)",
        title: "National University of Singapore",
        text:
          "B.Eng. in Computer Engineering, Honours\n" +
          "Awarded NUS Merit Scholarship\n" +
          "Placed on the Dean's List for 3 semesters\n" +
          "Current CAP: 4.95/5.0",
      },
      {
        date: "Jan 2012 - Dec 2017",
        title: "NUS High School of Math and Science",
        text:
          "NUS High School Diploma (High Distinction) \n" +
          "Honours in Chemistry and Physics, and Major in Mathematics\n" +
          "Graduation CAP: 4.6/5.0",
      },
    ];

    return (
      <Container id="education" className="section-container">
        <Row>
          <h2>Education</h2>
        </Row>
        <Row className="justify-content-center">
          <hr className="subtitle-break" />
        </Row>
        <Timeline data={educationData}/>
      </Container>
    );
}

export default Education;