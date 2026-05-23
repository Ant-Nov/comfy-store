import { FeaturedProducts, Hero } from "../components";
import { customHttp } from '../utils';


export const landingLoader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData({
    queryKey: ['featuredProducts'],
    queryFn: () => customHttp.get('/products', { params: { featured: true }})
  });

  return { products: response?.data?.data };
};

export const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
