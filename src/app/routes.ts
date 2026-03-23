import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import TemplateSelectionPage from "./pages/TemplateSelectionPage";
import PortfolioFormPage from "./pages/PortfolioFormPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProfessionalsListPage from "./pages/ProfessionalsListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/templates",
    Component: TemplateSelectionPage,
  },
  {
    path: "/create",
    Component: PortfolioFormPage,
  },
  {
    path: "/professionals",
    Component: ProfessionalsListPage,
  },
  {
    path: "/portfolio/:id",
    Component: PortfolioPage,
  },
  {
    path: "/edit/:id",
    Component: PortfolioFormPage,
  },
  {
    path: "*",
    Component: HomePage,
  },
]);
