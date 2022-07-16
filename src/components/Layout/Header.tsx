import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Menu,
  MenuOpen,
  FlightTakeoff,
  Description,
} from '@mui/icons-material';
import i18next from 'i18next';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';

import {
  languageOptionsConst,
  languageOptionsEnum,
} from '../../common/constants';

interface INavigationItem {
  path: string;
  text: string;
  icon: any;
}

export const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies(['i18next', 'theme']);
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  const navigationItems: INavigationItem[] = [
    {
      path: '/resume',
      text: t('header_navigation_resume'),
      icon: <Description />,
    },
    {
      path: '/travel',
      text: t('header_navigation_travel'),
      icon: <FlightTakeoff />,
    },
  ];

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
        {navigationItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
        <li>
          <IconButton
            onClick={() =>
              setCookie('theme', cookies.theme === 'light' ? 'dark' : 'light')
            }
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
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
            }}
            value={
              cookies.i18next
                ? cookies.i18next
                : languageOptionsConst?.filter(
                    (languageOpt) =>
                      languageOpt.Value === navigator.language.split('-')[0]
                  )?.length
                ? navigator.language.split('-')[0]
                : languageOptionsEnum.English
            }
          >
            {languageOptionsConst.map((languageOpt, i) => (
              <MenuItem
                key={i}
                value={languageOpt.Value}
                onClick={() => {
                  setCookie('i18next', languageOpt.Value);
                  i18next.changeLanguage(String(languageOpt.Value));
                }}
              >
                <span
                  key={i}
                  className={`flag-icon flag-icon-${languageOpt.CountryCode}`}
                />
                {languageOpt.Name}
              </MenuItem>
            ))}
          </Select>
        </li>
        <li className="burger-menu-button">
          <IconButton
            onClick={() => setShowBurgerMenu((prevState) => !prevState)}
          >
            {showBurgerMenu ? <MenuOpen /> : <Menu />}
          </IconButton>
        </li>
        <Drawer
          anchor="right"
          open={showBurgerMenu}
          onClose={() => setShowBurgerMenu(false)}
        >
          <List>
            {navigationItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    onClick={() => navigate(item.path)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </ul>
    </div>
  );
};
