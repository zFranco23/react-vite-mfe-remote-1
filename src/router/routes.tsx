import Layout from "../components/layout";
import ShowCase from "../page/showcase";
import NotFound from "../page/not-found";
import Home from "../page/home";

import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "showcase",
        Component: ShowCase,
      },
    ],
  },
];
