import React from 'react';
import Timeline from '../timeline/Timeline';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Education = () => {
    const educationData = [
      {
        title: "National University of Singapore",
        date: "Aug 2020 - Jul 2024",
        text: [
        "B.Eng. in Computer Engineering, Honours (Highest Distinction)\n" +
        "Awarded Lee Kuan Yew Gold Medal & IES Gold Medal (Top Graduating Student)\n" +
        "Placed on the Dean's List for 4 semesters\n" +
        "NUS Merit Scholarship\n" +
        "Graduation CAP: 4.94/5.0",
        ]
      },
      {
        title: "NUS High School of Math and Science",
        date: "Jan 2012 - Dec 2017",
        text: [
          "NUS High School Diploma (High Distinction) \n" +
          "Honours in Chemistry and Physics, and Major in Mathematics\n" +
          "Graduation CAP: 4.6/5.0",
        ]
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