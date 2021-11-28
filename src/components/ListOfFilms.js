import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

import "./ListOfFilms.css";

const ListOfFilms = (props) => {
  const [movies, setMovies] = useState([
    {
      title: "Star Wars",
      description:
        "Star Wars est un univers de science-fiction créé par George Lucas. Année de création : 1977 ",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhE0G6p55bRb07g7dWstgPUpmtNyoHcPl5A&usqp=CAU",
      evaluation: 5,
    },
    {
      title: "Harry Potter",
      description:
        "La série est distribuée par Warner Bros.et se compose de huit films fantastiques.",
      poster: "https://m.media-amazon.com/images/I/71bmNSxkw-L._AC_SY550_.jpg",
      evaluation: 4,
    },
    {
      title: "Halloween",
      description:
        "est un film réalisé par David Gordon Green avec Jamie Lee Curtis, Judy Greer",
      poster:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/halloween_1978_linen_original_film_art_f_1200x.jpg?v=1583313063",
      evaluation: 4,
    },
    {
      title: "Spider_Man",
      description:
        "est un film américain réalisé par Sam Raimi, sorti en 2002.  Créé par  le dessinateur Steve Ditko",
      poster:
        "https://www.premiere.fr/sites/default/files/styles/scale_crop_border_white_1280x720/public/2018-04/df6ae5a938ee42d1b5956ed885ac0b7e_1.jpg",
      evaluation: 3,
    },
    {
      title: "Joker",
      description:
        "est un thriller psychologique américain, coécrit et réalisé par Todd Phillips",
      poster: "https://m.media-amazon.com/images/I/61BGvE8DumL._AC_SY606_.jpg",
      evaluation: 5,
    },
  ]);
  const filmsearch = [];
  /********************** 
  const showSearchFilm = (props) => {
    movies.Filter((filmsearch) => movies.title.include(props));
    setMovies(filmsearch);
  };
  /*** filmsearch.map((film, i) => (
      <div style={{ height: "300px" }}>
        <MovieCard>{film}</MovieCard>
      </div>
    ));
  };
  /******************************* 
  const showFilm = () => {
    
    ));
  };
  /***************** */
  return (
    <div>
      <Filter>{movies}</Filter>
      <div className="listFilm">
        {movies.map((film, i) => (
          <div style={{ width: "300px" }}>
            <MovieCard>{film}</MovieCard>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListOfFilms;
