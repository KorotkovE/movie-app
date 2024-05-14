import { useQuery } from '@tanstack/react-query';
import { movieReleases } from '../../../service/movie.api';
import { useSearchParams } from 'react-router-dom';
import { FilmCard } from './FilmCard';

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams({ pages: '1' });
  const { data: movies } = useQuery({
    queryKey: ['films', searchParams.get('pages')],
    queryFn: () => movieReleases(searchParams.get('pages')),
    refetchOnWindowFocus: false,
  });

  const nextPage = () => {
    searchParams.set('pages', (Number(searchParams.get('pages')) + 1).toString());
    setSearchParams(searchParams);
  };
  const prevPage = () => {
    searchParams.set('pages', (Number(searchParams.get('pages')) - 1).toString());
    setSearchParams(searchParams);
  };

  return (
    <>
      <div>
        {movies?.releases?.map((movie) => (
          <FilmCard film={movie} key={movie.filmId} />
        ))}
        <div>
          <button onClick={prevPage} disabled={searchParams.get('pages') === '1'}>
            Назад
          </button>
          <button onClick={nextPage}>Следующая</button>
        </div>
      </div>
    </>
  );
}
