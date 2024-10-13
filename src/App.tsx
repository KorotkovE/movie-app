import AuthContext from './context/AuthContext';
import { useAuth } from './components/hooks/Auth.hook';
import { useRoutes } from './routes';

function App() {
  const auth = useAuth();
  const { login, logout, token, userId } = auth;
  const routes = useRoutes(!!auth?.token);

  if (!auth) {
    return <span>Нет доступа</span>;
  }

  return (
    <>
      <AuthContext.Provider value={{ login, logout, token, userId, isAuthenticated: !!token }}>
        {routes}
      </AuthContext.Provider>
    </>
  );
}

export default App;
