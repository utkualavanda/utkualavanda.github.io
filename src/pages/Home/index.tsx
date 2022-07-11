import { Layout } from '../../components/Layout';
import { PersonalInfo } from '../../components/PersonalInfo';

export const Home = () => {
  return (
    <Layout title="Utku Alavanda | Front-end Developer">
      <PersonalInfo />
      <div>
        Welcome to my personal website. Here you can find some of my personal
        information. You can also visit the tabs above to see more about my
        professional experiences and travels.
      </div>
    </Layout>
  );
};
