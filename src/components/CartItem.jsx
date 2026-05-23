import { useDispatch } from "react-redux";
import { formatPrice } from '../utils';
import { SelectInput } from "./SelectInput";
import { editItem, removeItem } from "../features/cart/cartSlice";

const options = Array.from({ length: 10 }, (_, i) => i + 1);

export const CartItem = ({ cartID, image, title, price, company, productColor, amount }) => {
  const dispatch = useDispatch();

  const setAmount = (newAmount) => {
    dispatch(editItem({ cartID, amount: newAmount }));
  };

  return (
    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-10 pb-5 mb-5 border-b-2 border-b-base-content last:border-0 last:mb-0">
      <img className="aspect-square md:w-37.5 rounded-2xl object-cover" src={image} alt={title} />
      
      <div className="md:mr-auto">
        <p className="text-lg font-semibold mb-2">{title}</p>
        <p className="mb-2">{company}</p>
        
        <p>
          Color:

          <span
            className="badge badge-sm ml-1"
            style={{ backgroundColor: productColor }}
          ></span></p>
      </div>
      
      <div>
        <div className="mb-2">
          <h5 className="mb-2">Amount</h5>

          <div>
            <select
              defaultValue={amount}
              className="select"
              onChange={(e) => setAmount(+e.target.value)}
              value={amount}
            >
              <option disabled={true} hidden>Pick a color</option>

              {
                options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))
              }
            </select>
          </div>
        </div>

        <button
          className="btn-ghost text-primary cursor-pointer"
          onClick={() => dispatch(removeItem(cartID))}
        >remove</button>
      </div>

      <p className="text-lg font-semibold md:w-20 md:text-right">{formatPrice(price)}</p>
    </div>
  );
};
