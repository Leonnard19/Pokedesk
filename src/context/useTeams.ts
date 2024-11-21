import { createStore } from '../state';
import { TypePokemonTeam } from '../types';
import { clearSelectedPokemons } from './useSelectedPokemons';

export interface PokemonTeamsState {
  pokemonTeams: TypePokemonTeam[];
}

const initialState: PokemonTeamsState = {
  pokemonTeams: [],
};

export const usePokemonTeams = createStore<PokemonTeamsState>(initialState, 'pokemon_teams', {
  version: 1,
});

export function addPokemonTeam(pokemon_team: TypePokemonTeam) {
  const teams = usePokemonTeams.getState().pokemonTeams;

  if (pokemon_team.pokemons.length !== 6) return;

  usePokemonTeams.setState({
    pokemonTeams: [...teams, pokemon_team],
  });

  clearSelectedPokemons();
}

export const removePokemonTeam = (team_id: string) => {
  const teams = usePokemonTeams.getState().pokemonTeams;

  const newTeams = teams.filter(team => team.id !== team_id);

  usePokemonTeams.setState({
    pokemonTeams: newTeams,
  });
};
