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

  const addTeamButtonDisabled = selectedPokemons.length < 6 || !text;
  const removeButtonDisabled = !isEditing;

  return (
    <>
      <div className="flex gap-2 items-center my-4 px-4">
        <input
          className="font-bold text-slate-700 bg-indigo-300 focus:outline-blue-500 text-center rounded"
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <Image src="/assets/Vector.svg" alt="edit" width={14} height={14} />
      </div>
      <div className="flex flex-wrap justify-center h-48 pt-4 w-[85%] mx-auto bg-indigo-200 space-x-6">
        {selectedPokemons.map(pokemon => (
          <Pokeball key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="flex justify-end px-4 space-x-2 rounded p-2">
        <button
          className={removeButtonDisabled ? 'opacity-50' : ''}
          disabled={removeButtonDisabled}
          onClick={removePokemon}
        >
          <Image src="/assets/DeleteButton.svg" alt="delete" width={40} height={40} />
        </button>
        <button
          className={addTeamButtonDisabled ? 'opacity-50' : ''}
          onClick={() => addTeam({ title: text, pokemons: selectedPokemons })}
          disabled={addTeamButtonDisabled}
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
