import { useTranslation } from 'react-i18next';

export const PersonalInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="personal-info">
      <div className="personal-info-image">
        <img src="images/profile-picture.jpg" alt="personal img" />
      </div>
      <div className="details-list">
        <div className="details-list__item">
          <div className="key">{t('home_personal_info_name_key')}</div>
          <div className="value">{t('home_personal_info_name_value')}</div>
        </div>
        <div className="details-list__item">
          <div className="key">{t('home_personal_info_birth_year_key')}</div>
          <div className="value">1997</div>
        </div>
        <div className="details-list__item">
          <div className="key">{t('home_personal_info_nationality_key')}</div>
          <div className="value">
            {t('home_personal_info_nationality_value')}
          </div>
        </div>
        <div className="details-list__item">
          <div className="key">{t('home_personal_info_residence_key')}</div>
          <div className="value">{t('home_personal_info_residence_value')}</div>
        </div>
        <div className="details-list__item">
          <div className="key">{t('home_personal_info_workplace_key')}</div>
          <div className="value">{t('home_personal_info_workplace_value')}</div>
        </div>
        <div className="details-list__item">
          <div className="key">{t('home_personal_info_job_title_key')}</div>
          <div className="value">{t('home_personal_info_job_title_value')}</div>
        </div>
      </div>
    </div>
  );
};
