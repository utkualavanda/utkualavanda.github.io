import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';

import { languageOptionsConst } from '../../common/constants';
import { Select } from '../../components';

export const Header = () => {
  const { t } = useTranslation();
  const cookies: string[][] = document.cookie
    .split(';')
    .map((e) => e.split('='));
  const languageCode: string[] = cookies?.filter(
    (cookie: string[]) => cookie[0] === 'i18next'
  )[0];

  return (
    <div className="page-header">
      <Link to="/">
        <img src="images/person.png" alt="person" />
      </Link>
      <ul>
        <li>
          <NavLink to="/resume">{t('header_navigation_resume')}</NavLink>
        </li>
        <li>
          <NavLink to="/travel">{t('header_navigation_travel')}</NavLink>
        </li>
        <li>
          <Select
            options={{
              data: languageOptionsConst,
              displayField: 'Name',
              displayValue: 'Value',
            }}
            value={languageCode?.length ? languageCode[1] : ''}
            onChange={(val) => {
              i18next.changeLanguage(val);
            }}
          >
            Travel
          </Select>
        </li>
      </ul>
    </div>
  );
};
