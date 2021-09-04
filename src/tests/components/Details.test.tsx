import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { PokemonDetails } from '../../components/Pokemon';
import { DetailsContext } from '../../context/DetailsContext';

test('shows not found in pokemon details', () => {
  const initialValue = {
    loading: false,
    pokemonDetails: null,
    showDetails: true,
    getPokemonDetails: () => {},
    clearPokemonDetails: () => {},
  };

  render(
    <DetailsContext.Provider value={initialValue}>
      <DetailsContext.Consumer>
        {() => <PokemonDetails />}
      </DetailsContext.Consumer>
    </DetailsContext.Provider>,
  );

  expect(screen.getByText(/^Pokemon Not Found/)).toHaveTextContent(
    'Pokemon Not Found',
  );
});

test('shows pokemon in pokemon details', () => {
  const initialValue = {
    loading: false,
    pokemonDetails: {
      id: 1,
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      dimensions: {
        weightInKg: 6.9,
        heightInCm: 70,
      },
      types: [],
      abilities: [],
      stats: {
        health: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        spAttack: 65,
        spDefense: 65,
        happiness: 70,
        experience: 64,
      },
      damageRelations: [],
      moves: [],
      evolutions: [],
      description: '',
    },
    showDetails: true,
    getPokemonDetails: () => {},
    clearPokemonDetails: () => {},
  };

  render(
    <DetailsContext.Provider value={initialValue}>
      <DetailsContext.Consumer>
        {() => <PokemonDetails />}
      </DetailsContext.Consumer>
    </DetailsContext.Provider>,
  );

  expect(screen.getByAltText('bulbasaur')).toBeTruthy();
});
