import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieDetail() {
    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);
    const { movieId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
    }, [movieId]);

    return (
        <div>
            <h1>{movieId}</h1>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
            <Link to={`/edit/${movie.id}`}>Edit</Link>
            <p>{movie.description}</p>
            <ul>
                {
                    genres.map(genreToDisplay => <li>{genreToDisplay.name}</li>)
                }
            </ul>
        </div>
    )
}

export default MovieDetail;