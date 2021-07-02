fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((pokemon) => {
      console.log(`==========${pokemon.name}==========`);
      console.log(pokemon);
      console.log(pokemon.url);
      console.log('============================');
    });
  })
  .catch(error => console.log(error));