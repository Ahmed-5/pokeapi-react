export async function fetchPokemonCategories() {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    if (!response.ok) {
        throw new Error('Failed to fetch Pokemon categories');
    }
    const data = await response.json();
    return data.results;
}

export async function fetchPokemonByCategory(category) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokemon by category');
    }
    const data = await response.json();
    return data.pokemon;
}

export async function fetchPokemonDetail(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokemon detail');
    }
    const data = await response.json();
    return data;
}
