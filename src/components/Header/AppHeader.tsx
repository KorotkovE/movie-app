import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import './AppHeader.scss';

export function AppHeader() {
  return (
    <>
      <nav className="header_nav">
        <div>
          <span className="header_nav_logo">
            <NavLink to="/home-page" className="header_nav_logo_name">
              Movie App
            </NavLink>
          </span>
        </div>
        <SearchBar />
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className="nav_btn">
                Аккаунт
              </NavLink>
              <NavLink to="/" className="nav_btn">
                Выход
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
