import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { PokemonList } from '../../components/Pokemon';
import { DetailsContext } from '../../context/DetailsContext';

test('shows loading in pokemon list', () => {
  render(
    <DetailsContext.Consumer>
      {() => <PokemonList />}
    </DetailsContext.Consumer>,
  );

  expect(screen.getByTitle('Loader')).toBeInTheDocument();
});

test('shows pokemon item in pokemon list', async () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;

  const { getByAltText } = render(
    <DetailsContext.Consumer>
      {() => <PokemonList />}
    </DetailsContext.Consumer>,
  );

  await waitFor(() => expect(screen.getByText(/^bulbasaur/)).toBeInTheDocument());
});