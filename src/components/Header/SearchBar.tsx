import { useMutation } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { searchFilms } from '../../service/movie.api';
import { SearchDeatail } from './SearchDetail';
import { Debounce } from '../hooks/Debounce';
import './AppHeader.scss';

export function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const {
    mutate: onSearch,
    data: searchMovie,
    isError,
    isPending,
  } = useMutation({
    mutationFn: searchFilms,
  });

  const goToFilm = (id?: string | number) => navigate(`/film/${id}`);

  const clickHandlerPage = (filmId?: string | number) => {
    goToFilm(filmId);
    setSearch('');
  };

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    if (!search) return;
    Debounce(onSearch(search), 3000);
  }, [search, onSearch]);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          value={search}
          onChange={onChangeSearch}
        />
        {isError && <p>Error</p>}
        {isPending ? (
          <p className="search_loading">Loading</p>
        ) : (
          search && (
            <ul className="dropdown_search">
              {searchMovie?.films?.map((searchMovie) => (
                <SearchDeatail
                  search={searchMovie}
                  key={searchMovie.filmId}
                  clickHandler={clickHandlerPage}
                />
              ))}
            </ul>
          )
        )}
      </div>
    </>
  );
}
