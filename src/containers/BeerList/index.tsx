import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Beer from '../../components/Beer';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import { useBeers } from '../../hooks/useBeers';

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 90;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  max-width: 1075px;
  margin-top: 50px;
`

const StyledButton = styled(Button)`
  margin: 30px 0;
`

const BeerList: FunctionComponent = () => {
  const {isLoading, beers, loadNextPage} = useBeers();

  return <Wrapper>
    <ListContainer>
      {beers.map(({ id, name, image_url, abv }) => <Beer key={id} id={id} name={name} image_url={image_url} abv={abv} />)}
    </ListContainer>
    {isLoading ? <Spinner /> : null}
    <StyledButton isBig onClick={loadNextPage}>Load more</StyledButton>
  </Wrapper>
}

export default BeerList;
