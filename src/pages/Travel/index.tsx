import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components';

export const Travel = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Travel">
      <div className="travel-container">
        <div className="travel-header">{t('travel_italy_header')}</div>
        <Tooltip title="Naples" arrow placement="bottom">
          <img src="images/travel/italy_1.jpg" alt="travel-italy" />
        </Tooltip>
        <Tooltip title="Florance" arrow placement="bottom">
          <img src="images/travel/italy_2.jpg" alt="travel-italy" />
        </Tooltip>
        <Tooltip title="Venice" arrow placement="bottom">
          <img src="images/travel/italy_3.jpg" alt="travel-italy" />
        </Tooltip>
        <Tooltip title="Rome" arrow placement="bottom">
          <img src="images/travel/italy_4.jpg" alt="travel-italy" />
        </Tooltip>
      </div>
      <div className="travel-container">
        <div className="travel-header">{t('travel_germany_header')}</div>
        <Tooltip title="Hamburg" arrow placement="bottom">
          <img src="images/travel/germany_1.jpg" alt="travel-germany" />
        </Tooltip>
        <Tooltip title="Hamburg" arrow placement="bottom">
          <img src="images/travel/germany_2.jpg" alt="travel-germany" />
        </Tooltip>
        <Tooltip title="Lübeck" arrow placement="bottom">
          <img src="images/travel/germany_3.jpg" alt="travel-germany" />
        </Tooltip>
        <Tooltip title="Hamburg" arrow placement="bottom">
          <img src="images/travel/germany_4.jpg" alt="travel-germany" />
        </Tooltip>
      </div>
    </Layout>
  );
};
