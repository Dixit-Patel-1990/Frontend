import React, { useState } from "react";
import data from "./data.json";
import Movie from "./Movie";
const Movielist = () => {
  const [movieInfo, setMovieInfo] = useState({});

  const handleClick = (movieInfo, index) => {
    setMovieInfo(movieInfo);
  };
  return (
    <>
      <ul>
        {data.movies.map((element, index) => {
          return (
            <li key={index} onClick={() => handleClick(element, index)}>
              {element.title}
            </li>
          );
        })}
      </ul>

      {movieInfo && movieInfo.title && <Movie movieInfo={movieInfo} />}
    </>
  );
};
export default Movielist;
