import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Timeline from '../timeline/Timeline';

const Experience = () => {
    const experienceData = [
      {
        title: "National University of Singapore",
        subtitle: "Student Teaching Assistant",
        date: "Aug 2023 - Nov 2023",
        text: [
          "Conducted weekly lab sessions for CS1010 - Programming Methodology, an introductory module to C",
          "Prepared lesson materials and graded coding assignments",
        ],
      },
      {
        title: "National University of Singapore",
        subtitle: "Student Teaching Assistant",
        date: "Jan 2023 - Apr 2023",
        text: [
          "Facilitated weekly lab sessions for CG2111A - Engineering Principles and Practice II, " +
            "an intermediate module on register level programming for Arduino",
          "Guided 8 groups of students in their project to create a remote-controlled environment mapping robot",
        ],
      },
      {
        title: "DSO National Laboratories",
        subtitle: "Information Intern",
        date: "May 2022 - Oct 2022",
        text: [
          "Surveyed existing Reinforcement and Imitation Learning algorithms and assessed their suitability",
          "Integrated a Multi-Agent Reinforcement Learning algorithm into a Python simulation environment",
          "Performed controlled testing of the algorithms' learning efficiency, performance and reliability",
          "Created a simulation environment for AI agents using the OpenAI Gym API",
        ],
      },
      {
        title: "National University of Singapore",
        subtitle: "Student Teaching Assistant",
        date: "Jan 2022 - Apr 2022",
        text: [
          "Conducted weekly tutorials for CS1010 - Programming Methodology, an introductory module to C",
          "Conducted regular consultation sessions for supplementary guidance",
          "Prepared lesson materials and graded coding assignments",
        ],
      },
      {
        title: "Singapore Armed Forces",
        subtitle: "Admin Supervisor & Section Trainer",
        date: "April 2018 - April 2020",
        text: [
          "Conducted lessons for 12 batches of trainees on the responsibilities and requisite technical " +
            "knowledge of an admin support assistant",
          "Managed administrative work at the company level, including  management of personal data " +
            "and consolidation of course results",
          "Coordinated the implementation of an online platform to support the conduct of the course",
          "Received the MINDEF Service Excellence Award for Q1 2020",
        ],
      },
      {
        title: "DSO National Laboratories",
        subtitle: "Robotics Intern",
        date: "Feb 2018 - Apr 2018",
        text: [
          "Automated the extrinsic calibration of a Camera-LiDAR system using a C++ algorithm",
        ],
      },
    ];

    return (
      <Container id="experience" className="section-container">
        <Row>
          <h2>Experience</h2>
        </Row>
        <Row className="justify-content-center">
          <hr className="subtitle-break" />
        </Row>
        <Row>
          <Timeline data={experienceData}/>
        </Row>
      </Container>
    );
}

export default Experience;