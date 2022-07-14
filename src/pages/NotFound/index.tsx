import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, Layout } from '../../components';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Layout title={t('page_not_found_browser_title')}>
      <div className="page-not-found">
        <img src="images/404.png" alt="page not found" />
        <div className="return-home-button">
          <Button
            color="warning"
            label={t('page_not_found_return_home')}
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </Layout>
  );
};
