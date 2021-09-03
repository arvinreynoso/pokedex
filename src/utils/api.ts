import { convertParamsToURLString } from './string';

const API_URL = 'https://pokeapi.co/api/v2';
const URL_REGEX =
  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;

async function request(path: string) {
  let newUrl: string;
  const checkUrl = path.match(URL_REGEX);

  if (checkUrl) {
    [newUrl] = checkUrl;
  } else {
    newUrl = `${API_URL}${path}`;
  }

  try {
    const response = await fetch(newUrl);

    if (!response.ok) {
      await response.text().then((text) => {
        throw Error(text);
      });
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonList(offset?: number, limit?: number) {
  const newUrl = convertParamsToURLString('/pokemon', { offset, limit });

  return await request(newUrl);
}

export async function getPokemon(id: number | string) {
  return await request(`/pokemon/${id}`);
}

export async function getPokemonSpecies(id: number) {
  return await request(`/pokemon-species/${id}`);
}

export async function getPokemonTypes(id: number) {
  return await request(`/type/${id}`);
}

export async function getPokemonEvolution(id: number) {
  return await request(`/evolution-chain/${id}`);
}
