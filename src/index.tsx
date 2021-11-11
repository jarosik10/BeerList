import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/font.css';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { BeersProvider } from './hooks/useBeers';
import { FavouriteBeersProvider } from './hooks/useFavouriteBeers';

ReactDOM.render(
  <React.StrictMode>
    <BeersProvider>
      <FavouriteBeersProvider>
        <GlobalStyle />
        <App />
      </FavouriteBeersProvider>
    </BeersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
