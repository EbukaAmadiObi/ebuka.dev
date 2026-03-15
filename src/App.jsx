import { useRoutes, Navigate } from "react-router-dom";
import Home from './pages/home/home';
import Card from './pages/card';
import Blog from './pages/blog';
import Projects from './pages/projects/projects';
import Lounge from './pages/lounge';

function App() {
  const routesArray = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/card",
      element: <Navigate to="/" replace />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/lounge",
        element: <Lounge />,
      },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];
let routesElement = useRoutes(routesArray)
  return (
    <div>
      {routesElement}
    </div>
  );
}

export default App;
