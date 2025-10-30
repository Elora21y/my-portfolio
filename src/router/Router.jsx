import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home";
import Loading from "../components/Loading";
import ProjectsWithToggle from "../page/Projects";
import ProjectsLayout from "../layout/ProjectsLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // HydrateFallback : Loading,
    // hydrateFallbackElement : <Loading/>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/projects",
    Component: ProjectsLayout,
    // HydrateFallback : Loading,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index : true,
        element: <ProjectsWithToggle showAll={true} />,
      },
    ],
  },
]);
