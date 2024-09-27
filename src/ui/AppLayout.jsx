import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  //   console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* inside the parent route, we can use <Outlet /> to render whatever is the current nested route. */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
