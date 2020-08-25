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

  if(error) return <div>Something Went Wrong</div>
  if(!state.movies[0]) return <Spinner/> ;

  return (
    <>
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`} 
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar  />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
      
    </>
  )

}





export default Home;