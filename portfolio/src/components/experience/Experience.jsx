import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Experience = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [hoverTabIndex, setHoverTabIndex] = useState(-1);

    const experienceData = [
      {
        name: "National University of Singapore",
        experience: [
          {
            title: "Student Teaching Assistant",
            date: "January 2023 - April 2023",
            description: [
              "Facilitated weekly lab sessions for CG2111A - Engineering Principles and Practice II, " +
                "an intermediate module on register level programming for Arduino",
            ],
          },
          {
            title: "Student Teaching Assistant",
            date: "January 2022 - April 2022",
            description: [
              "Conducted weekly tutorials for CS1010 - Programming Methodology, an introductory module to C",
              "Conducted regular consultation sessions for supplementary guidance",
              "Prepared lesson materials and graded coding assignments",
            ],
          },
        ],
      },
      {
        name: "DSO National Laboratories",
        experience: [
          {
            title: "Information Intern",
            date: "May 2022 - October 2022",
            description: [
              "Conducted a literature review of existing Reinforcement Learning algorithms",
              "Integrated a Multi-Agent Reinforcement Learning algorithm into a simulation " +
                "environment in Python",
              "Performed controlled testing of the algorithms' learning efficiency, performance and reliability",
              "Created a simulation environment for AI agents using the OpenAI Gym API",
            ],
          },
          {
            title: "Robotics Intern",
            date: "February 2018 - April 2018",
            description: [
              "Programmed a C++ algorithm for the extrinsic calibration of a Camera-LiDAR System",
            ],
          },
        ],
      },
      {
        name: "Singapore Armed Forces",
        experience: [
          {
            title: "Admin Supervisor & Section Trainer",
            date: "April 2018 - April 2020",
            description: [
              "Conducted lessons for 12 batches of trainees on the responsibilities and requisite technical " +
              "knowledge of an admin support assistant",
              "Managed administrative work at the company level, including  management of personal data " +
              "and consolidation of course results",
              "Coordinated the implementation of an online platform to support the conduct of the course",
              "Received the MINDEF Service Excellence Award for Q1 2020",
            ],
          },
        ],
      },
    ];

    let navBar = (
      <div id="experience-list">
        {experienceData.map((org, idx) => (
          <button
            className={"experience-list-item"}
            onMouseOver={() => setHoverTabIndex(idx)}
            onMouseOut={() => setHoverTabIndex(-1)}
            onClick={() => setTabIndex(idx)}
            style={{
              backgroundColor: hoverTabIndex === idx ? "#303030" : "#202020",
              color:
                tabIndex === idx
                  ? "#96fff3"
                  : hoverTabIndex === idx
                  ? "#96fff3"
                  : "cornsilk",
              borderColor: tabIndex === idx ? "#96fff3" : "#40635f",
            }}
            key={idx}
          >
            {org.name}
          </button>
        ))}
      </div>
    );
    
    let tabs = (
      <div id="experience-content-container">
        {experienceData.map((org, idx) => (
          <div
            className="experience-content"
            style={
              tabIndex === idx ? { display: "flex" } : { display: "none" }
            }
            key={idx}
          >
            <h3 className="highlight">{org.name}</h3>
            {org.experience.map((exp, idx) => (
              <div className="experience-role" key={idx}>
                <small className="experience-title">{exp.title}</small>
                <small className="experience-date">{exp.date}</small>
                <div className="experience-text">
                  {exp.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    return (
      <Container id="experience" className="section-container">
        <Row>
          <h2>Experience</h2>
        </Row>
        <Row className="justify-content-center">
          <hr className="subtitle-break" />
        </Row>
        <Row id="experience-container">
          {navBar}
          {tabs}
        </Row>
      </Container>
    );
}

export default Experience;