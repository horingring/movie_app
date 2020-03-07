import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}){
    return (
        <div>
            <h3>{title} ({year})</h3>
            <img src={poster}></img>
            <p>year : {year}</p>
            <p>summary : {summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}

export default Movie;