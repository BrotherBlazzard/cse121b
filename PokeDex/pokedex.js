function getType(x) {
  let type = 0;
  switch (x) {
    case 'normal':
      type = 1;
      break;
    case 'fighting':
      type = 2;
      break;
    case 'flying':
      type = 3;
      break;
    case 'poison':
      type = 4;
      break;
    case 'ground':
      type = 5;
      break;
    case 'rock':
      type = 6;
      break;
    case 'bug':
      type = 7;
      break;
    case '':
      type = 8;
      break;
  }
  return type;
}

document.querySelector('button').addEventListener('click', getPokeCards);

const output = (pokemens) => {
  pokemens.forEach((pokemon) => {
    let section = document.createElement('section');

    let pokeName = document.createElement('h3');
    pokeName.textContent = pokemon.names;

    let pokeType = document.createElement('h3');
    pokeType.textContent = pokemon.moves;

    section.appendChild(pokeName);
    section.appendChild(pokeType);

    document.querySelector('#pokeList').appendChild(section);
  });
};

async function getPokeCards() {
  const searchInput = document.querySelector('#search').value;
  if (searchInput != null) {
    let type = getType(searchInput);
    let url = `https://pokeapi.co/api/v2/type/${type}`;
    const response = await fetch(url);
    if (response.ok) {
      pokeList = await response.json();
      output(pokeList);
    }
  }
};
