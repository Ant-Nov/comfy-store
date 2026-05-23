import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

export const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <>
      {
        products.map(({ id, attributes: { image, title, price, company } }) => (
          <Link
            to={`/products/${id}`}
            key={id}
            className="flex gap-x-10 pt-12 px-8 pb-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl not-last-of-type:mb-5"
          >
            <img src={image} alt={title} className="w-37.5 h-37.5 object-cover" />

            <div className="grow">
              <p className="flex items-center justify-between w-full font-semibold text-xl">
                <span>{title}</span>
                <span>{formatPrice(price)}</span>
              </p>

              <p>{company}</p>
            </div>
          </Link>
        ))
      }
    </>
  );
};