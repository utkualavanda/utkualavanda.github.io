import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import i18next from 'i18next';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';

import { languageOptionsConst } from '../../common/constants';
import { Select } from '../../components';

export const Header = () => {
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies(['i18next', 'theme']);

  useEffect(() => {
    if (cookies.theme) {
      if (cookies.theme === 'light') {
        document
          .querySelector('body')!
          .style.setProperty('background', '#eee', 'important');
        document
          .querySelector('body')!
          .style.setProperty('color', '#000', 'important');
        document
          .querySelector<HTMLElement>('.header-home-icon')!
          .style.setProperty(
            '-webkit-filter',
            'grayscale(0) invert(0)',
            'important'
          );
        document
          .querySelector<HTMLElement>('.page-footer img')!
          .style.setProperty('filter', 'grayscale(0) invert(0)', 'important');
        document
          .querySelector<HTMLElement>('.page-footer__github-logo')!
          .style.setProperty(
            '-webkit-filter',
            'grayscale(0) invert(0)',
            'important'
          );
        document
          .querySelector<HTMLElement>('.page-footer__github-logo')!
          .style.setProperty('filter', 'grayscale(0) invert(0)', 'important');
      } else {
        document
          .querySelector('body')!
          .style.setProperty('background', '#000', 'important');
        document
          .querySelector('body')!
          .style.setProperty('color', '#eee', 'important');
        document
          .querySelector<HTMLElement>('.header-home-icon')!
          .style.setProperty(
            '-webkit-filter',
            'grayscale(1) invert(1)',
            'important'
          );
        document
          .querySelector<HTMLElement>('.header-home-icon')!
          .style.setProperty('filter', 'grayscale(1) invert(1)', 'important');
        document
          .querySelector<HTMLElement>('.page-footer__github-logo')!
          .style.setProperty('filter', 'grayscale(1) invert(1)', 'important');
        document
          .querySelector<HTMLElement>('.page-footer__github-logo')!
          .style.setProperty(
            '-webkit-filter',
            'grayscale(1) invert(1)',
            'important'
          );
      }
    } else {
      setCookie('theme', 'light');
    }
    //eslint-disable-next-line
  }, [cookies.theme]);

  return (
    <div className="page-header">
      <Link to="/">
        <img
          src="images/person.png"
          alt="person"
          className="header-home-icon"
        />
      </Link>
      <ul>
        <li>
          <NavLink to="/resume">{t('header_navigation_resume')}</NavLink>
        </li>
        <li>
          <NavLink to="/travel">{t('header_navigation_travel')}</NavLink>
        </li>
        <li>
          <IconButton
            onClick={() => {
              console.log('test');
              setCookie('theme', cookies.theme === 'light' ? 'dark' : 'light');
            }}
          >
            <Tooltip
              title={
                cookies.theme === 'light'
                  ? t('header_dark_theme_mode')
                  : t('header_light_theme_mode')
              }
              arrow
              placement="top-end"
            >
              <img
                src={
                  cookies.theme === 'light'
                    ? 'images/dark-theme.png'
                    : 'images/light-theme.png'
                }
                alt="Website theme"
              />
            </Tooltip>
          </IconButton>
        </li>
        <li>
          <Select
            options={{
              data: languageOptionsConst,
              displayField: 'Name',
              displayValue: 'Value',
            }}
            value={cookies.i18next || navigator.language.split('-')[0]}
            onChange={(val) => {
              setCookie('i18next', val);
              i18next.changeLanguage(val);
            }}
          />
        </li>
      </ul>
    </div>
  );
};
