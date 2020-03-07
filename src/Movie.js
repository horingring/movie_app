import React from 'react';
import PropTypes from 'prop-types';

function Movie({year, title, summary, poster, genre}){
    return (
        <div className="movie">
            <img className="movie_poster" src={poster} alt={title}></img>
            <h3 className="movie_title">{title} ({year})</h3>
            <p className="movie_year">year : {year}</p>
            <ul>{genre.map((genre,index) => {
                            return (<li key={index} className="movie_genres">{genre}</li>);
                          })
                }
            </ul>
            <p className="movie_summary">summary : {summary.slice(0,185)}...</p>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genre : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;