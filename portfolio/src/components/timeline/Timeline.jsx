import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TimelineItem from "./TimelineItem";

const Timeline = (data) => {
    return (
      <Container className="section-text">
        <TimelineItem data={data.data[0]} />
        <TimelineItem data={data.data[1]} />
      </Container>
    );
}

export default Timeline;