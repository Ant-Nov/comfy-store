import { useSelector } from "react-redux";
import { selectCartTotals } from "../features/cart/cartSelectors";
import { formatPrice } from "../utils";
import clsx from "clsx";

export const CartTotals = () => {
  const { cartTotal, tax, orderTotal } = useSelector(selectCartTotals);
  const { shipping } = useSelector(s => s.cart);
  
  const valuesArr = [
    { id: 1, title: 'Subtotal', value: cartTotal},
    { id: 2, title: 'Shipping', value: shipping },
    { id: 3, title: 'Tax', value: tax },
    { id: 4, title: 'Order Total', value: orderTotal }
  ];

  return (
    <div className="bg-neutral rounded-2xl p-7">
      {
        valuesArr.map((item, i) => (
          <p
            key={item.id}
            className={clsx(
              "flex items-center justify-between text-neutral-content",
              i !== 3 && "py-2 border-b-2 border-b-secondary",
              i === 3 && "font-semibold text-lg pt-3"
            )}
          >
            <span>{item.title}</span> { formatPrice(item.value) }
          </p>
        ))
      }
    </div>
  );
};