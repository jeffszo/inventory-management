import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../pages/LayoutBase";
import { LayoutList } from "../pages/LayoutList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
  },
  {
    path: "/listagem",
    element: <LayoutList/>
  },
]);
