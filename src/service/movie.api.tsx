import { ServerResponse, GetFilms, ServerSearch, FilmPage } from '../models/models';

const _APIBase = new URL('https://kinopoiskapiunofficial.tech/api/');

const headers = {
  'X-API-KEY': '4bad5eef-212d-4d20-9776-2f934ae93aa6',
  'Content-Type': 'application/json',
};

const _APIVersion = {
  v21: 'v2.1',
  v22: 'v2.2',
  v1: 'v1',
};

export async function filmPage(filmId?: string | number): Promise<FilmPage> {
  return await fetch(_APIBase + _APIVersion.v22 + `/films/${filmId}`, {
    method: 'GET',
    headers: headers,
  }).then((res) => res.json());
}
export async function movieReleases(): Promise<ServerResponse> {
  return await fetch(_APIBase + _APIVersion.v21 + `/films/releases?year=2024&month=APRIL&page=1`, {
    method: 'GET',
    headers: headers,
  }).then((res) => res.json());
}
export async function movieService(): Promise<GetFilms> {
  return await fetch(
    _APIBase + _APIVersion.v22 + `/films/premieres?year=2024&month=MARCH&total=10`,
    {
      method: 'GET',
      headers: headers,
    },
  ).then((res) => res.json());
}
export async function searchFilms(filmName: string | number): Promise<ServerSearch> {
  return await fetch(
    _APIBase + _APIVersion.v21 + `/films/search-by-keyword?keyword=${filmName}&page=1`,
    {
      method: 'GET',
      headers: headers,
    },
  ).then((res) => res.json());
}
