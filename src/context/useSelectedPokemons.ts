import { createStore } from '../state';
import { TypePokemon } from '../types';

export interface SelectedPokemonsState {
  selectedPokemons: TypePokemon[];
  highlightedPokemons: number[];
}

const initialState: SelectedPokemonsState = {
  selectedPokemons: [],
  highlightedPokemons: [],
};

export const useSelectedPokemons = createStore<SelectedPokemonsState>(
  initialState,
  'selected_pokemon'
  // {
  //   version: 1,
  // }
);

export function addPokemon(pokemon: TypePokemon) {
  const selectedPokemons = [...useSelectedPokemons.getState().selectedPokemons];

  if (selectedPokemons.includes(pokemon)) {
    const idx = selectedPokemons.indexOf(pokemon);

    selectedPokemons.splice(idx, 1);
  } else if (selectedPokemons.length < 6) {
    selectedPokemons.push(pokemon);
  }

  useSelectedPokemons.setState({
    selectedPokemons: selectedPokemons,
  });
}

export function removeSinglePokemon(pokemon_id: number) {
  const selectedPokemons = useSelectedPokemons.getState().selectedPokemons;
  const newSelectedPokemons = selectedPokemons.filter(pokemon => pokemon.id !== pokemon_id);

  useSelectedPokemons.setState({
    selectedPokemons: newSelectedPokemons,
  });
}

export function removePokemons(pokemonIds: number[]) {
  const selectedPokemons = useSelectedPokemons.getState().selectedPokemons;

  const newSelectedPokemons = selectedPokemons.filter(p => !pokemonIds.includes(p.id));

  useSelectedPokemons.setState({
    selectedPokemons: newSelectedPokemons,
  });

  unhighlightPokemons();
}

export function removeAllPokemons() {
  useSelectedPokemons.setState({
    selectedPokemons: [],
  });
}

export function highlightPokemon(pokemon_id: number) {
  const highlightedPokemons = [...useSelectedPokemons.getState().highlightedPokemons];

  if (highlightedPokemons.includes(pokemon_id)) {
    const idx = highlightedPokemons.indexOf(pokemon_id);

    highlightedPokemons.splice(idx, 1);
  } else {
    highlightedPokemons.push(pokemon_id);
  }

  useSelectedPokemons.setState({
    highlightedPokemons: highlightedPokemons,
  });
}

export function unhighlightPokemons() {
  useSelectedPokemons.setState({
    highlightedPokemons: [],
  });
}

export function clearSelectedPokemons() {
  useSelectedPokemons.setState({
    selectedPokemons: [],
  });
}
