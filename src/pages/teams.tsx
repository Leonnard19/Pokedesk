import { Header } from '../components/Header';
import { useTeamsContext } from '../context/TeamsContext';
import { Pokeball } from '../components/Pokeball';

export default function Teams() {
  const { teams } = useTeamsContext();

  return (
    <>
      <Header text="CREATE A NEW TEAM" />
      <div className="flex flex-col h-full pt-4">
        {teams.map((team, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 0
                  ? 'rounded-t-md'
                  : index === teams.length - 1
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
          );
        })}
      </div>
    </>
  );
}
