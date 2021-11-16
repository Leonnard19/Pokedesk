import { createContext, ReactNode, useContext, useState } from "react";

type TypePokemon = {
  id: number;
  name: string;
  image: string;
  element1: string;
  element2?: string;
};

type TypeSelectedPokemons = {
  selectedPokemons: TypePokemon[];
  addPokemon: (pokemon: TypePokemon) => void;
  clearSelected: () => void;
};

const selectedPokemonsContext = createContext({} as TypeSelectedPokemons);

export function SelectedPokemonsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedPokemons, setSelectedPokemons] = useState<TypePokemon[]>([]);

  function clearSelected() {
    const arr: TypePokemon[] = [];
    setSelectedPokemons(arr);
  }

  function addPokemon(pokemon: TypePokemon) {
    const arr = [...selectedPokemons];

    if (selectedPokemons.includes(pokemon)) {
      const idx = arr.indexOf(pokemon);

      arr.splice(idx, 1);
      setSelectedPokemons(arr);

      return;
    }

    if (selectedPokemons.length === 6) {
      return;
    }

    arr.push(pokemon);
    setSelectedPokemons(arr);
  }

  return (
    <selectedPokemonsContext.Provider
      value={{ selectedPokemons, addPokemon, clearSelected }}
    >
      {children}
    </selectedPokemonsContext.Provider>
  );
}

export const useSelectedPokemons = () => useContext(selectedPokemonsContext);
