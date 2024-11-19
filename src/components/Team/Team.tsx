import Image from 'next/image';
import { useState } from 'react';
import { Pokeball } from '../Pokeball';
import {
  highlightPokemon,
  removeAllPokemons,
  removePokemons,
  useSelectedPokemons,
} from '../../context/useSelectedPokemons';
import { addPokemonTeam } from '../../context/useTeams';
import { TypePokemon } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const Team = () => {
  const [teamName, setTeamName] = useState('My Team');

  const selectedPokemons = useSelectedPokemons(state => state.selectedPokemons);
  const highlightedPokemons = useSelectedPokemons(state => state.highlightedPokemons);

  const resetButtonDisabled = selectedPokemons.length === 0;
  const addTeamButtonDisabled = selectedPokemons.length < 6 || !teamName;
  const removeButtonDisabled =
    !highlightedPokemons.length ||
    highlightedPokemons.some(id => !selectedPokemons.some(p => p.id === id));

  return (
    <>
      <div className="flex flex-wrap justify-between p-4 gap-2">
        <div className="flex gap-2 items-center">
          <input
            className="font-bold w-full max-w-48 text-slate-700 bg-indigo-300 focus:outline-blue-500 text-center rounded"
            onChange={e => setTeamName(e.target.value)}
            value={teamName}
            placeholder="Team name"
          />
          <Image src="/assets/Vector.svg" alt="edit" width={14} height={14} />
        </div>
        <button
          onClick={() => removeAllPokemons()}
          className={`flex cursor-pointer text-slate-100 font-semibold text-md bg-red-600 hover:bg-red-500 px-2 py-px rounded ${
            resetButtonDisabled ? 'opacity-50' : ''
          }`}
          disabled={resetButtonDisabled}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap w-[90%] justify-center content-center mx-auto h-48 bg-indigo-200 py-4 px-1 space-x-5 space-y-2 rounded-md">
        {selectedPokemons.map((pokemon: TypePokemon) => (
          <Pokeball
            onSelectPokemon={() => highlightPokemon(pokemon.id)}
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>
      <div className="flex justify-end px-4 space-x-2 rounded p-2">
        <button
          className={removeButtonDisabled ? 'opacity-50' : ''}
          disabled={removeButtonDisabled}
          onClick={() => removePokemons(highlightedPokemons)}
        >
          <Image src="/assets/DeleteButton.svg" alt="delete" width={40} height={40} />
        </button>
        <button
          className={addTeamButtonDisabled ? 'opacity-50' : ''}
          onClick={() =>
            addPokemonTeam({ id: uuidv4(), title: teamName, pokemons: selectedPokemons })
          }
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
};
