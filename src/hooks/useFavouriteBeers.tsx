import React, { FunctionComponent } from 'react';

interface ContextValue {
  favouriteBeers: number[];
  addBeerToFavourites: (id: number) => void;
  removeBeerFromFavourites: (id: number) => void;
  isFavouriteBeersSidebarOpen: boolean;
  openFavouriteBeersSidebar: () => void;
  closeFavouriteBeersSidebar: () => void;
}

export const FavouriteBeersContext = React.createContext({} as ContextValue);

export const FavouriteBeersProvider: FunctionComponent = ({children}) => {
  const [favouriteBeers, setFavouriteBeers] = React.useState<number[]>([]);
  const [isFavouriteBeersSidebarOpen, setIsFavouriteBeersSidebarOpen] = React.useState(false);

  const addBeerToFavourites = (id: number) => {
    setFavouriteBeers(prevState => [...prevState, id]);
  }

  const removeBeerFromFavourites = (id: number) => {
    setFavouriteBeers(favouriteBeers.filter((i) => i !== id));
  }

  const openFavouriteBeersSidebar = () => {
    setIsFavouriteBeersSidebarOpen(true);
  }

  const closeFavouriteBeersSidebar = () => {
    setIsFavouriteBeersSidebarOpen(false);
  }

  return (
    <FavouriteBeersContext.Provider
      value={{
        favouriteBeers,
        addBeerToFavourites,
        removeBeerFromFavourites,
        isFavouriteBeersSidebarOpen,
        openFavouriteBeersSidebar,
        closeFavouriteBeersSidebar
      }}
    >
      {children}
    </FavouriteBeersContext.Provider>
  );
};

export const useFavouriteBeers = () => {
  const beers = React.useContext(FavouriteBeersContext);

  if (!beers) {
    throw Error('useBeers needs to be used inside BeersContext');
  }

  return beers;
};
