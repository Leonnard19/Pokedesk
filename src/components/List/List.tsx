import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypePokemon } from '../../types';
import { addPokemon, useSelectedPokemons } from '../../context/useSelectedPokemons';
import { pokemonColorsRelation } from '../../utils';
import { PacmanLoader } from 'react-spinners';

interface PokemonURL {
  pokemon_name: string;
  url: string;
}

export function List() {
  const [pokemons, setPokemons] = useState<TypePokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const selectedPokemons = useSelectedPokemons(state => state.selectedPokemons);

  useEffect(() => {
    setLoading(true);

    async function loadPokemon() {
      const { results }: { results: PokemonURL[] } = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=50'
      ).then(response => response.json());

      results.sort((a, b) => (a.pokemon_name > b.pokemon_name ? 1 : -1)); // alphabetical order

      const arr = [];

      for await (const poke of results) {
        const res = await fetch(poke.url).then(response => response.json());

        const pokemon = {
          id: res.id,
          name: res.name,
          image: res.sprites.other['official-artwork'].front_default,
          element1: res.types[0].type.name,
          element2: res.types[1]?.type.name,
        };
        arr.push(pokemon);
      }
      setPokemons(arr);
    }
    loadPokemon().then(() => setLoading(false));
  }, []);

  return (
    <div>
      <p className="font-bold p-4 text-lg text-slate-700">Choose 6 Pokémons:</p>
      {loading ? (
        <div className="flex items-center justify-center py-20 font-bold p-4 text-lg text-slate-700 space-x-4">
          <span>Loading</span>
          <PacmanLoader size={20} color={'#323c4d'} aria-label="Loading Spinner" />
        </div>
      ) : (
        <div className="flex flex-wrap bg-indigo-300 px-4 py-2 mb-4 rounded-lg gap-8 mx-auto w-[90%] h-[30rem] overflow-y-scroll">
          {pokemons.map((pokemon: TypePokemon) => (
            <div
              className="w-14 relative"
              key={pokemon.id}
              onClick={() => addPokemon(pokemon)}
            >
              <span className="flex text-xs font-semibold -mb-2 items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-slate-300">
                {'#' + pokemon.id}
              </span>
              <div className="relative cursor-pointer">
                <Image
                  src={pokemon.image}
                  alt="pokemon"
                  width={50}
                  height={50}
                  unoptimized
                  draggable={false}
                />
                <p className="text-xs font-semibold text-slate-700 text-nowrap">
                  {pokemon.name}
                </p>
                {/* check SVG*/}
                {selectedPokemons.includes(pokemon) && (
                  <div className="absolute top-0 opacity-70">
                    <Image
                      src="/assets/ConfirmationButton.svg"
                      alt="confirmation"
                      width={50}
                      height={50}
                      unoptimized
                    />
                  </div>
                )}
              </div>
              <div className="flex mt-1 space-x-[2.5px]">
                <div
                  className={`h-1 border border-black rounded ${
                    !pokemon.element2 ? 'w-full' : 'w-7'
                  }`}
                  style={{ background: pokemonColorsRelation[pokemon.element1] }}
                />
                {pokemon.element2 ? (
                  <div
                    className="h-1 w-7 border border-black rounded"
                    style={{ background: pokemonColorsRelation[pokemon.element2] }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
