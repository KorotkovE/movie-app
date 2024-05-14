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
