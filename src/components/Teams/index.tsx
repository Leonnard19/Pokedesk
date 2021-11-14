import styles from './styles.module.scss';
import Image from 'next/image';
import { Pokeball } from '../Pokeball';

export function Teams() {
  return (
    <>
      <div className={styles.title}>
        <p>My team</p>
        <Image src="/assets/Vector.svg" alt="edit" width={10} height={10} />
      </div>

      <div className={styles.teamContainer}>
        <div>
          <Pokeball />
          <Pokeball />
          <Pokeball />
          <Pokeball />
          <Pokeball />
          <Pokeball />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button disabled>
          <Image src="/assets/DeleteButton.svg" alt="delete" width={40} height={40} />
        </button>
        <button disabled>
          <Image
            src="/assets/ConfirmationButton.svg"
            alt="confirmation"
            width={40}
            height={40}
          />
        </button>
      </div>
    </>
  );
}
