import React, { useState, useEffect } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'

// custom hook
import {useGetMovies} from './hooks/useGetMovies'

const Home = () => {

  const [{state, loading, error, }, getMovies] = useGetMovies();

  return (
    <>
      <HeroImage />
      <SearchBar  />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
      
    </>
  )

}





export default Home;