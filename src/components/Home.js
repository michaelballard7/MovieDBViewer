import React, { useState } from 'react';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'

// custom hook
import { useGetMovies } from './hooks/useGetMovies'

import NoImage from './images/no_image.jpg'

const Home = () => {

  const [{ state, loading, error}, getMovies] = useGetMovies();

  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreMovies = () => {
     
      const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${state.currentPage + 1}`;

      const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${state.currentPage + 1}`;

      const endPoint = searchTerm ? searchEndpoint : popularEndpoint;

      getMovies(endPoint, state.currentPage);

      console.log(endPoint)


  }

  if (error) return <div>Something Went Wrong</div>
  if (!state.movies[0]) return <Spinner />;

  return (

    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />

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

      <LoadMoreBtn text={"Load More Movies"} callback={loadMoreMovies} />

    </>
  )

}





export default Home;