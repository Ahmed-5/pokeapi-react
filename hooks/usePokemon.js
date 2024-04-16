import { useQuery } from 'react-query';
import { fetchPokemonCategories, fetchPokemonByCategory, fetchPokemonDetail } from '../utils/api';

export function usePokemonCategories() {
    return useQuery('pokemonCategories', fetchPokemonCategories);
}

export function usePokemonByCategory(category) {
    return useQuery(['pokemonByCategory', category], () => fetchPokemonByCategory(category), {
        enabled: !!category,
    });
}

export function usePokemonDetail(id) {
    return useQuery(['pokemonDetail', id], () => fetchPokemonDetail(id), {
        enabled: !!id,
    });
}
