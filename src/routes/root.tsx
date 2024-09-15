import { createBrowserRouter, Navigate } from "react-router-dom";
import { MenPage } from "../pages/men/Men";
import { Homepage } from "../pages/homepage/Homepage";
import { ProductPage } from "../components/Product/Product";
import { Checkout } from "../pages/checkout/chechout";
import { ShoppingCartPage } from "../pages/shopping-cart/shoppingCart";


const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage />
      ),
    },
    {
      path: "hombre",
      element: <MenPage />,
    },
    {
      path:"product/:productId",
      element: <ProductPage />
    },
    {
        path: "shopping-cart",
        element: <ShoppingCartPage />
    },
    {
        path: "checkout",
        element: <Checkout/>
    },
    { 
      path:"*",
      element: (<Navigate to="/" replace={true} />) 
    }
]);

export { router };