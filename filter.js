const pokemons = [
  {name: 'squirtle', type: 'water'},
  {name: 'charmander', type: 'fire'},
  {name: 'bulbasaur', type: 'plant'},
  {name: 'charizard', type: 'fire'}
]

const firePokemons = pokemons.filter(poke => poke.type === 'fire')
console.log(firePokemons);