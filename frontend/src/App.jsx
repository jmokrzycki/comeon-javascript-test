import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Games from "./Games";
import Game from "./Game";
import Login from "./Login";
import "./styles.scss";

export const ProtectedRoute = ({ children }) => {
  const isLogged = sessionStorage.getItem("name") !== null;

  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/games",
    element: (
      <ProtectedRoute>
        <Games />
      </ProtectedRoute>
    ),
  },
  {
    path: "/game/:code",
    element: (
      <ProtectedRoute>
        <Game />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <img className="logo" src="logo.svg" alt="Game logo" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
