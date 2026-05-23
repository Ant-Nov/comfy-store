import { Link, useLoaderData } from "react-router-dom";
import { customHttp, formatPrice } from "../utils";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const options = Array.from({ length: 10 }, (_, i) => i + 1);

export const productLoader = (queryClient) => async ({params}) => {
  const response = await queryClient.ensureQueryData({
    queryKey: ['product', params.id],
    queryFn: () => customHttp.get(`/products/${params.id}`)
  });

  return response?.data?.data;
};

export const SingleProduct = () => {
  const { id, attributes: { image, title, company, description, colors, price } } = useLoaderData();

  const [productColor, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(null);

  const cartProductView = {
    productID: id,
    cartID: id + productColor,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="breadcrumbs text-sm pb-5">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <img src={image} alt={title} />

        <div>
          <h2 className="font-bold text-2xl mb-1">{title}</h2>
          <h4 className="mb-1">{company}</h4>
          <p className="mb-2">{formatPrice(price)}</p>
          <p className="mb-5">{description}</p>

          <div className="mb-4">
            <h5>Colors</h5>

            <div className="flex gap-2 items-center">
              {
                colors.map(color => (
                  <button
                    key={color}
                    className='h-6 w-6 rounded-[50%] cursor-pointer'
                    style={{
                      backgroundColor: color,
                      border: `4px solid ${productColor === color ? 'gray' : color}`
                    }}
                    onClick={() => setColor(color)}
                  ></button>
                ))
              }
            </div>
          </div>

          <div className="mb-5">
            <h5>Amount</h5>

            <div>
              <select
                defaultValue="Pick a color"
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
            className="btn btn-primary uppercase"
            disabled={!amount}
            onClick={() => dispatch(addItem(cartProductView))}
          >add to bag</button>
        </div>
      </div>
    </>
  );
};

// {
//   "data": {
//     "id": 19,
//     "attributes": {
//       "title": "avant-garde lamp",
//       "company": "Modenza",
//       "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//       "featured": true,
//       "createdAt": "2023-08-10T10:07:41.876Z",
//       "updatedAt": "2023-08-10T10:16:43.298Z",
//       "publishedAt": "2023-08-10T10:07:44.157Z",
//       "category": "Kids",
//       "image": "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       "price": "17999",
//       "shipping": false,
//       "colors": [
//         "#33FF57",
//         "#3366FF"
//       ]
//     }
//   },
//   "meta": {}
// }