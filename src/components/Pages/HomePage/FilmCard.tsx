import { IRelease } from '../../../models/models';
import { NavLink } from 'react-router-dom';
import './FilmCard.scss';

export function FilmCard({ film }: { film: IRelease }) {
  const count = (film?.countries || []).map((count) => {
    return count.country;
  });

  // const genre = (film?.genres || []).map((genres) => {
  //   return genres.genre;
  // });

  const countMap = count.map((country) => {
    return (
      <p key={country} className="filmList_country">
        {country}
      </p>
    );
  });
  // const genreMap = genre.map((genres) => {
  //   return (
  //     <p key={genres} className="filmList_genre">
  //       {genres}
  //     </p>
  //   );
  // });

  return (
    <div className="filmList">
      <NavLink to={`/film/${film.filmId}`}>
        <img className="filmList_poster" src={film.posterUrl} alt="poster" />
      </NavLink>
      <div className="filmList_card">
        <span className="filmList_name">
          <NavLink to={`/film/${film.filmId}`} className="filmList_nameRu">
            {film.nameRu}
          </NavLink>
          <div className="filmList_rating">{film.rating}</div>
        </span>
        <div className="filmList_info">
          <span className="filmList_info_nameEn">{film.nameEn}</span>
          <span className="filmList_info_year">{film.year}</span>
        </div>
        <div className="filmList_filmInfo">
          <span className="filmList_filmInfo_count">{countMap[0]}</span>
        </div>
      </div>
    </div>
  );
}
