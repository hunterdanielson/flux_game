const getRandomNumber = max => Math.floor(Math.random() * max);

export const randomPokemon = () => {
  const randomPokemonNumber = getRandomNumber(800);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`)
    .then(res => res.json())
    .then(pokemon => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      health: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      moves: [
        pokemon.moves[0].move.name, 
        pokemon.moves[1].move.name,
        pokemon.moves[2].move.name,
        pokemon.moves[3].move.name,
      ]
    }));
    
};
