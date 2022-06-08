import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className={styles.main}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <div className={styles.main__info}>
              <h2>{movie.title}</h2>
              <h2>{movie.year}</h2>
              <h4>
                Running Time: {movie.runtime}, Rate: {movie.rating}
              </h4>
            </div>
          </div>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
