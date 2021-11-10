import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/font.css';
import { GlobalStyle } from './assets/styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
