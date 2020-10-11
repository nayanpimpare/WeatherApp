import React from "react";
import { ListGroup } from "react-bootstrap";

const ShowTemp = (props) => {
  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item variant="primary">
          Location: {props.weatherResponse.name}, {""}
          {props.weatherResponse.sys.country}
        </ListGroup.Item>
        <ListGroup.Item variant="primary">
          Temperature: {props.weatherResponse.main.temp}
        </ListGroup.Item>
        <ListGroup.Item variant="primary">
          Humidity: {props.weatherResponse.main.humidity}
        </ListGroup.Item>
        <ListGroup.Item variant="primary">
          Condition: {props.weatherResponse.weather[0].description}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ShowTemp;
