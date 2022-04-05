import React from "react";
import { ApiRequest } from "../../api/ApiRequest";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import "./MovieDetailsComp.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const IMG_API = "https://image.tmdb.org/t/p/w500";

  const URL_CAST = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e190cd243c4a481590afedc55b027b3&language=en-US`;
  const URL_INFO =
    "https://api.themoviedb.org/3/discover/movie?api_key=4e190cd243c4a481590afedc55b027b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=Interger&with_watch_monetization_types=flatrate";

  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiRequest(URL_INFO).then((data) => {
      setMovie(data.results.slice(0, 10).find((movie) => movie.id == id));
    });
    ApiRequest(URL_CAST).then((data) => {
      setCast(data.cast.slice(0, 3));
    });
  }, []);

  return (
    <>
      <div className="movie-title">
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-container-infos">
        <div className="movie-first">
          <img src={IMG_API + movie.poster_path} alt={movie.title} />
        </div>
        <div className="movie-second">
          <div className="star-symbol">
            <AiFillStar />
            <span className="rate-number">{movie.vote_average}</span>
          </div>

          <div className="votes-number">
            <AiFillHeart />
            <span> {movie.vote_count}</span>
          </div>
        </div>

        <div className="resume">
          <p>{movie.overview}</p>
        </div>

        <div className="cast">
          {cast &&
            cast.map((movie, i) => {
              const { name, profile_path } = movie;

              return (
                <div className="cast-portrait">
                  <img
                    key={`actor-photo-${i}`}
                    src={IMG_API + profile_path}
                    alt={name}
                  />
                  <h2 key={`actor-name-${i}`}>{name}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
