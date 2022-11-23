import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './MovieDetail.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MovieDetail() {
    const history = useHistory();
    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);
    const { movieId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
    }, [movieId]);

    return (
       
        <Card elevation={6} sx={{ display: 'flex', justifyContent:'center', margin:25,  }}>
            <CardMedia
                component="img"
                sx={{ width: 1050 }}
                image={movie.poster}
                alt={movie.title}
            />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography className='center' variant="h3" gutterBottom>{movie.title}</Typography>
            <Link style={{textDecoration:'none', borderBottom: '2px solid black', fontSize:25 }}  to={`/edit/${movie.id}`}>Edit</Link>
            <br />
            <br />
            <Typography  variant="body2" gutterBottom>{movie.description}</Typography>
            <Typography variant="h6" gutterBottom>Genres</Typography>
            <Typography textAlign='center' variant="body1" gutterBottom> 
                     <ul>
                        {
                            genres.map(genreToDisplay => <li style={{listStyle: "none"}}>{genreToDisplay.name}</li>)
                        }
                    </ul>
            </Typography>
            </CardContent>
            <Box sx={{margin: 5}} className='center'>
                <Button variant="outlined" onClick={() => history.push('/')} >Back to list</Button>
            </Box>
        </Box>
        </Card>
        
    
                    
                   
                        
          
            
        
    )
}

export default MovieDetail;

