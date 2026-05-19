import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const rootRoute = createRootRoute();
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <NotFound />,
});

const routeTree = rootRoute.addChildren([indexRoute, notFoundRoute]);
const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
