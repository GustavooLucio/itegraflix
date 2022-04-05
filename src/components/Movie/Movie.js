import React from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import "./Movie.scss";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={IMG_API + movie.poster_path} alt={movie.title} />
      <div className="movie-title">
        <h2>{movie.title}</h2>
      </div>
      <div className="movie-info">
        <div className="star">
          <AiFillStar />
          <span className="rate">{movie.vote_average}</span>
        </div>
        <span> {movie.release_date.slice(0, 4)}</span>
        <div className="votes">
          <AiFillHeart />
          <span> {movie.vote_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
