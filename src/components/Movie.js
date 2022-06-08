import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul className="genre-list">
        {genres.map((genre) => (
          <li className="genre" key={genre}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
