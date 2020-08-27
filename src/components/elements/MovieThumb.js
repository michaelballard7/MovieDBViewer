import React from 'react'
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
import {Link} from 'react-router-dom'

const MovieThumb = ({ image, movieId, clickable, movieName }) => {

  return (
    <StyledMovieThumb>
      {clickable ? ( <Link to={{pathname:`/${movieId}`, movieName:`${movieName}`}}><img className='clickable' src={image} alt="moviethumb" /></Link>) : (<img src={image} alt="moviethumb" />)}
    </StyledMovieThumb>
  )

}


export default MovieThumb;