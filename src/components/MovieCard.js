import React from "react";
import { Card } from "react-bootstrap";
import Raterr from "./Raterr";

const MovieCard = (props) => {
  return (
    <div>
      <Card
        style={{
          heigth: "15rem",

          backgroundColor: "gainsboro",
        }}
      >
        <Card.Img variant="top" src={props.children.poster} height="350px" />
        <Card.Body>
          <Card.Title>{props.children.title}</Card.Title>
          <Card.Text>
            <Raterr evaluation={props.children.evaluation}></Raterr>
          </Card.Text>
          <Card.Text>{props.children.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
