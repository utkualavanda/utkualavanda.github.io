import { Layout } from '../../components/Layout';

export const Travel = () => {
  return (
    <Layout title="Travel">
      <div className="travel-container">
        <div className="travel-header">Italy</div>
        <img src="images/travel/italy_1.jpg" alt="travel-italy" />
        <img src="images/travel/italy_2.jpg" alt="travel-italy" />
        <img src="images/travel/italy_3.jpg" alt="travel-italy" />
        <img src="images/travel/italy_4.jpg" alt="travel-italy" />
      </div>
      <div className="travel-container">
        <div className="travel-header">Germany</div>
        <img src="images/travel/germany_1.jpg" alt="travel-germany" />
        <img src="images/travel/germany_2.jpg" alt="travel-germany" />
        <img src="images/travel/germany_3.jpg" alt="travel-germany" />
        <img src="images/travel/germany_4.jpg" alt="travel-germany" />
      </div>
    </Layout>
  );
};
