import './AppHeader.scss';
import { NavLink } from 'react-router-dom';

export function AppHeader() {
  return (
    <>
      <nav className="header_nav">
        <div>
          <span className="header_nav_logo">
            <h1 className="header_nav_logo_name">Movie App</h1>
          </span>
        </div>
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
