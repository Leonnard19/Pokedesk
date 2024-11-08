import { Header } from '../components/Header';
import { List } from '../components/List';
import { Team } from '../components/Team';

const Home = () => {
  return (
    <>
      <Header text="TEAMS" />
      <Team />
      <List />
    </>
  );
};

export default Home;
