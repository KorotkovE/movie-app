import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { filmPage } from '../../../service/movie.api';
import { useParams } from 'react-router';
import { FilmDetail } from './FilmDetail';

export function FilmPage() {
  const { id } = useParams();
  const { data: getFilmPage, refetch } = useQuery({
    queryKey: ['getFilm'],
    queryFn: () => filmPage(id),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  return <>{getFilmPage && <FilmDetail movies={getFilmPage} />}</>;
}
