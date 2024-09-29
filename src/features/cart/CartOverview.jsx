import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  // Doing these Selector functions here is completely ok, However, Redux recommends to put these kind of functions all in a central place => in the Slice file.
  // const totalCartQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((acc, item) => acc + item.quantity, 0),
  // );
  // const totalCartPrice = useSelector((state) =>
  //   state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0),
  // );

  /* Redux recommends way */
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
