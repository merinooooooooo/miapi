const getRickAndMortyCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        console.log(data.results);

        data.results.forEach(character => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="${character.image}" alt="${character.name}" class="w-32 aspect-square object-cover">
                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${character.name}</h2>
                        <p class="text-gray-700">Especie: ${character.species}</p>
                        <p class="text-gray-700">Estado: ${character.status}</p>
                    </div>
                </div>
            `;

            cardsParent.appendChild(card);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
};

getRickAndMortyCharacters();
