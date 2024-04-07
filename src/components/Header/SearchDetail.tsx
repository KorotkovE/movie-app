import { SearchFilm } from '../../models/models';
import './AppHeader.scss';

export const SearchDeatail = ({
  search,
  clickHandler,
}: {
  search: SearchFilm;
  clickHandler: (filmId?: string | number) => void;
}) => {
  return (
    <li key={search.filmId} className="search_result" onClick={() => clickHandler(search.filmId)}>
      <img className="poster_search" src={search.posterUrl} alt="poster" />
      <div className="search_info">
        <span className="search_name">{search.nameRu}</span>
        <span className="serach_rating"> {search.rating} </span>
        <span className="search_type"> {[search.type]} </span>
        <span> {search.year} </span>
      </div>
    </li>
  );
};
