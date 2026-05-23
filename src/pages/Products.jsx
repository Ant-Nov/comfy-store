import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customHttp } from "../utils";

export const allProductsLoader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const rawParams = Object.fromEntries(url.searchParams.entries());
  const params = { ...rawParams, shipping: !!rawParams.shipping || undefined };

  const response = await queryClient.ensureQueryData({
    queryKey: ['products', params],
    queryFn: () => customHttp.get('/products', { params })
  });

  const data = response?.data;

  return { products: data?.data, meta: data?.meta, params };
};

export const Products = () => {
  return (
    <div>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </div>
  );
};