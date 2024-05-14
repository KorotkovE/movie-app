import { SearchFilm } from '../../models/models';
import './AppHeader.scss';

export const SearchDeatail = ({
  search,
  clickHandler,
}: {
  search: SearchFilm;
  clickHandler: (filmId?: string | number) => void;
}) => {
  const searchType: Record<string, string> = {
    FILM: 'Фильм',
    TV_SERIES: 'сериал',
    MINI_SERIES: 'мини серал',
    VIDEO: 'видео',
    TV_SHOW: 'ТВ шоу',
  };
  return (
    <li key={search.filmId} className="search_result" onClick={() => clickHandler(search.filmId)}>
      <img className="poster_search" src={search.posterUrl} alt="poster" />
      <div className="search_info">
        <span className="search_name">{search.nameRu}</span>
        <span className="serach_rating"> {search.rating} </span>
        <span className="search_type"> {searchType[search.type]} </span>
        <span> {search.year} </span>
      </div>
    </li>
  );
};
