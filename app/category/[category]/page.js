'use client';

import Link from 'next/link';
import { usePokemonByCategory } from '@/hooks/usePokemon';
import { capitalizeFirstLetter } from '@/utils/str';

const CategoryPage = ({ params: { category } }) => {
    const { data: pokemonData, isLoading: pokemonLoading, error: pokemonError } = usePokemonByCategory(category);

    if (!category) {
        return <div>No category selected</div>;
    }

    if (pokemonLoading) return <div>Loading...</div>;
    if (pokemonError) return <div>Error: {pokemonError}</div>;

    const categoryName = capitalizeFirstLetter(category);

    return (
        <div className="max-w-md mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">{categoryName} Pokemons</h2>
            <h3 className="text-xl font-semibold mt-8 mb-2">Pokemons in {categoryName} category:</h3>
            <ul className="grid grid-cols-2 gap-4">
                {pokemonData.map(p => {
                    const { pokemon } = p;
                    return (
                        <li key={pokemon.name}>
                            <Link
                                href={{ pathname: `/pokemon/${pokemon.name}`}}
                                className={`block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-indigo-800`}
                            >
                                {capitalizeFirstLetter(pokemon.name)}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default CategoryPage;
