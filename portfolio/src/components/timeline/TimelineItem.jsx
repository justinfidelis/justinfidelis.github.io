import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TimelineItem = ({data}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <Row>
      {!isMobile && (
        <Col className="timeline-date">
          <Row>
            <small style={{ whiteSpace: "pre-wrap" }}>{data.date}</small>
          </Row>
        </Col>
      )}
      <Col className="timeline-content">
        <Row>
          <h3 className="highlight">{data.title}</h3>
        </Row>
        {isMobile && (
          <Row className="pb-1">
            <small>{data.date}</small>
          </Row>
        )}
        {data?.subtitle && (
          <Row>
            <small className="timeline-subtitle">{data.subtitle}</small>
          </Row>
        )}
        <Row className="lh-base education-text">
          <div style={{ whiteSpace: "pre-wrap" }}>
            {data.text.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </Row>
        <span className="circle"></span>
      </Col>
    </Row>
  );
};

export default TimelineItem;
