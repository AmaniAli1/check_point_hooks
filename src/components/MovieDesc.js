import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieDesc.css";

const MovieDesc = ({ match, history, movies }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(movies.find((movie) => movie.id === +match.params.id));
  }, [match.params.id]);

  return (
    <div className="moviesDetails">
      {/* <h2 className="title">{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} className="imageStyle" />
      <h4 className="title">{movie.description}</h4>
      <button onClick={() => history.goBack()}>Go Back</button> */}

      <Card style={{ width: "300px" }} className="moviesDetails">
        <Card.Img
          variant="top"
          src={movie.poster}
          alt={movie.title}
          className="imageStyle"
        />
        <Card.Body>
          <Card.Title className="title">{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button onClick={() => history.goBack()}>Go Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDesc;
