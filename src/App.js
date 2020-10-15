import React from "react";
import "./styles.css";
import Weather from "./component/Weather";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <Container className="App">
            <Row>
              <Col xs={6} md={6} lg={6} sm={6} xl={6} className="leftSide">
                <img
                  src="../image/Weather_Backgroud.png"
                  alt="Photo"
                  style={{ width: "103%" }}
                />
              </Col>
              <Col xs={6} md={6} lg={6} sm={6} xl={6} className="rightSide">
                <Weather />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
