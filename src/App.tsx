import React from 'react';
import MainWrapper from './containers/MainWrapper';
import Header from './containers/Header';
import BeerList from './containers/BeerList';
import FavouriteBeers from './containers/FavouriteBeers';

function App() {
  return (
    <MainWrapper>
      <Header />
      <BeerList/>
      <FavouriteBeers />
    </MainWrapper>
  );
}

export default App;
