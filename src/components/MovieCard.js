import React from "react";
import { Card } from "react-bootstrap";
import Raterr from "./Raterr";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ film }) => {
  return (
    <div className="movieCard">
      <Card
        style={{
          width: "18rem",
          backgroundColor: "gainsboro",
        }}
      >
        <Link
          to={{
            pathname: `/film/${film.id}`,
            state: film,
          }}
        >
          <Card.Img
            variant="top"
            src={film.poster}
            height="300px"
            className="movieImg"
          />
        </Link>
        <Card.Body className="cardText">
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>
            <Raterr evaluation={film.evaluation}></Raterr>
          </Card.Text>
          {/* <Card.Text>{props.film.description}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
