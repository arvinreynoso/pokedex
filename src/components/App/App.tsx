import React from 'react';
import DetailsProvider, { DetailsContext } from '../../context/DetailsContext';
import { PokemonDetails, PokemonList } from '../Pokemon';
import SearchBar from '../SearchBar';

function App() {
  return (
    <DetailsProvider>
      <SearchBar />
      <DetailsContext.Consumer>
        {(value) => (value?.showDetails ? <PokemonDetails /> : <PokemonList />)}
      </DetailsContext.Consumer>
    </DetailsProvider>
  );
}

export default App;
