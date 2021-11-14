import { Header } from '../components/Header';
import { List } from '../components/List';
import { Teams } from '../components/Teams';
import styles from '../styles/Home.module.scss'; //

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Teams />
      <List />
    </div>
  );
};

export default Home;
