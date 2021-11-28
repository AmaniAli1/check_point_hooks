import React, { useState } from "react";
import ListOfFilms from "./ListOfFilms";
import MovieCard from "./MovieCard";
import RaterSearch from "./RaterSearch";
import "./Filter.css";

const Filter = (props) => {
  const [search, setSearch] = useState("");
  const [filmSearch, setfilmSearch] = useState([]);
  const [listFilm, setlistFilm] = useState(props.children);

  const handleChange = (e) => {
    setSearch(e.target.value);
    /**************/
    const result = listFilm.filter((searching) => {
      listFilm.title.include(search);
      setfilmSearch(result);

      filmSearch.map((film, i) => (
        <div style={{ height: "300px" }}>
          <MovieCard>{film}</MovieCard>
        </div>
      ));

      // <ListOfFilms filmSearch={filmSearch}></ListOfFilms>;
    });
    //<ListOfFilms search={search}></ListOfFilms>;
  };
  return (
    <div>
      {
        <div className="searchdiv">
          <input
            type="text"
            placeholder="Search your film ..."
            style={{}}
            onChange={handleChange}
          ></input>
          <RaterSearch></RaterSearch>
        </div>
        /**************************
      {props.children.title.Filter((filmsearch) => {
        props.children.title.include(props);

        
            <ListOfFilms filmsearch={filmsearch}></ListOfFilms>
          </div>
        ));
      })}    *****/
      }
    </div>
  );
};

export default Filter;
