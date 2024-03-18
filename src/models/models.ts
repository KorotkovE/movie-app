export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export interface IFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
  rating?: number;
  ratingVoteCount: number;
  expectationsRating?: number;
  expectationsRatingVoteCount: number;
  duration: number;
  releaseDate: string;
}

export interface ServerResponse {
  pagesCount: number;
  releases: IFilm[];
}
