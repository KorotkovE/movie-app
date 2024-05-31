import { FilmPage } from '../../../models/models';
import { FilmImage } from './FilmImage';
import './FilmDetail.scss';

export function FilmDetail({ movies }: { movies: FilmPage }) {
  const count = (movies?.countries || []).map((count) => {
    return count.country;
  });

  const genres = (movies?.genres || []).map((genre) => {
    return genre.genre;
  });

  const countMap = count.map((country) => {
    return (
      <span key={country} className="movies_count">
        {country}
      </span>
    );
  });

  const genreMap = genres.map((genre) => {
    return (
      <span key={genre} className="filmPage_card_genre">
        {genre}
      </span>
    );
  });

  const ageLimits: Record<string, string> = {
    age16: '16+',
    age18: '18+',
    age21: '21+',
  };

  const moviesType: Record<string, string> = {
    FILM: 'Фильм',
    TV_SERIES: 'Сериал',
    MINI_SERIES: 'Мини серал',
    VIDEO: 'Видео',
    TV_SHOW: 'ТВ ШОУ',
  };

  return (
    <>
      <div className="container">
        <div className="filmPage">
          <div>
            <img className="filmPage_poster" src={movies.posterUrl} alt="poster" />
            <span className="filmPage_description">{movies.description}</span>
          </div>

          <div className="filmPage_detail">
            <span className="filmPage_ratingKinopoisk">{movies.ratingKinopoisk}/10</span>
            <span className="filmPage_name">{movies.nameRu}</span>
            <span className="filmPage_nameOr">{movies.nameOriginal}</span>
            <div className="filmPage_card">
              <div className="filmPage_card_type">
                <span className="filmPage_card_typeSize">Тип: </span>
                <span>{moviesType[movies.type]}</span>
              </div>

              <div className="filmPage_card_length">
                <span className="filmPage_card_lengthSize">Длительность: </span>
                <span>{movies.filmLength} мин.</span>
              </div>

              <div className="filmPage_card_rating">
                <span className="filmPage_card_ratingSize">Ограничение: </span>
                <span>{ageLimits[movies.ratingAgeLimits]}</span>
              </div>

              <div className="filmPage_card_year">
                <span className="filmPage_card_yearSize">Год: </span>
                <span>{movies.year}</span>
              </div>

              <div className="filmPage_card_genre">
                <span className="filmPage_card_genreSize">Жанр: </span>
                <span>{genreMap}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="filmPageImg">
          <FilmImage />
        </div>
      </div>
    </>
  );
}
