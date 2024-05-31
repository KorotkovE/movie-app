import { NavLink, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import './AppHeader.scss';

export function AppHeader() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const loguotHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    auth.logout();
    navigate('/');
  };

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
              <NavLink to="/account" className="nav_btn">
                Аккаунт
              </NavLink>
              <NavLink to="/" className="nav_btn" onClick={loguotHandler}>
                Выход
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
