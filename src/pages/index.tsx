import { Header } from '../components/Header';
import { List } from '../components/List';
import { Teams } from '../components/Teams';

const Home = () => {
  return (
    <>
      <Header text="TEAMS" />
      <Teams />
      <List />
    </>
  );
};

export default Home;
