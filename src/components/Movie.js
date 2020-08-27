import React, { useState, useEffect } from 'react';
import MovieInfo from './elements/MovieInfo';
import Navigation from './elements/Navigation';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import {useGetMovie} from './hooks/useGetMovie';


const Movie = (props) => {
  
  const { movieId } = props.match.params

  const [movie, loading, error] = useGetMovie(movieId)

  if(error) return <div>Something Went Wrong with movie fetch </div>

  if(loading) return <Spinner />


  return (
    <>
      <Navigation movie={movie.original_title}/>
      <MovieInfo movie={movie} />
      <MovieInfoBar />
      <Grid>
      <Actor />
      </Grid>
    </>
  )
}

export default Movie;
