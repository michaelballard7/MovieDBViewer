import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './elements/Header'
import Home from './Home';
import NotFound from './elements/NotFound'
import Movie from './Movie'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    paddng: 0;
    box-sizing: border-box
  }
`

const App = () => (
  <BrowserRouter>
    <>
      <Header />

      <Switch>
        <Route path="/:movieId" component={Movie} exact/> 
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
      
      <GlobalStyle />
    </>
  </BrowserRouter>

);

export default App;
