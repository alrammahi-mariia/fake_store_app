import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import ProductList from "../ProductList";
import Test from "../Test";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
]);

export default router;
