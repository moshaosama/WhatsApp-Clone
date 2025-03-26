import { createBrowserRouter, RouterProvider } from "react-router";
import { Chats, Error, Home } from "../Pages";
import {
  Channels,
  ChatsNumber,
  Profile,
  Settings,
  Status,
} from "../Components";
import Account from "../Pages/account";

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
          path: "chats",
          element: <Chats />,
          children: [
            {
              index: true,
              element: <ChatsNumber />,
            },
            {
              path: "status",
              element: <Status />,
            },
            {
              path: "channel",
              element: <Channels />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "setting",
              element: <Settings />,
            },
          ],
        },
      ],
    },
    {
      path: "account",
      element: <Account />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default RouterPages;
