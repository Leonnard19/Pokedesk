import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypePokemon } from '../../types';
import { addPokemon, useSelectedPokemons } from '../../context/useSelectedPokemons';
import { pokemonColorsRelation } from '../../utils';

export function List() {
  const [pokemons, setPokemons] = useState<TypePokemon[]>([]);

  const selectedPokemons = useSelectedPokemons(state => state.selectedPokemons);

  useEffect(() => {
    async function loadPokemon() {
      const { results }: { results: { name: string; url: string }[] } = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=50'
      ).then(response => response.json());

      results.sort((a, b) => (a.name > b.name ? 1 : -1)); //ordem alfabética

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
    loadPokemon();
  }, []);

  return (
    <>
      <p className="font-bold p-4 text-lg text-slate-700">Choose 6 Pokémons:</p>
      <div className="flex flex-wrap bg-indigo-300 px-4 py-2 mb-4 rounded-lg gap-8 mx-auto w-[90%] h-[30rem] overflow-y-scroll">
        {pokemons.map((pokemon: TypePokemon) => (
          <div className="w-14 relative" key={pokemon.id} onClick={() => addPokemon(pokemon)}>
            <span className="flex text-xs font-semibold -mb-2 items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-slate-300">
              {'#' + pokemon.id}
            </span>
            <div className="relative cursor-pointer">
              <Image src={pokemon.image} alt="pokemon" width={50} height={50} unoptimized draggable={false} />
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
    </>
  );
}
