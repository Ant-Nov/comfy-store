import { useDispatch, useSelector } from "react-redux";
import { CartTotals, FormInput, SubmitBtn } from "../components";
import { SectionTitle } from "../components/SectionTitle";
import { redirect, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customHttp, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { selectCartTotals } from "../features/cart/cartSelectors";
import { clearCart } from "../features/cart/cartSlice";

export const checkoutLoader = (store) => () => {
  const isUser = store?.getState()?.user?.user;

  if (!isUser) return redirect('/');

  return null;
};

export const Checkout = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector(s => s.cart);
  const token = useSelector(s => s.user.user.jwt);
  const { orderTotal, numItemsInCart } = useSelector(selectCartTotals);

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => customHttp.post('/orders', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
    onSuccess: (r) => {
      toast.success('Order has been created');
      queryClient.removeQueries({queryKey: ['orders']});
      navigate('/orders');
      dispatch(clearCart());
    },
    onError: (e) => {
      const errorMsg = e?.response?.data?.error?.message || 'Oops, something went wrong';

      toast.error(errorMsg);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const payload = {
      data: {
        ...data,
        cartItems,
        chargeTotal: orderTotal,
        numItemsInCart,
        orderTotal: formatPrice(orderTotal),
      }
    };

    mutate(payload);
  };

  return (
    <div>
      <SectionTitle text={ !!cartItems?.length ? "Place Your Order" : "Your cart is empty" } />

      {
        !!cartItems?.length &&
          <div className="flex flex-wrap lg:flex-nowrap gap-8 pt-8">
            <form className="w-full lg:mb-0 lg:w-auto lg:flex-1" onSubmit={handleSubmit}>
              <h4 className="text-xl font-semibold mb-2">Shipping Information</h4>

              <FormInput name="name" title="First Name" defaultValue="Harry" sizeClass="input-lg"/>
              <FormInput name="address" title="Address" defaultValue="None of your business street" sizeClass="input-lg"/>
              <SubmitBtn title="Place your order" className='btn-secondary uppercase mt-8' isPending={isPending}/>
            </form>

            <div className="w-full lg:w-auto lg:flex-1">
              <CartTotals />
            </div>
          </div>
      }
    </div>
  );
};
