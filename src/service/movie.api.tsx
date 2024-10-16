import { ServerResponse, GetFilms, ServerSearch, FilmPage, GetImages } from '../models/models';

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

export async function filmPage(filmId?: string): Promise<FilmPage> {
  return await fetch(_APIBase + _APIVersion.v22 + `/films/${filmId}`, {
    method: 'GET',
    headers: headers,
  }).then((res) => res.json());
}
export async function movieReleases(pages: string | null): Promise<ServerResponse> {
  return await fetch(
    _APIBase + _APIVersion.v21 + `/films/releases?year=2023&month=APRIL&page=${pages}`,
    {
      method: 'GET',
      headers: headers,
    },
  ).then((res) => res.json());
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
export async function searchFilms(filmName: string): Promise<ServerSearch> {
  return await fetch(
    _APIBase + _APIVersion.v21 + `/films/search-by-keyword?keyword=${filmName}&page=1`,
    {
      method: 'GET',
      headers: headers,
    },
  ).then((res) => res.json());
}
export async function movieImage(id?: string): Promise<GetImages> {
  return await fetch(_APIBase + _APIVersion.v22 + `/films/${id}/images?type=STILL&page=1`, {
    method: 'GET',
    headers: headers,
  }).then((res) => res.json());
}
