import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './MovieList.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';



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
            <Typography className='center' variant="h3" gutterBottom>Movie List</Typography>
            <Link style={{textDecoration:'none', borderBottom: '2px solid black', fontSize:25 }}  to="/add">Add Movie</Link>
            <section className="movies">
                {/* Movies is an Array */}
                {movies.map(movie => {
                    // For each movie in the array, display it on the DOM
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{display: 'flex', justifyContent: 'center', padding:4}} key={movie.id} >
                            <Card elevation={6} sx={{ width: 275 }}>
                            <h3>{movie.title}</h3>
                                <CardMedia
                                component="img"
                                height="400"
                                image={movie.poster}
                                alt={movie.title}
                                onClick={(event) => displayMovie(movie)}
                                sx={{ objectFit: "fill" }}                 
                                />
                            </Card>
                        </Grid>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;