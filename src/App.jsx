import {
  Homelayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
  SinglePageError,
  landingLoader,
  productLoader,
  allProductsLoader,
  checkoutLoader,
  ordersLoader,
} from './pages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { store } from './store';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Homelayout,
      errorElement: <Error />,
      children: [
        {
          index: true,
          errorElement: <SinglePageError />,
          loader: landingLoader(queryClient),
          Component: Landing,
        },
        {
          path: 'about',
          Component: About,
        },
        {
          path: 'cart',
          Component: Cart,
        },
        {
          path: 'products',
          errorElement: <SinglePageError/>,
          loader: allProductsLoader(queryClient),
          Component: Products,
        },
        {
          path: 'products/:id',
          errorElement: <SinglePageError/>,
          loader: productLoader(queryClient),
          Component: SingleProduct,
        },
        {
          path: 'checkout',
          errorElement: <SinglePageError/>,
          loader: checkoutLoader(store),
          Component: Checkout,
        },
        {
          path: 'orders',
          errorElement: <SinglePageError/>,
          loader: ordersLoader(store, queryClient),
          Component: Orders,
        },
      ]
    },
    {
      path: 'login',
      errorElement: Error,
      Component: Login,
    },
    {
      path: 'register',
      errorElement: Error,
      Component: Register,
    }
  ],
  { basename: '/comfy-store/', }
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
