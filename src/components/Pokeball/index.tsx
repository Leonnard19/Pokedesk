import Image from 'next/image';
import { useSelectedPokemons } from '../../context/SelectedPokemonsContext';

import styles from './styles.module.scss';

type TypePokemon = {
  image: string;
  id: number;
  name: string;
};

export function Pokeball({ pokemon }: { pokemon?: TypePokemon }) {
  const { isEditing, setIsEditing } = useSelectedPokemons();

  function editPokemon() {
    isEditing ? setIsEditing(undefined) : setIsEditing(pokemon?.id);
    console.log(pokemon?.name); // testing the selection
  }

  return (
    <div className={styles.container} onClick={editPokemon}>
      <div>
        <Image src="/assets/Pokeball1.svg" alt="img" width={65} height={65} />
      </div>

      {pokemon && (
        <div className={styles.pokemonImg}>
          {<Image src={pokemon.image} alt="img" width={70} height={70} unoptimized />}
        </div>
      )}
    </div>
  );
}
