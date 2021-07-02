const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    data.results.forEach(pokemon => {
      console.log(pokemon.url);
    });
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();