import React from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductAction from "./pages/ProductAction/ProductAction";
import ProductListPage from "./pages/ProductList/ProductListPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/products",
    exact: true,
    main: () => <ProductListPage />,
  },
  {
    path: "/products/add",
    exact: false,
    main: ({ history }) => <ProductAction history={history} />,
  },
  {
    path: "/products/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductAction match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
