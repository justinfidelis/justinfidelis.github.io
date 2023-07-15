import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SkillCard from './SkillCard';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      items: ["C/C++", "Java", "Python"],
    },
    {
      category: "AI / Machine Learning",
      items: ["PyTorch", "TensorFlow"],
    },
    {
      category: "Hardware",
      items: ["Verilog / HLS", "Arduino", "Raspberry Pi", "ARM"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "Firestore"],
    },
    {
      category: "Web Development",
      items: ["HTML / CSS / JavaScript", "ReactJS", "Bootstrap", "Firebase"],
    },
  ];

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
            {skillsData.map((data, idx) => (
              <SkillCard data={data} key={idx} />
            ))}
          </div>
        </Row>
      </Container>
    );
}

export default Skills;