import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import GadgetDetails from "../component/GadgetDetails";
import DashBoard from "../page/DashBoard";
import Gadget from "../component/Gadget";
import CardAdded from "../page/CardAdded";
import WishlistAdded from "../page/WishlistAdded";
import Statistics from "../page/Statistics";
import ErrorPage from "../page/ErrorPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: () => fetch("../GadgetHeaven.json"),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <Gadget />,
            loader: () => fetch("../GadgetHeaven.json"),
          },
        ],
      },
      {
        path: "/gadgetdetails/:productId",
        element: <GadgetDetails />,
        loader: () => fetch("../GadgetHeaven.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../GadgetHeaven.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        loader: () => fetch("../GadgetHeaven.json"),
        children: [
          {
            path: "cardAdded",
            element: <CardAdded />,
          },
          {
            path: "wishlistAdded",
            element: <WishlistAdded />,
          },
        ],
      },
    ],
  },
]);
export default routers;
