import React from "react";
import { Card } from "react-bootstrap";
import Raterr from "./Raterr";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movieCard">
      <Card
        style={{
          width: "18rem",
          backgroundColor: "gainsboro",
        }}
      >
        <Card.Img
          variant="top"
          src={props.film.poster}
          height="300px"
          className="movieImg"
        />
        <Card.Body className="cardText">
          <Card.Title>{props.film.title}</Card.Title>
          <Card.Text>
            <Raterr evaluation={props.film.evaluation}></Raterr>
          </Card.Text>
          {/* <Card.Text>{props.film.description}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
