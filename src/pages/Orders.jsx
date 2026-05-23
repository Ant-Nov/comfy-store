import { customHttp } from "../utils";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";
import { redirect, useLoaderData } from "react-router-dom";

export const ordersLoader = (store, queryClient) => async ({ request }) => {
  const user = store.getState().user.user;

  if (!user) redirect('/login');

  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams.entries());

  try {
    const response = await queryClient.ensureQueryData({
      queryKey: ['orders', { page: params.page || '1', name: user.user.username }],
      queryFn: () => customHttp.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        }
      })
    });
  
    return {
      orders: response.data.data,
      meta: response.data.meta
    };
  } catch (e) {
    return null;
  }
};

export const Orders = () => {
  const { orders, meta: { pagination: { total }}} = useLoaderData();

  return (
    <>
      <SectionTitle text={ !!orders?.length ? "Orders" : "No orders exist" } />


      {
        !!orders?.length &&
          <>
            <h4 className="text-xl my-5">Total Orders: {total}</h4>
            <OrdersList orders={orders} />
            <PaginationContainer />
          </>
      }
    </>
  );
};
