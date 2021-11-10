import React, { FunctionComponent } from 'react';
import { BeerProps } from '../components/Beer';

interface ContextValue {
  beers: BeerProps[];
  favouriteBeers: number[];
  page: number;
  isLoading: boolean;
  loadNextPage: () => void;
  addBeerToFavourites: (id: number) => void;
  removeBeerFromFavourites: (id: number) => void;
}

export const BeersContext = React.createContext({} as ContextValue);

const fetchBeers = async(page: number) => {
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=16`)
}

export const BearsProvider: FunctionComponent = ({children}) => {
  const [beers, setBeers] = React.useState<BeerProps[]>([]);
  const [favouriteBeers, setFavouriteBeers] = React.useState<number[]>([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const loadNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  const addBeerToFavourites = (id: number) => {
    setFavouriteBeers(prevState => [...prevState, id]);
  }

  const removeBeerFromFavourites = (id: number) => {
    setFavouriteBeers(favouriteBeers.filter((i) => i !== id));
  }

  React.useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    fetchBeers(page).then(res => res.json().then(res => {
      setBeers((prevState) => [...prevState, ...res]);
      setIsLoading(false);
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <BeersContext.Provider
      value={{
        beers,
        favouriteBeers,
        page,
        isLoading,
        loadNextPage,
        addBeerToFavourites,
        removeBeerFromFavourites
      }}
    >
      {children}
    </BeersContext.Provider>
  );
};

export const useBeers = () => {
  const beers = React.useContext(BeersContext);

  if (!beers) {
    throw Error('useBeers needs to be used inside BeersContext');
  }

  return beers;
};
