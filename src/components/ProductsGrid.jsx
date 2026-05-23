import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

export const ProductsGrid = () => {
  const { products } = useLoaderData();
  
  return (
    <div className="pt-12 pb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {
        products.map(({ id, attributes: { image, title, price }}) => (
          <Link
            to={`/products/${id}`}
            key={id}
            className="block text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden pb-5"
          >
            <img src={image} alt={title} className="h-50 object-cover w-full"/>
            <h4 className="pt-2">{title}</h4>
            <p className="pt-1">{formatPrice(price)}</p>
          </Link>
        ))
      }
    </div>
  );
};