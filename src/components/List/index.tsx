import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelectedPokemons } from '../../context/SelectedPokemonsContext';
import styles from './styles.module.scss';

type TypePokemon = {
  id: number;
  name: string;
  image: string;
  element1: string;
  element2?: string;
};

const colorsRelation: any = {
  bug: '#89960b',
  dark: '#322c26',
  dragon: '#6b57d2',
  fairy: '#da93dd',
  fighting: '#80311d',
  fire: '#ec5d35',
  ghost: '#ad6eec',
  grass: '#68bb2b',
  ground: '#d0b155',
  normal: '#c3c0b8',
  poison: '#924694',
  psychic: '#da3063',
  steel: '#8f8e9e',
  water: '#5cc1ed',
  electric: '#f4cb38',
  ice: '#9bdefb',
  flying: '#5d74d5',
  rock: '#9d853c',
};

export function List() {
  const [pokemons, setPokemons] = useState<TypePokemon[]>([]);
  const { selectedPokemons, addPokemon } = useSelectedPokemons();

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
      <p className={styles.title}>Choose 6 Pokémons:</p>

      <div className={styles.listContainer}>
        {pokemons.map(pokemon => (
          <div key={pokemon.id} onClick={() => addPokemon(pokemon)}>
            <span>{'#' + pokemon.id}</span>

            <div className={styles.img}>
              <Image src={pokemon.image} alt="pokemon" width={50} height={50} unoptimized />

              <p className={styles.pokeName}>{pokemon.name}</p>
            </div>

            <div className={styles.bar}>
              <div style={{ background: colorsRelation[pokemon.element1] }} />
              {pokemon.element2 ? (
                <div style={{ background: colorsRelation[pokemon.element2] }} />
              ) : (
                <div />
              )}
            </div>
            {selectedPokemons.includes(pokemon) && (
              <div className={styles.confirmation}>
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
        ))}
      </div>
    </>
  );
}
