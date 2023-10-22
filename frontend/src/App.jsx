import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./Games";
import Game from "./Game";
import Login from "./Login";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
