import { useEffect, useState } from 'react';
import { getPokemonList } from '../utils/api';
import { extractIdFromUrl } from '../utils/string';

const NUM_OF_POKEMONS = 898;

function useFetch(page: number, limit: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pokemons, setPokemons] = useState<{ id: number; name: string }[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    setLoading(true);
    setError('');

    const offset = page * limit;
    const nextFetch = offset + limit;
    const nearLimit = nextFetch > NUM_OF_POKEMONS;

    getPokemonList(offset, nearLimit ? NUM_OF_POKEMONS - offset : limit)
      .then((response) => {
        if (isSubscribed) {
          setPokemons((pokemons) =>
            Array.from(
              new Set([
                ...pokemons,
                ...response.results.map((value: Record<string, unknown>) => {
                  return { id: extractIdFromUrl(value.url), name: value.name };
                }),
              ]),
            ),
          );

          setHasMore(!nearLimit);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isSubscribed) {
          setError(error);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [page, limit]);

  return { loading, error, pokemons, hasMore };
}

export default useFetch;
