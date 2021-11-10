import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/font.css';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { BearsProvider } from './hooks/useBeers';

ReactDOM.render(
  <React.StrictMode>
    <BearsProvider>
      <GlobalStyle />
      <App />
    </BearsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
