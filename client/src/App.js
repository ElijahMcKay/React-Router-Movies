import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// import { Movie, MovieCard, MovieList, SavedList } from './Movies/';
import Movie from "./Movies/Movie"; 
import MovieList from "./Movies/MovieList"; 
import SavedList from "./Movies/SavedList"; 
import MovieCard  from "./Movies/MovieCard"; 

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
