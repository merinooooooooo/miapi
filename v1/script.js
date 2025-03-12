const getPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        if (!response.ok) throw new Error('Error al obtener los datos');
       
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        console.log(data.results)
 
        data.results.forEach(async (pokemon) => {  
            const pokemonResponse = await fetch(pokemon.url);  
            const pokemonData = await pokemonResponse.json();
 
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.id}" class="w-32 aspect-square object-cover">
                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${pokemonData.name}</h2>
                        <p class="text-gray-700">Tipo: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
                    </div>
                </div>  
            `;
 
            cardsParent.appendChild(card);
        });
 
    } catch (error) {
        console.error("Error:", error.message);
    }
};
 
const getPokemon2 = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};
 
getPokemon();
getPokemon2();