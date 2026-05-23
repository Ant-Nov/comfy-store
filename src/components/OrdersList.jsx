import daysjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

daysjs.extend(advancedFormat);

export const OrdersList = ({ orders }) => {
  return (
    <div className="overflow-x-auto max-h-100 mb-5">
      <table className="table table-zebra table-pin-rows">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Products</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
       
        <tbody>
          {
            orders.map(({ id, attributes }) => (
              <tr key={id}>
                <td>{ attributes.name || '-' }</td>
                <td>{ attributes.address || '-' }</td>
                <td>{ attributes.numItemsInCart ?? 0 }</td>
                <td>{ attributes.orderTotal || '-' }</td>
                <td>{ daysjs(attributes.createdAt).format('hh:mm a - MMM Do, YYYY') }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

// {
//     "id": 1593,
//     "attributes": {
//         "address": "Laugh Street, Whimsytown",
//         "cartItems": [
//             {
//                 "image": "https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=800",
//                 "price": "3299",
//                 "title": "Bar Stool Set",
//                 "amount": 9,
//                 "cartID": "18#32CD32",
//                 "company": "Modenza",
//                 "productID": 18,
//                 "productColor": "#32CD32"
//             }
//         ],
//         "name": "Amusing Amy",
//         "orderTotal": "$331.60",
//         "numItemsInCart": 9,
//         "createdAt": "2026-02-14T12:51:47.574Z",
//         "updatedAt": "2026-02-14T12:51:47.574Z",
//         "publishedAt": "2026-02-14T12:51:47.567Z"
//     }
// }