import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const displayMovie = (movieToDisplay) => {
        history.push(`/detail/${movieToDisplay.id}`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Link to="/add">Add Movie</Link>
            <section className="movies">
                {/* Movies is an Array */}
                {movies.map(movie => {
                    // For each movie in the array, display it on the DOM
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={(event) => displayMovie(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;