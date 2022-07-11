import { NavLink, Link } from 'react-router-dom';

export const Header = () => (
  <div className="page-header">
    <Link to="/">
      <img src="images/person.png" alt="person" />
    </Link>
    <ul>
      <li>
        <NavLink to="/resume">Resume</NavLink>
      </li>
      <li>
        <NavLink to="/travel">Travel</NavLink>
      </li>
    </ul>
  </div>
);
