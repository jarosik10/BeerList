import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useFavouriteBeers } from '../../hooks/useFavouriteBeers';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Header: FunctionComponent = () => {
  const { openFavouriteBeersSidebar } = useFavouriteBeers();
  return <StyledHeader>
    <Title>My beer list</Title>
    <Button onClick={openFavouriteBeersSidebar}>Show my favs</Button>
  </StyledHeader>
}

export default Header;
