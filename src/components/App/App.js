import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMovie from '../AddMovie/AddMovie';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      {/* History is not available here!! */}
      <Router> 
        <Header />    
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