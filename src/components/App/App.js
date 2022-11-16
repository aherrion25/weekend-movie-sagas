import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      {/* History is not available here!! */}
      <Router> 
        <h1>The Movies Saga!</h1>      
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/add" exact>
          <AddMovie />
        </Route>

        <Route path="/edit/:id" exact>
          <AddMovie />
        </Route>
        
        {/* Details page */}
        <Route exact path="/detail/:movieId">
          <MovieDetail />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;