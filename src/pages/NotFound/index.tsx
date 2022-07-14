import { useTranslation } from 'react-i18next';

import { Layout } from '../../components';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t('page_not_found_browser_title')}>
      <div className="page-not-found">
        <img src="images/404.png" alt="page not found" />
      </div>
    </Layout>
  );
};
