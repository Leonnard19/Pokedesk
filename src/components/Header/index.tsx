import Link from 'next/link';
import styles from './styles.module.scss';

export function Header({ text }: { text: string }) {
  return (
    <div className={styles.mainHeader}>
      <div />
      <Link passHref href={text === 'TEAMS' ? '/teams' : '/'}>
        <h1>{text}</h1>
      </Link>
    </div>
  );
}
