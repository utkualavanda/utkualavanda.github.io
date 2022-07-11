import { Layout } from '../../components/Layout';
import resume from '../../static/resume.pdf';

export const Resume = () => {
  return (
    <Layout title="Resume">
      <iframe
        src={resume}
        title="resume"
        style={{ width: '100%', height: '1200px', marginBottom: '100px' }}
      />
    </Layout>
  );
};
