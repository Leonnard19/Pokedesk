import { createContext, ReactNode, useContext, useState } from 'react';

type TypePokemon = {
  id: number;
  name: string;
  image: string;
  element1: string;
  element2?: string;
};

type TypeTeam = {
  title: string;
  pokemons: TypePokemon[];
};

type TypeTeamsContext = {
  teams: TypeTeam[];
  addTeam: (team: TypeTeam) => void;
};

const teamsContext = createContext({} as TypeTeamsContext);

export function TeamsContextProvider({ children }: { children: ReactNode }) {
  const [teams, setTeams] = useState<TypeTeam[]>([]);

  function addTeam(team: TypeTeam) {
    const arr = [...teams];
    arr.push(team);
    setTeams(arr);
  }

  return <teamsContext.Provider value={{ teams, addTeam }}>{children}</teamsContext.Provider>;
}

export const useTeamsContext = () => useContext(teamsContext);
