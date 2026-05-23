import { Link } from "react-router-dom";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";

export const Cart = () => {
  const {user} = useSelector(s => s.user);

  return (
    <div>
      <SectionTitle text="Shopping Cart" />

      <div className="flex flex-wrap lg:flex-nowrap gap-x-8 pt-8">
        <div className="w-full mb-10 lg:mb-0 lg:w-auto lg:order-2 lg:grow">
          <CartTotals />
          
          <div className="pt-6">
            {
              !!user
                ? <Link to="/checkout" className="btn btn-secondary uppercase w-full">proceed to checkout</Link>
                : <Link to="/login" className="btn btn-secondary uppercase w-full">login to checkout</Link>
            }
          </div>
        </div>

        <div className="w-full lg:order-1 lg:w-[65%]">
          <CartItemsList />
        </div>
      </div>
    </div>
  );
};