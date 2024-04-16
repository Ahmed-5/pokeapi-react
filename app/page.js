'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePokemonCategories } from '@/hooks/usePokemon';
import { fetchPokemonDetail } from '@/utils/api';

const CategoryPage = () => {
  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = usePokemonCategories();
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  if (categoriesLoading) return <div>Loading...</div>;
  if (categoriesError) return <div>Error: {categoriesError}</div>;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const pokemon = await fetchPokemonDetail(searchTerm);
      if (!pokemon) return;
      router.push(`/pokemon/${pokemon.name}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto my-4">
      <h2 className="text-2xl font-bold mb-4">Pokemon Categories</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              e.preventDefault();
              setSearchTerm(e.target.value.toLowerCase());
            }}
            placeholder="Search Pokemon..."
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-indigo-800"
          >
            Search
          </button>
        </div>
      </form>
      <ul className="grid grid-cols-2 gap-4">
        {categories.map(category => {
          return (
            <li key={category.name}>
              <Link
                href={{ pathname: `/category/${category.name}` }}
                className={`block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-indigo-800`}
              >
                {category.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default CategoryPage;
