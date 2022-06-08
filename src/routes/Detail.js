import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import "../css/Detail.module.css";
function Detail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div
            className="background"
            style={{
              background: `no-repeat url(${movie.background_image})`,
              backgroundSize: "1000px 1000px",
            }}
          >
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>
              {movie.title}, {movie.year}
            </h2>
            <h4>
              Running Time: {movie.runtime}, Rate: {movie.rating}
            </h4>
            <p>{movie.description_full}</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default Detail;
