import React, { useContext, useState } from 'react';
import { DetailsContext } from '../../context/DetailsContext';
import BackButton from './BackButton';

function SearchBar() {
  const [search, setSearch] = useState('');

  const { showDetails, getPokemonDetails, clearPokemonDetails } = useContext(
    DetailsContext,
  ) as ContextType;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search.length > 0) {
      getPokemonDetails(search.toLowerCase());
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (showDetails && event.target.value.length === 0) {
      clearPokemonDetails();
    }

    setSearch(event.target.value);
  };

  const handleReturn = () => {
    clearPokemonDetails();
    setSearch('');
  };

  return (
    <div className="flex flex-row">
      {showDetails && (
        <BackButton
          className="px-1"
          size={36}
          color="#000000"
          onClick={() => handleReturn()}
        />
      )}

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative flex-1 text-black h-12 my-4 md:my-6">
        <input
          value={search}
          onChange={(e) => handleInputChange(e)}
          className="w-full h-full rounded-full pl-4 pr-36 border-black border-2 placeholder-gray-400 focus:outline-none uppercase caret-transparent"
          type="search"
          placeholder="Name"
        />

        <button
          type="submit"
          className="absolute inset-y-0 right-0 rounded-full text-white px-4 flex items-center border-black border-2 bg-blue-500 uppercase">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
