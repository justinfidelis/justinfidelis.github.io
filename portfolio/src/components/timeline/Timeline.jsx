import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TimelineItem from "./TimelineItem";

const Timeline = (data) => {
    return (
      <Container className="section-text">
        {data.data.map((data, idx) => (
          <TimelineItem data={data} key={idx}/>
        ))}
      </Container>
    );
}

export default Timeline;