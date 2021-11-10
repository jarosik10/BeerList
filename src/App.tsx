import React from 'react';
import MainWrapper from './containers/MainWrapper';
import Header from './containers/Header';
import BeerList from './containers/BeerList';

function App() {
  return (
    <MainWrapper>
      <Header />
      <BeerList/>
    </MainWrapper>
  );
}

export default App;
