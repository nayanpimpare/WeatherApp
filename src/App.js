import React from "react";
import "./styles.css";
import Weather from "./component/Weather";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Container className="App">
        <Row>
          <Col xs={6} md={6} lg={6} sm={6} xl={6} className="leftSide">
            Check Your Nearest Wearther
          </Col>
          <Col xs={6} md={6} lg={6} sm={6} xl={6} className="rightSide">
            <Weather />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
