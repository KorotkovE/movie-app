import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { FilmPage } from './components/Pages/FilmPage/FilmPage';
import { AuthPage } from './components/Pages/AuthPage/AuthPage';
import { AppHeader } from './components/Header/AppHeader';
import { RegisterPage } from './components/Pages/AuthPage/RegisterPage';

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <>
        <AppHeader />
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="*" element={<Navigate replace to="/home-page" />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Routes>
    </>
  );
};
