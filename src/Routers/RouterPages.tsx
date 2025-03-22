import { createBrowserRouter, RouterProvider } from "react-router";
import { Error, Home } from "../Pages";

const RouterPages = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default RouterPages;
