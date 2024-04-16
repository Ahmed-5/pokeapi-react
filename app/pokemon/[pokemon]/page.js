'use client';

import Image from 'next/image';
import HexChart from '@/components/HexChart';
import { usePokemonDetail } from '@/hooks/usePokemon';

import { capitalizeFirstLetter } from '@/utils/str';
import { colors } from './consts';

const PokemonPage = ({ params: { pokemon } }) => {
    const { data: pokemonData, isLoading: pokemonLoading, error: pokemonError } = usePokemonDetail(pokemon);

    if (!pokemon) {
        return <div>No pokemon selected</div>;
    }

    if (pokemonLoading) return <div>Loading...</div>;
    if (pokemonError) return <div>Error: {pokemonError}</div>;

    console.log(pokemonData);

    const pokemonName = capitalizeFirstLetter(pokemon);

    return (
        <div className="w-10/12 mx-auto mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div className='flex justify-center'>
                        <h2 className="text-2xl font-bold mb-4 text-center align self-center">{pokemonName}</h2>
                        <Image src={pokemonData.sprites.front_default} width={100} height={100} alt={pokemonName} />
                    </div>


                    <p className="px-4 pt-2 text-center">
                        <span className="font-medium mr-2">Weight: </span>
                        {pokemonData.weight / 10} kilograms
                    </p>
                    <p className="px-4 text-center">
                        <span className="font-medium mr-2">Height: </span>
                        {pokemonData.height * 10} centimeters
                    </p>

                    <div className="px-4">
                        <h2 className="text-xl mt-6 mb-2 font-medium text-center">Types</h2>
                        <div className="flex gap-1 justify-center">
                            {
                                pokemonData.types.map(({ type }) =>
                                    type.name == "ghost" | type.name == "poison" | type.name == "dark" | type.name == "water" | type.name == "rock"
                                        ?
                                        <p style={{ backgroundColor: colors[type.name.toString()], }} key={type.slot} className="rounded-md w-24 text-center text-white">{type.name[0].toUpperCase() + type.name.slice(1)}</p>
                                        :
                                        <p style={{ backgroundColor: colors[type.name.toString()], }} key={type.slot} className="rounded-md w-24 text-center text-black">{type.name[0].toUpperCase() + type.name.slice(1)}</p>)
                            }
                        </div>
                    </div>

                    <div className="px-4">
                        <h2 className="text-xl mt-6 mb-2 font-medium text-center">Abilities</h2>
                        {pokemonData.abilities.map(({ ability }) => <p key={ability.slot} className="text-center">{"- " + ability.name[0].toUpperCase() + ability.name.slice(1)}</p>)}
                    </div>
                </div>

                <div>
                    <HexChart stats={pokemonData.stats} />
                </div>
            </div>
        </div>
    );
};

export default PokemonPage;


