export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export interface IRelease {
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
  releases: IRelease[];
}

export interface GetFilms {
  total: number;
  totalPages: number;
  items: IFilm[];
}

export interface IFilm {
  kinopoiskId: number;
  imdbId?: string;
  nameRu?: string;
  nameEn: any;
  nameOriginal?: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb?: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface SearchFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  slogan: string;
}

export interface ServerSearch {
  keyword: string;
  pagesCount: number;
  films: SearchFilm[];
  searchFilmsCountResult: number;
}

export interface FilmPage {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: Country[];
  genres: Genre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface GetImages {
  total: number;
  totalPages: number;
  items: Iimages[];
}

export interface Iimages {
  imageUrl: string;
  previewUrl: string;
}

export interface IProfile {
  fullname: string;
  name: string;
  email: string;
}
