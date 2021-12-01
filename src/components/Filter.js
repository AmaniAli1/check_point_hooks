import React, { useState } from "react";

import "./Filter.css";

const Filter = ({ setSearch, search }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      {
        <div className="searchdiv">
          <input
            type="text"
            placeholder="Search your film ..."
            value={search}
            onChange={handleChange}
          ></input>
        </div>
      }
    </div>
  );
};

export default Filter;
