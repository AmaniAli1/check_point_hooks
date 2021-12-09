import "./App.css";
import React, { useState } from "react";
import Navbarr from "./components/Navbarr";

import ListOfFilms from "./components/ListOfFilms";
import Filter from "./components/Filter";
import RaterSearch from "./components/RaterSearch";
import AddMovie from "./components/AddMovie";

import { Route, Switch } from "react-router-dom";
import MovieDesc from "./components/MovieDesc";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Star Wars",
      description:
        "Star Wars est un univers de science-fiction créé par George Lucas. Année de création : 1977 ",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhE0G6p55bRb07g7dWstgPUpmtNyoHcPl5A&usqp=CAU",
      evaluation: 5,
    },
    {
      id: 2,
      title: "Harry Potter",
      description:
        "La série est distribuée par Warner Bros.et se compose de huit films fantastiques.",
      poster: "https://m.media-amazon.com/images/I/71bmNSxkw-L._AC_SY550_.jpg",
      evaluation: 4,
    },
    {
      id: 3,
      title: "Halloween",
      description:
        "est un film réalisé par David Gordon Green avec Jamie Lee Curtis, Judy Greer",
      poster:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/halloween_1978_linen_original_film_art_f_1200x.jpg?v=1583313063",
      evaluation: 4,
    },
    {
      id: 4,
      title: "Spider_Man",
      description:
        "est un film américain réalisé par Sam Raimi, sorti en 2002.  Créé par  le dessinateur Steve Ditko",
      poster:
        "https://www.premiere.fr/sites/default/files/styles/scale_crop_border_white_1280x720/public/2018-04/df6ae5a938ee42d1b5956ed885ac0b7e_1.jpg",
      evaluation: 3,
    },
    {
      id: 5,
      title: "Joker",
      description:
        "est un thriller psychologique américain, coécrit et réalisé par Todd Phillips",
      poster: "https://m.media-amazon.com/images/I/61BGvE8DumL._AC_SY606_.jpg",
      evaluation: 5,
    },
    {
      id: 6,
      title: "Man On Fire",
      description:
        "est un thriller psychologique américain, coécrit et réalisé par Todd Phillips",
      poster:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8177fbaa5b4c092f1c43941737eb96b531ee1c48cd66c3270f92ffbe8493b529._RI_V_TTW_.jpg",
      evaluation: 2,
    },
    {
      id: 7,
      title: "Unstoppable",
      description:
        "Unstoppable is a 2010 American action thriller film directed.",
      poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/79/72/83/19535862.jpg",
      evaluation: 5,
    },
  ]);

  const [search, setSearch] = useState("");
  const [star, setStar] = useState(1);

  return (
    <div className="App">
      <Navbarr />
      <div className="Search">
        <Filter search={search} setSearch={setSearch} />
        <RaterSearch star={star} setStar={setStar} />
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ListOfFilms movies={movies} search={search} star={star} />
          )}
        />
        <Route
          path="/film/:id"
          render={(props) => <MovieDesc {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default App;
