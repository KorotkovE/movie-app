import { useQuery } from '@tanstack/react-query';
import { movieService } from '../../../service/movie.api';
import { FilmCard } from './FilmCard';

export function HomePage() {
  const { data: movies } = useQuery({
    queryKey: ['films'],
    queryFn: movieService,
  });

  return (
    <div>
      {movies?.releases?.map((movie) => (
        <FilmCard film={movie} key={movie.filmId} />
      ))}
    </div>
  );
}
