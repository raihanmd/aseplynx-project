import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./utils/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: (
      <div>
        <div>About</div>
        <Link to="/">Back</Link>
      </div>
    ),
  },
  {
    path: "contact",
    element: (
      <div>
        <div>Contact</div>
        <Link to="/">Back</Link>
      </div>
    ),
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
