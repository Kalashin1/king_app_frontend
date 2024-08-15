import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from '../pages/shop';
import Product from "../pages/product";
import { SCREENS } from "./constants";
import Cart from "../pages/cart";
import Contact from "../pages/contact";
import Course from "../pages/course";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />
  },
  {
    index: SCREENS.HOME,
    element: <Home />
  },
  {
    path: SCREENS.SHOP,
    element: <Shop />
  },
  {
    path: SCREENS.PLAN(),
    element: <Product />
  },
  {
    path: SCREENS.COURSE(),
    element: <Course />
  },
  {
    path: SCREENS.CART,
    element: <Cart />
  },
  {
    path: SCREENS.CONTACT,
    element: <Contact />
  }
])

export default router;