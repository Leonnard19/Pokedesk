import styles from './styles.module.scss';
import Image from 'next/image';

import { useState } from 'react';
import { Pokeball } from '../Pokeball';
import { useSelectedPokemons } from '../../context/SelectedPokemonsContext';
import { useTeamsContext } from '../../context/TeamsContext';

export function Teams() {
  const [text, setText] = useState('My Team');
  const { selectedPokemons, setSelectedPokemons, isEditing, setIsEditing } =
    useSelectedPokemons();
  const { addTeam } = useTeamsContext();

  function removePokemon() {
    const pokemon = selectedPokemons.find(pokemon => {
      return pokemon.id === isEditing;
    });

    if (pokemon) {
      const newSelectedPokemons = selectedPokemons.filter(
        pokemon => pokemon.id !== isEditing
      );

      setSelectedPokemons(newSelectedPokemons);
      setIsEditing(undefined);
    }
  }

  return (
    <>
      <div className={styles.title}>
        <input onChange={e => setText(e.target.value)} value={text} />
        <div>
          <Image src="/assets/Vector.svg" alt="edit" width={10} height={10} />
        </div>
      </div>

      <div className={styles.teamContainer}>
        <div>
          <Pokeball pokemon={selectedPokemons[0]} />
          <Pokeball pokemon={selectedPokemons[1]} />
          <Pokeball pokemon={selectedPokemons[2]} />
          <Pokeball pokemon={selectedPokemons[3]} />
          <Pokeball pokemon={selectedPokemons[4]} />
          <Pokeball pokemon={selectedPokemons[5]} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button disabled={!isEditing} onClick={removePokemon}>
          <Image src="/assets/DeleteButton.svg" alt="delete" width={40} height={40} />
        </button>
        <button
          onClick={() => addTeam({ title: text, pokemons: selectedPokemons })}
          disabled={selectedPokemons.length !== 6}
        >
          <Image
            src="/assets/ConfirmationButton.svg"
            alt="confirmation"
            width={40}
            height={40}
          />
        </button>
      </div>
    </>
  );
}
