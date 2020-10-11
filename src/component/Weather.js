import React, { useState } from "react";
import { API_KEY } from "../env";
import ShowTemp from "./ShowTemp";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Weather = () => {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [weatherResponse, setWeatherResponse] = useState();

  const getWeather = async () => {
    if (city && country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();
      setWeatherResponse(data);
    } else {
      alert("Please enter city and Country");
    }
  };

  const getInputValue = (e) => {
    if (e.target.name === "City") {
      setCity(e.target.value);
    } else if (e.target.name === "Country") {
      setCountry(e.target.value);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={6} lg={6} sm={6} xl={6}>
            <Form.Group>
              <Form.Label style={{ color: "white" }}>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                controlId="idCity"
                name="City"
                onChange={getInputValue}
              />
            </Form.Group>
          </Col>

          <Col xs={6} md={6} lg={6} sm={6} xl={6}>
            <Form.Group controlId="idPassword">
              <Form.Label style={{ color: "white" }}>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                name="Country"
                onChange={getInputValue}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginBottom: "20%" }}>
            <Button variant="outline-light" type="submit" onClick={getWeather}>
              Check Weather
            </Button>
          </Col>
        </Row>
      </Container>
      {weatherResponse ? <ShowTemp weatherResponse={weatherResponse} /> : null}
    </div>
  );
};

export default Weather;
