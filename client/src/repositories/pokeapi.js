export const retrieve = async () => {
  const response = await fetch('/api/pokemons');
  const data = response.json();
  return data;
} 

export const profile = async (pokemonName) => {
  const response = await fetch(`/api/pokemons/${pokemonName}`);
  const data = response.json();
  return data;
} 

export const color = async (pokemonName) => {
  const response = await fetch(`/api/species/${pokemonName}`);
  const data = response.json();
  return data;
}

export const pokemonType = async (type) => {
  if(type && type !== 'All') {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = response.json();
    return data;
  }
}