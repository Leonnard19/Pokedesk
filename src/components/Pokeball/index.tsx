import Image from 'next/image';

import styles from './styles.module.scss';

type TypePokemon = {
  image: string;
};

export function Pokeball({ pokemon }: { pokemon?: TypePokemon }) {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/assets/Pokeball1.svg" alt="img" width={75} height={75} />
      </div>
      <div className={styles.pokemonImg}>
        {pokemon?.image && (
          <Image src={pokemon.image} alt="img" width={70} height={70} unoptimized />
        )}
      </div>
    </div>
  );
}
