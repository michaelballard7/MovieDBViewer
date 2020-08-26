import React, { useState } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, SEARCH_BASE_URL, POPULAR_BASE_URL } from '../config'

import { useGetMovies } from './hooks/useGetMovies'

import NoImage from './images/no_image.jpg'

const Home = () => {

  const [{ state, loading, error }, getMovies] = useGetMovies();

  console.log('THis is current state', state)

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = search => {
    setSearchTerm(search)
      const endPoint =  search && search !== ' ' ? `${SEARCH_BASE_URL}${search}&include_adult=true` : POPULAR_BASE_URL
      getMovies(endPoint) 
  }

  const loadMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1}&include_adult=true`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;
    const endPoint = searchTerm ? searchEndpoint : popularEndpoint;
    getMovies(endPoint);
  }

  if (error) return <div>Something Went Wrong</div>

  if (!state.movies[0]) return <Spinner />;

  return (

    <>

    { !searchTerm && (
       <HeroImage
       image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
       title={state.heroImage.original_title}
       text={state.heroImage.overview}
     />

    )



    }
     
      <SearchBar callback={searchMovies} />

      <Grid header={searchTerm ? 'Search results' : 'Popular Movies'}>

        {
          state.movies.map(movie => (
            <MovieThumb
              key={movie.id}
              clickable
              image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
              movieId={movie.id}
              movieName={movie.original_title} />
          ))
        }

      </Grid>

      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !loading && (<LoadMoreBtn text={"Load More Movies"} callback={loadMovies} />) }

    </>
  )

}


export default Home;