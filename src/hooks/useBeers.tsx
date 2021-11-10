import React, { FunctionComponent } from 'react';
import { BeerProps } from '../components/Beer';

interface ContextValue {
  beers: BeerProps[];
  page: number;
  isLoading: boolean;
  loadNextPage: () => void;
}

export const BeersContext = React.createContext({} as ContextValue);

const fetchBeers = async(page: number) => {
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=16`)
}

export const BearsProvider: FunctionComponent = ({children}) => {
  const [beers, setBeers] = React.useState<BeerProps[]>([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const loadNextPage = () => {
    setPage(prevPage => prevPage + 1)
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
        page,
        isLoading,
        loadNextPage,
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
