import React from "react";
import Movie from "../../components/Movie/Movie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiRequest } from "../../api/ApiRequest";
import "./Home.scss";

const Home = () => {
  const URL_INFO =
    "https://api.themoviedb.org/3/discover/movie?api_key=4e190cd243c4a481590afedc55b027b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=Interger&with_watch_monetization_types=flatrate";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiRequest(URL_INFO).then((data) => {
      setMovies(data.results.slice(0, 10));
    });
  }, []);

  const renderMovies = () =>
    movies.map((movie, i) => {
      const { id } = movie;

      return (
        <Link
          key={`link-movie-${i}`}
          to={`/${id}`}
          style={{ textDecoration: "none" }}
        >
          <Movie key={`movie-${i}`} movie={movie} />
        </Link>
      );
    });

  return <div className="movie-container">{renderMovies()}</div>;
};

export default Home;
