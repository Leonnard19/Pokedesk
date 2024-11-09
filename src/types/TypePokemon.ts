export type TypePokemon = {
  id: number;
  name: string;
  image: string;
  element1: string;
  element2?: string;
};

export type TypePokemonTeam = {
  id: string;
  title: string;
  pokemons: TypePokemon[];
};
