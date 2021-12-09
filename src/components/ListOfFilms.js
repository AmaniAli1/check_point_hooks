import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import Filter from "./Filter";
import RaterSearch from "./RaterSearch";

import "./ListOfFilms.css";

import AddMovie from "./AddMovie";

const ListOfFilms = ({ movies, search, star }) => {
  return (
    <div>
      <h1>
        <i>LIST OF MOVIES</i>
      </h1>
      <div className="listFilm">
        {movies
          .filter(
            (movie) =>
              movie.title.toUpperCase().includes(search.toUpperCase()) &&
              movie.evaluation >= star
          )
          .map((film, i) => (
            <div>
              <MovieCard film={film} key={film.id} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default ListOfFilms;
