import {
  AboutPage,
  BlogPage,
  CantactUsPage,
  HomePage,
  NotFoundPage,
  ProductPage,
  ProductsPage,
} from "../pages";

export const routes = [
  {
    id: 1,
    element: <HomePage />,
    path: "/",
  },
  {
    id: 2,
    element: <ProductsPage />,
    path: "/products",
  },
  {
    id: 3,
    element: <ProductPage />,
    path: "/product",
  },

  {
    id: 4,
    element: <AboutPage />,
    path: "/about",
  },
  {
    id: 5,
    element: <CantactUsPage />,
    path: "/cantact",
  },
  {
    id: 6,
    element: <BlogPage />,
    path: "/blog",
  },
  {
    id: 7,
    element: <NotFoundPage />,
    path: "*",
  },
];
