import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Locations } from "./pages/Locations";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "products", Component: Products },
      { path: "locations", Component: Locations },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);