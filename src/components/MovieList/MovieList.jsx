import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const detail = (movie) =>{
        dispatch ({ type: 'SELECT_MOVIE', payload: movie});
        dispatch ({ type: 'FETCH_GENRES', payload: movie.id})
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => {detail(movie)}} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;