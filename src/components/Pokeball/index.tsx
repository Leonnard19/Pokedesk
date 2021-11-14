import Image from 'next/image';

import styles from './styles.module.scss';

export function Pokeball() {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/assets/Pokeball1.svg" alt="img" width={75} height={75} />
      </div>
    </div>
  );
}
