import React from "react";

const Movie = ({ movieInfo }) => {
  return (
    <>
      <p>{movieInfo.title}</p>
      <p>{movieInfo.director}</p>
      <p>{movieInfo.casts}</p>
      <p>{movieInfo.genre}</p>
      <p>{movieInfo.year}</p>
      <img src={movieInfo.posterUrl} alt={movieInfo.title} />
    </>
  );
};
export default Movie;
