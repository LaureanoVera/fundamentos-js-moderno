const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    const names = data.results.map(poke => poke.name)
    console.log(names);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();