interface PokemonDetails {
  id: number;
  name: string;
  image: string;
  dimensions: {
    weightInKg: number;
    heightInCm: number;
  };
  types: string[];
  abilities: string[];
  stats: {
    health: number;
    attack: number;
    defense: number;
    speed: number;
    spAttack: number;
    spDefense: number;
    happiness: number;
    experience: number;
  };
  damageRelations: {
    [key: string]: {
      doubleDamageTo: string[];
      halfDamageFrom: string[];
      doubleDamageFrom: string[];
      halfDamageTo: string[];
    };
  }[];
  moves: string[];
  evolutions: string[];
  description: string;
}

type ContextType = {
  loading: boolean;
  pokemonDetails: PokemonDetails | null;
  showDetails: boolean;
  getPokemonDetails: (id: number | string) => void;
  clearPokemonDetails: () => void;
};

type EvolutionChain = {
  species: {
    name: string;
    url: string;
  };
  evolves_to: EvolutionChain[];
};

type PokemonAbilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type PokemonDamageRelations = {
  [key: string]: { name: string; url: string }[];
};

type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonMoves = {
  move: {
    name: string;
    url: string;
  };
};

type PokemonDescriptions = {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonTypeDetails = {
  id: number;
  name: string;
  damage_relations: {
    [key: string]: { name: string; url: string }[];
  };
};
