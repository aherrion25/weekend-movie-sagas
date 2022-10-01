import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetail (){
    const movie = useSelector(store => store.selectMovie);
    const genres = useSelector(store => store.genres);
    const history = useHistory()

    return(
        <div>
            <h2>
                {movie.title}
            </h2>
            <img src={movie.poster} />
            <h3>
                Movie Details
            </h3>
            <p>
                {movie.description}
            </p>
            <h3>
                Genres:
            </h3>
            {genres.map(genre => `${genre.name}`)}
        </div>
    )
}

export default MovieDetail;