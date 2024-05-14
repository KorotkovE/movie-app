import AuthContext from './context/AuthContext';
import { useAuth } from './components/hooks/Auth.hook';
import { useRoutes } from './routes';

function App() {
  const auth = useAuth();
  const routes = useRoutes(!!auth?.token);

  if (!auth) {
    return <span>Нет доступа</span>;
  }

  const { login, logout, token, userId } = auth;
  return (
    <>
      <AuthContext.Provider value={{ login, logout, token, userId, isAuthenticated: !!token }}>
        {routes}
      </AuthContext.Provider>
    </>
  );
}

export default App;
