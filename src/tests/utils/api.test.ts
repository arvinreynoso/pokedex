import {
  getPokemon,
  getPokemonEvolution,
  getPokemonList,
  getPokemonSpecies,
  getPokemonTypes,
} from '../../utils/api';

test('get list of pokemons', async () => {
  return getPokemonList().then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        results: expect.arrayContaining([
          expect.objectContaining({ name: 'bulbasaur' }),
        ]),
      }),
    );
  });
});

test('get list of pokemons with empty results', async () => {
  return getPokemonList(10000, 10000).then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        results: expect.arrayContaining([]),
      }),
    );
  });
});

test('get pokemon by id', async () => {
  return getPokemon(1).then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        name: 'bulbasaur',
      }),
    );
  });
});

test('get pokemon by name', async () => {
  return getPokemon('squirtle').then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        name: 'squirtle',
      }),
    );
  });
});

test('get pokemon not found', async () => {
  return getPokemon('testing').catch((error) => {
    expect(error).toMatch('Not Found');
    expect.assertions(1);
  });
});

test('get pokemon species', async () => {
  return getPokemonSpecies(1).then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        name: 'bulbasaur',
      }),
    );
  });
});

test('get pokemon species not found', async () => {
  return getPokemonSpecies(999).catch((error) => {
    expect(error).toMatch('Not Found');
    expect.assertions(1);
  });
});

test('get pokemon types', async () => {
  return getPokemonTypes(1).then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        name: 'normal',
      }),
    );
  });
});

test('get pokemon types not found', async () => {
  return getPokemonTypes(999).catch((error) => {
    expect(error).toMatch('Not Found');
    expect.assertions(1);
  });
});

test('get pokemon evolution chain', async () => {
  return getPokemonEvolution(1).then((data) => {
    expect(data).toEqual(
      expect.objectContaining({
        chain: expect.objectContaining({
          species: expect.objectContaining({
            name: 'bulbasaur',
          }),
        }),
      }),
    );
  });
});

test('get pokemon evolution chain not found', async () => {
  return getPokemonEvolution(999).catch((error) => {
    expect(error).toMatch('Not Found');
    expect.assertions(1);
  });
});
