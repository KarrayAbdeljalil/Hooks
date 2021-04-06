import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { moviesData } from './data';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const handleAdd = (newMovie) => setMovies([...movies,newMovie]);
  const handleRating = (rate) => setSearchRating(rate);
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <Search searchValue={searchValue} searchRating={searchRating} handleRating={handleRating} handleSearch={handleSearch}/>
      <MovieList list={movies.filter((movie)=>
      movie.name.toLowerCase().includes(searchValue.toLowerCase().trim()) 
      && searchRating <= movie.rating
      )} />
      <AddMovie handleAdd={handleAdd}/>

    </div>
  );
}

export default App;
