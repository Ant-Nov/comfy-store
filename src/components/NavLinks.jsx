import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: 'about', text: 'About' },
  { id: 3, url: 'products', text: 'Products' },
  { id: 4, url: 'cart', text: 'Cart' },
  { id: 5, url: 'checkout', text: 'Checkout', loginRequired: true },
  { id: 6, url: 'orders', text: 'Orders', loginRequired: true },
];

export const NavLinks = () => {
  const {user} = useSelector(s => s.user);
  const filteredLinks = links.filter(item => !item.loginRequired || !!user);

  return (<>
    {
      filteredLinks.map(item => (
        <li key={item.id}>
          <NavLink to={item.url}>
            {item.text}
          </NavLink>
        </li>
      ))
    }
  </>);
};