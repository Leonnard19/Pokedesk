import { Header } from '../components/Header';
import { useTeamsContext } from '../context/TeamsContext';
import { Pokeball } from '../components/Pokeball';

export default function Teams() {
  const { teams } = useTeamsContext();

  const mockTeams = [
    {
      title: 'My Team 1',
      pokemons: [
        {
          id: 12,
          name: 'butterfree',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
          element1: 'bug',
          element2: 'flying',
        },
        {
          id: 1,
          name: 'bulbasaur',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          element1: 'grass',
          element2: 'poison',
        },
        {
          id: 2,
          name: 'ivysaur',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          element1: 'grass',
          element2: 'poison',
        },
        {
          id: 47,
          name: 'parasect',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png',
          element1: 'bug',
          element2: 'grass',
        },
        {
          id: 46,
          name: 'paras',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png',
          element1: 'bug',
          element2: 'grass',
        },
        {
          id: 18,
          name: 'pidgeot',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
          element1: 'normal',
          element2: 'flying',
        },
      ],
    },
    {
      title: 'My Team 2',
      pokemons: [
        {
          id: 47,
          name: 'parasect',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png',
          element1: 'bug',
          element2: 'grass',
        },
        {
          id: 33,
          name: 'nidorino',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png',
          element1: 'poison',
        },
        {
          id: 22,
          name: 'fearow',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
          element1: 'normal',
          element2: 'flying',
        },
        {
          id: 15,
          name: 'beedrill',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
          element1: 'bug',
          element2: 'poison',
        },
        {
          id: 24,
          name: 'arbok',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
          element1: 'poison',
        },
        {
          id: 23,
          name: 'ekans',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
          element1: 'poison',
        },
      ],
    },
    {
      title: 'My Team 3',
      pokemons: [
        {
          id: 15,
          name: 'beedrill',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
          element1: 'bug',
          element2: 'poison',
        },
        {
          id: 26,
          name: 'raichu',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
          element1: 'electric',
        },
        {
          id: 25,
          name: 'pikachu',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
          element1: 'electric',
        },
        {
          id: 16,
          name: 'pidgey',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
          element1: 'normal',
          element2: 'flying',
        },
        {
          id: 32,
          name: 'nidoran-m',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png',
          element1: 'poison',
        },
        {
          id: 31,
          name: 'nidoqueen',
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png',
          element1: 'poison',
          element2: 'ground',
        },
      ],
    },
  ];

  return (
    <>
      <Header text="CREATE A NEW TEAM" />
      <div className="flex flex-col h-full pt-4">
        {mockTeams.map((team, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 0 ? 'rounded-t-md' : index === mockTeams.length - 1 ? 'rounded-b-md' : ''
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
