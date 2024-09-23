import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  //   console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
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
