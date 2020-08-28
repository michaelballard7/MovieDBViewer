import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers';
import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue }) => (

  <StyledMovieInfoBar>
    <div className="movieinforbar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-0" size="2x" />
        <span className="moviebar-ino">
          Running time: {calcTime(time)}
        </span>
      </div>


      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="moviebar-ino">
          Budget: {convertMoney(budget)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="moviebar-ino">
          Revenue: {convertMoney(revenue)}
        </span>
      </div>


    </div>
  </StyledMovieInfoBar>
)

export default MovieInfoBar
