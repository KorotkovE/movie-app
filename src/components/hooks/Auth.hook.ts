import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState<string>();
  const [userId, setUserId] = useState<string>();

  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({ userId: id, token: jwtToken }));
  }, []);
  const logout = useCallback(() => {
    setToken(undefined);
    setUserId(undefined);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const value = localStorage.getItem(storageName);
    if (!value) {
      return;
    }
    const data = JSON.parse(value);
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};
