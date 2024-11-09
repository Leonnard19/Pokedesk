import { Header } from '../components/Header';
import { Pokeball } from '../components/Pokeball';
import { removePokemonTeam, usePokemonTeams } from '../context/useTeams';

export default function Teams() {
  const pokemonTeams = usePokemonTeams(state => state.pokemonTeams);

  return (
    <>
      <Header text="CREATE A NEW TEAM" />
      <div className="flex flex-col h-full pt-4">
        {pokemonTeams.map((team, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div
                className={`${
                  pokemonTeams.length === 1
                    ? 'rounded-md'
                    : index === 0
                    ? 'rounded-t-md'
                    : index === pokemonTeams.length - 1
                    ? 'rounded-b-md'
                    : ''
                } container flex flex-wrap bg-indigo-200 justify-between md:justify-center w-[90%] p-3 mx-auto space-x-6`}
              >
                <span className="title font-bold text-sm text-slate-700 bg-indigo-300 h-6 p-2 mx-4 mb-4 flex items-center rounded-md">
                  {team.title}
                </span>
                <div className="team flex flex-wrap justify-center space-x-6 space-y-2">
                  {team.pokemons.map(pokemon => (
                    <Pokeball key={pokemon.id} pokemon={pokemon} />
                  ))}
                </div>
                <div className="bar h-px bg-slate-900 w-11/12 m-4" />
              </div>

              <button
                onClick={() => removePokemonTeam(team.id)}
                className="flex self-end items-center justify-center cursor-pointer w-[20%] min-w-20 mb-2 mr-2 mt-1 text-slate-100 font-semibold text-md bg-indigo-700 hover:bg-red-600 rounded"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
