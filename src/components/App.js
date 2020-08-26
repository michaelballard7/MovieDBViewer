import React from 'react';
import Header from './elements/Header'
import Home from './Home';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    paddng: 0;
    box-sizing: border-box
  }
`

const App = () => (
  <>
    <Header />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
