import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
    const genres = useSelector( store => store.genres );
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [poster, setPoster] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) { // Return false if id is undefined
            axios.get(`/api/movie/${id}`).then(response => {
                const movie = response.data;
                setTitle(movie.title);
                setDescription(movie.description);
                setPoster(movie.poster);
            }).catch(error => {
                console.log(error);
                alert('Something went wrong!');
            })
        } // else do nothing
    }, [id]);

    const submitForm = (e) => {
        e.preventDefault();
        if (id) {
            // EDIT AN EXISTING MOVIE
            dispatch({ type: 'EDIT_MOVIE', payload: { title, description, poster, id }, history });
        } else {
            // ADD A MOVIE
            // Pass history with our dispatch so that the saga can redirect
            dispatch({ type: 'ADD_MOVIE', payload: { title, description, poster }, history });
        }

    }

    const getTitle = () => {
        if (id) {
            return 'Edit Movie';
        } else {
            return 'Add Movie';
        }
    }

    return (
        <div>
            {/* <h1>{getTitle()}</h1> */}
            {id ? <h1>Edit Movie</h1> : <h1>Add Movie</h1> }
            <h3>{id}</h3>
            <form onSubmit={submitForm}>
                <p>Title: <input value={title} onChange={(e) => setTitle(e.target.value)} /></p>
                <p>Description: <input value={description} onChange={(e) => setDescription(e.target.value)}  /></p>
                <p>Poster: <input value={poster} onChange={(e) => setPoster(e.target.value)}  /></p>
                {/* <select
                    value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}>
                    {genres.map(o => (
                        <option key={o.id} value={o.id}>{o.name}</option>
                    ))}
                </select> */}
                <input type="submit" />
            </form>
        </div>
    )
}

export default MovieDetail;