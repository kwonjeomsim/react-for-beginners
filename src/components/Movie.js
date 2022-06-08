import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2 className={styles.movie__title}>
        {title.length > 25 ? `${title.slice(0, 25)}...` : title}
      </h2>

      <ul className={styles.genre__list}>
        {genres.map((genre) => (
          <li className={styles.genre} key={genre}>
            {`#${genre}`}
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
