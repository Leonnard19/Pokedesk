import Image from "next/image";
import { useSelectedPokemons } from "../../context/SelectedPokemonsContext";

import styles from "./styles.module.scss";

type TypePokemon = {
  image: string;
  id: number;
  name: string;
};

export function Pokeball({ pokemon }: { pokemon?: TypePokemon }) {
  const { isEditing, setIsEditing } = useSelectedPokemons();

  function editPokemon() {
    if (window.location.href.includes("teams")) {
      return;
    }
    isEditing ? setIsEditing(undefined) : setIsEditing(pokemon?.id);
  }

  return (
    <div
      className={styles.container}
      onClick={editPokemon}
      style={
        !window.location.href.includes("teams") &&
        isEditing &&
        isEditing !== pokemon?.id
          ? {
              filter: "brightness(80%) grayscale(70%)",
            }
          : {}
      }
    >
      <div>
        <Image src="/assets/Pokeball1.svg" alt="img" width={65} height={65} />
      </div>

      {pokemon && (
        <div
          className={styles.pokemonImg}
          style={
            !window.location.href.includes("teams") &&
            isEditing &&
            isEditing === pokemon?.id
              ? {
                  filter: `drop-shadow(2px 4px 6px)`,
                }
              : {}
          }
        >
          {
            <Image
              src={pokemon.image}
              alt="img"
              width={70}
              height={70}
              unoptimized
            />
          }
        </div>
      )}
    </div>
  );
}
