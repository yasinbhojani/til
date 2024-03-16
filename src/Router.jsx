import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <NotFound />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
