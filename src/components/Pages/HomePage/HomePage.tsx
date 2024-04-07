import { useQuery } from '@tanstack/react-query';
import { movieService } from '../../../service/movie.api';
import { FilmCard } from './FilmCard';

export function HomePage() {
  const { data: movies } = useQuery({
    queryKey: ['films'],
    queryFn: movieService,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div>
        {movies?.items?.map((movie) => (
          <FilmCard film={movie} key={movie.kinopoiskId} />
        ))}
      </div>
    </>
  );
}
