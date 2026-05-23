import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.user);

  const handleClick = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate('/');

    localStorage.removeItem('user');
    toast.success('User has been successfully logged out');
  };

  return (
    <header className="bg-neutral">
      <div className="centered-content flex justify-end gap-x-8 items-center py-2 text-neutral-content">
        {
          !!user
            ? <>
              <p>Hello, {user?.user?.username}</p>

              <button
                className="btn btn-outline btn-secondary rounded-xl uppercase"
                onClick={handleClick}
              >Logout</button>
            </>
            : <>
              <Link to="login">Sign in / Guest</Link>
              <Link to="register">Create an Account</Link>
            </>
        }
      </div>
    </header>
  );
};