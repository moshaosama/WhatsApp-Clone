import { createBrowserRouter, RouterProvider } from "react-router";
import { Error, Home } from "../Pages";
import Chats from "../Pages/Chats";

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
        {
          path: "/chats",
          element: <Chats />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default RouterPages;
