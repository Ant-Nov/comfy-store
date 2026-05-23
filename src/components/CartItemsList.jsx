import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const CartItemsList = () => {
  const { cartItems } = useSelector(s => s.cart);

  if (!cartItems?.length) {
    return <h3 className="font-bold text-2xl text-center">Cart is empty</h3>;
  }

  return (
    <div>
      {
        cartItems.map(item => <CartItem key={item.cartID} {...item} />)
      }
    </div>
  );
};