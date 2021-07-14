import PropTypes from "prop-types";
import "./Movie.css";
//if a component doesn't need state, it doesn't have to be a class Component

function Movie({year,summary,title,poster,genres}) {
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => // each item on a map(list) needs a key
                <li className="genres_genre" key={index}>{genre}</li>)} 
            </ul> 
            <p className="movie__summary">{summary.slice(0,180)}...</p>
               
        </div>
    </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year:PropTypes.number.isRequired
}
export default Movie;