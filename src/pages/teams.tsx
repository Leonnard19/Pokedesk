import styles from '../styles/teams.module.scss';
import { Header } from '../components/Header';
import { useTeamsContext } from '../context/TeamsContext';
import { Pokeball } from '../components/Pokeball';

export default function Teams() {
  const { teams } = useTeamsContext();

  return (
    <>
      <Header text="CREATE A NEW TEAM" />

      <div className={styles.teamContainer}>
        {teams.map((team, index) => {
          return (
            <div key={index}>
              <div className={styles.title}>{team.title}</div>
              <Pokeball pokemon={team.pokemons[0]} />
              <Pokeball pokemon={team.pokemons[1]} />
              <Pokeball pokemon={team.pokemons[2]} />
              <Pokeball pokemon={team.pokemons[3]} />
              <Pokeball pokemon={team.pokemons[4]} />
              <Pokeball pokemon={team.pokemons[5]} />
              <div className={styles.bar}></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
