import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./Games";
import Game from "./Game";
import Login from "./Login";
import "./styles.scss";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/game/:code",
    element: <Game />,
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
