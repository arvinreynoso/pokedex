import React, { createContext, useState } from 'react';
import {
  getPokemon,
  getPokemonEvolution,
  getPokemonSpecies,
  getPokemonTypes,
} from '../utils/api';
import { extractIdFromUrl } from '../utils/string';

type Props = {
  children: React.ReactNode;
};

const defaultValue: ContextType = {
  loading: false,
  pokemonDetails: null,
  showDetails: false,
  getPokemonDetails: () => {},
  clearPokemonDetails: () => {},
};

export const DetailsContext = createContext<ContextType>(defaultValue);

function DetailsProvider({ children }: Props) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null,
  );
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPokemonDetails = async (id: number | string) => {
    setShowDetails(true);
    setLoading(true);

    try {
      let details: PokemonDetails = {
        id: 0,
        name: '',
        image: '',
        dimensions: {
          weightInKg: 0,
          heightInCm: 0,
        },
        types: [],
        abilities: [],
        stats: {
          health: 0,
          attack: 0,
          defense: 0,
          speed: 0,
          spAttack: 0,
          spDefense: 0,
          happiness: 0,
          experience: 0,
        },
        damageRelations: [],
        moves: [],
        evolutions: [],
        description: '',
      };

      const pokemon = await getPokemon(id);

      if (pokemon) {
        const pokemonTypes = await Promise.all<PokemonTypeDetails>(
          pokemon.types.map(async (value: PokemonType) => {
            return await getPokemonTypes(extractIdFromUrl(value.type.url));
          }),
        );
        const pokemonSpecies = await getPokemonSpecies(
          extractIdFromUrl(pokemon.species.url),
        );
        const pokemonEvolution = await getPokemonEvolution(
          extractIdFromUrl(pokemonSpecies.evolution_chain.url),
        );

        details.id = pokemon.id;
        details.name = pokemon.name;
        details.image = pokemon.sprites.front_default;
        details.dimensions = {
          weightInKg: parseInt(pokemon.weight) / 10,
          heightInCm: parseInt(pokemon.height) * 10,
        };
        details.types = pokemonTypes.map((value) => value.name);
        details.abilities = pokemon.abilities.map((value: PokemonAbilities) =>
          value.ability.name.replace(/-/g, ' '),
        );
        details.stats.happiness = parseInt(pokemonSpecies.base_happiness);
        details.stats.experience = parseInt(pokemon.base_experience);

        pokemon.stats.forEach((value: PokemonStats) => {
          details.stats = {
            ...details.stats,
            ...(value.stat.name === 'hp' && { health: value.base_stat }),
            ...(value.stat.name === 'attack' && { attack: value.base_stat }),
            ...(value.stat.name === 'defense' && { defense: value.base_stat }),
            ...(value.stat.name === 'speed' && { speed: value.base_stat }),
            ...(value.stat.name === 'special-attack' && {
              spAttack: value.base_stat,
            }),
            ...(value.stat.name === 'special-defense' && {
              spDefense: value.base_stat,
            }),
          };
        });

        pokemonTypes.forEach((value) => {
          const elementType = {
            [value.name]: {
              doubleDamageTo: value.damage_relations.double_damage_to.map(
                (type) => type.name,
              ),
              doubleDamageFrom: value.damage_relations.double_damage_from.map(
                (type) => type.name,
              ),
              halfDamageTo: value.damage_relations.half_damage_to.map(
                (type) => type.name,
              ),
              halfDamageFrom: value.damage_relations.half_damage_from.map(
                (type) => type.name,
              ),
            },
          };

          details.damageRelations = [...details.damageRelations, elementType];
        });

        details.moves = pokemon.moves.map((value: PokemonMoves) =>
          value.move.name.replace(/-/g, ' '),
        );
        details.evolutions = [pokemonEvolution.chain.species.name];

        let evolutionChain = pokemonEvolution.chain.evolves_to;

        while (evolutionChain.length > 0) {
          evolutionChain = evolutionChain
            .map((value: EvolutionChain) => {
              details.evolutions = [...details.evolutions, value.species.name];

              return value.evolves_to;
            })
            .flat();
        }

        details.description = pokemonSpecies.flavor_text_entries
          .filter((value: PokemonDescriptions) => value.language.name === 'en')
          .map((value: PokemonDescriptions) =>
            value.flavor_text.replace(/\n|\r|\f/g, ' '),
          )
          .join(' ');

        setPokemonDetails(details);
      }
    } catch (error) {
      setPokemonDetails(null);
      console.error(error);
    }

    setLoading(false);
  };

  const clearPokemonDetails = () => {
    setShowDetails(false);
    setPokemonDetails(null);
    setLoading(false);
  };

  return (
    <DetailsContext.Provider
      value={{
        pokemonDetails,
        loading,
        showDetails,
        getPokemonDetails,
        clearPokemonDetails,
      }}>
      {children}
    </DetailsContext.Provider>
  );
}

export default DetailsProvider;
