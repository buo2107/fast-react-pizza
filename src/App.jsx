import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

function App() {
  /*
  we want to use <AppLayout/> as the parent route of every single other route that we have in our application.

  So we placed <AppLayout/> at the top, and made all the other routes as child routes of the it.(they are all nested routes now)

 */
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
