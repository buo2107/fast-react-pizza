import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        {/* inside the parent route, we can use <Outlet /> to render whatever is the current nested route. */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
