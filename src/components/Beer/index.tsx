import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useFavouriteBeers } from '../../hooks/useFavouriteBeers';
import HeartButton from '../HeartButton';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: auto;
  border: 4px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BeerImage = styled.img`
  object-fit: contain;
  max-height: 200px;
  padding: 5px;
`

const BeerAbv = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  min-width: 100px;
  transform: translateY(-50%);
  padding: 10px 4px 10px 20px;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 0 0 4px #000000;
  color: #ffffff;
  background-color: ${({ abv }: { abv: number }) => abv > 6 ? '#ff0000' : abv > 3 ? '#eef300' : '38ff06'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const BeerTitle = styled.h2`
  position: absolute;
  bottom: 10%;
  font-size: 16px;
  text-align: right;
  padding: 0 10px;
  margin: 0;
  right: 0;
  max-width: 140px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 2px solid black;
`

export interface BeerProps {
  id: number;
  name: string;
  abv: number;
  image_url: string;
}

const Beer: FunctionComponent<BeerProps> = ({id, name, abv, image_url: imagerUrl}) => {
  const {addBeerToFavourites, removeBeerFromFavourites, favouriteBeers} = useFavouriteBeers();
  const isFavourite = favouriteBeers.includes(id);

  const toggleFavourite = () => {
    if (isFavourite) {
      removeBeerFromFavourites(id);
    } else {
      addBeerToFavourites(id);
    }
  }

  return <Wrapper>
    <BeerImage src={imagerUrl}/>
    <HeartButton isActive={isFavourite} onClick={toggleFavourite}/>
    <BeerAbv abv={abv}>{abv}%</BeerAbv>
    <BeerTitle>{name}</BeerTitle>
  </Wrapper>
}

export default Beer;
