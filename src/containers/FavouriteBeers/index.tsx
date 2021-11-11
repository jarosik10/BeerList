import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { useBeers } from '../../hooks/useBeers';
import { useFavouriteBeers } from '../../hooks/useFavouriteBeers';

const Wrapper = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-left: 4px solid #000000;
  z-index: 110;
`;

const StyledButton = styled(Button)`
  margin: 12px;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 16px 0 24px;
`

const ListContainer = styled.div`
  padding: 0 16px;
`

const FavouriteBeer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

const FavouriteBeerTitle = styled.span`
  font-size: 18px;
`;

const RemoveFavouriteBeerButton = styled.button`
  border: none;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  background: none;
  padding: 2px;
  cursor: pointer;
  font-style: italic;
`

const FavouriteBeers: FunctionComponent = () => {
  const { beers } = useBeers();
  const { favouriteBeers: favouriteBeersIds, closeFavouriteBeersSidebar, isFavouriteBeersSidebarOpen, removeBeerFromFavourites} = useFavouriteBeers();

  if (!isFavouriteBeersSidebarOpen) return null;

  const favouriteBeers = beers.filter(({id}) => favouriteBeersIds.includes(id));

  return <Wrapper>
    <StyledButton onClick={closeFavouriteBeersSidebar}>Close</StyledButton>
    <Heading>My favourite beers</Heading>
    <ListContainer>
      {favouriteBeers.map(({ name, id }) => <FavouriteBeer>
        <FavouriteBeerTitle>{name}</FavouriteBeerTitle>
        <RemoveFavouriteBeerButton onClick={() => removeBeerFromFavourites(id)}>Remove</RemoveFavouriteBeerButton>
      </FavouriteBeer>)}
    </ListContainer>
  </Wrapper>
}

export default FavouriteBeers;
