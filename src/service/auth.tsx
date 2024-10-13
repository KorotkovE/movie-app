import { IProfile } from '../models/models';

export async function login(params: unknown) {
  return await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params) || null,
  }).then((res) => res.json());
}

export async function register(params: unknown) {
  return await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params) || null,
  }).then((res) => res.json());
}

// export async function getProfile(token: string): Promise<IProfile> {
//   return await fetch('/api/auth/me', {
//     method: 'GET',
//     headers: { Authorization: `Bearer ${token}` },
//   }).then((res) => res.json());
// }

export async function getProfile(token: string, id?: string): Promise<IProfile> {
  return await fetch(`/api/profile/all/${id}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json());
}
