import { FilmPage } from '../../../models/models';
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
      <span key={genre} className="movies_genre">
        {genre}
      </span>
    );
  });

  const ageLimits = {
    age16: '+16',
    age18: '+18',
    age21: '+21',
  };

  return (
    <>
      <div className="filmPage">
        <div>
          <img className="filmPage_poster" src={movies.posterUrl} alt="poster" />
        </div>
        <div className="filmPage_detail">
          <span className="filmPage_name">
            {movies.nameRu}({movies.year})
          </span>
          <div className="filmPage_card">
            <div>
              <span className="filmPage_description">{movies.description}</span>
            </div>
            <div>
              <span className="filmPage_filmLengthr">Длительность {movies.filmLength} мин.</span>
            </div>
            <div>
              <span className="filmPage_ratingKinopoisk">{movies.ratingKinopoisk}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
