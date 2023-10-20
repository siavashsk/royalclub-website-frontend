import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import {
  Dashboard,
  Home,
  Leagues,
  Login,
  NotFound,
  Products,
  Tournaments,
  Transactions,
  Users,
  Notifications,
  Settings,
  Withdrawal,
  Signup,
} from "../components";
import PanelLayout from "../layouts/PanelLayout/PanelLayout";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const { isLogged } = useSelector((state: any) => state.auth);
  let mainRoutes = [
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "/login/admin", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ];

  let adminRoutes: any = [
    {
      path: "/panel/",
      element: (
        <PrivateRoute isLogged={isLogged}>
          <PanelLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "tournaments",
          element: <Tournaments />,
        },
        {
          path: "leagues",
          element: <Leagues />,
        },
        {
          path: "transactions",
          element: <Transactions />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "withdrawal",
          element: <Withdrawal />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
      ],
    },
  ];

  const routes = useRoutes([...mainRoutes, ...adminRoutes]);
  return routes;
};

export default AppRoutes;
