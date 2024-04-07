import { AppHeader } from './components/Header/AppHeader';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { FilmPage } from './components/Pages/FilmPage/FilmPage';
import { Route, Routes, Navigate } from 'react-router';

function App() {
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

export default App;
