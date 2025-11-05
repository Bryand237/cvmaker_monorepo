import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import NewCV from "./pages/NewCV";
import CVDashboard from "./pages/CVDashboard";
import TemplatePage from "./pages/TemplatePage";
import CVView from "./pages/CVView";
import DashboardOverview from "./secrions/DashboardOverview";
import DashboradLayout from "./components/DashboradLayout";
import DashboardTemplates from "./secrions/DashboardTemplates";
import DashboradCV from "./secrions/DashboradCV";
import DashboardOwnCV from "./secrions/DashboardOwnCV";
import HomeAbout from "./pages/HomeAbout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <HomeAbout />,
        },
        {
          path: "dashboard",
          element: <DashboradLayout />,
          children: [
            {
              index: true,
              element: <DashboardOverview />,
            },
            {
              path: "templates",
              element: <DashboardTemplates />,
            },
            {
              path: "new",
              element: <DashboradCV />,
            },
            {
              path: "own",
              element: <DashboardOwnCV />,
            },
          ],
        },
        {
          path: "new_cv",
          element: <NewCV />,
        },
        {
          path: "cv_dashboard",
          element: <CVDashboard />,
        },
        {
          path: "templates",
          element: <TemplatePage />,
        },
        {
          path: "cv/save",
          element: <CVView />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
