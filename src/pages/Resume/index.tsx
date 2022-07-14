import { useTranslation } from 'react-i18next';

import { Layout } from '../../components';
import resume from '../../static/resume.pdf';

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('header_navigation_resume')}>
      <iframe
        src={resume}
        title="resume"
        style={{ width: '100%', height: '1200px' }}
      />
    </Layout>
  );
};
