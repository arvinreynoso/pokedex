import React, { useCallback, useEffect, useRef, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { Error } from '../../Alerts';
import Loader from '../../Loader';
import ListItem from './ListItem';

const FETCH_LIMIT = 20;

function List() {
  const [page, setPage] = useState(0);
  const {
    loading: scrollLoading,
    error,
    pokemons,
    hasMore,
  } = useFetch(page, FETCH_LIMIT);
  const [showError, setShowError] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const lastPokemonElementRef = useCallback(
    (node) => {
      if (scrollLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [scrollLoading, hasMore],
  );

  useEffect(() => {
    if (error) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <>
      <div className="flex-1 overflow-y-scroll grid grid-cols-2 gap-2 md:grid-cols-4 text-xs mb-4">
        {pokemons.map((pokemon) => {
          if (pokemons.length === pokemon.id) {
            return (
              <ListItem
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                innerRef={lastPokemonElementRef}
              />
            );
          } else {
            return (
              <ListItem key={pokemon.id} id={pokemon.id} name={pokemon.name} />
            );
          }
        })}
      </div>

      {scrollLoading && (
        <Loader className="loader absolute" size={128} color="#3B82F6" />
      )}

      {showError && <Error onClose={() => setShowError(false)}>{error}</Error>}
    </>
  );
}

export default List;
