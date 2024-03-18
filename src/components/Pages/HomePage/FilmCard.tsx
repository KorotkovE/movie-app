import { IFilm } from '../../../models/models';

export function FilmCard({ film }: { film: IFilm }) {
  return (
    <div>
      <span>{film.nameEn}</span>
    </div>
  );
}
