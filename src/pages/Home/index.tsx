import { useTranslation } from 'react-i18next';

import { Layout } from '../../components';
import { PersonalInfo } from './PersonalInfo';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Utku Alavanda | Front-end Developer">
      <PersonalInfo />
      <div>{t('home_welcome_message')}</div>
    </Layout>
  );
};
