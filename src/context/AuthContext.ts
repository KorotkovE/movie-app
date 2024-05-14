import { noop } from 'lodash-es';
import { createContext } from 'react';

interface Context {
  token?: string;
  userId?: string;
  login: (jwtToken: string, id: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export default createContext<Context>({
  token: undefined,
  userId: undefined,
  login: noop,
  logout: noop,
  isAuthenticated: false,
});
