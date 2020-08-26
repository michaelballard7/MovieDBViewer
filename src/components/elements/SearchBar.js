import React, { useState, useRef } from 'react'
import FontAwesome from 'react-fontawesome';
import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {

  const [state, setState] = useState("");

  const timeOut = useRef(null)

  const searchMovie = (e) => {
    const {value} = e.target 
    setState(value)
    clearTimeout(timeOut.current)
    timeOut.current = setTimeout( () => {

      callback(value)
  

    }, 1000)
  }

  return (

    <StyledSearchBar>
      <StyledSearchBarContent>
      <FontAwesome className="fa-search" name="search" size="2x" />
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={searchMovie}
        value={state}/>
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}


export default SearchBar;