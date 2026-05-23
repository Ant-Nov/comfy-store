import { Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { customHttp } from "../utils";

export const Login  = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => customHttp.post('/auth/local', data),
    onSuccess: (r) => {
      dispatch(loginUser(r.data));
      localStorage.setItem('user', JSON.stringify(r.data));
      toast.success('Successfully logged in');
      navigate('/');
    },
    onError: (e) => {
      const errorMsg = e?.response?.data?.error?.message || 'Oops, something went wrong';

      toast.error(errorMsg);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);
  };

  const loginAsGuest = () => {
    mutate({
      identifier: 'test@test.com',
      password: 'secret',
    });
  };

  return (
    <section className="h-screen grid place-items-center">
      <form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput title="Email" name='identifier' type="email" defaultValue="sdsf@sg.com"/>
        <FormInput title="Password" name='password' type="password"  defaultValue="sfldfkjsd"/>

        <div className="mt-4">
          <SubmitBtn title="Login" isPending={isPending} className='btn-primary uppercase'/>
        </div>

        <button
          className="btn btn-secondary uppercase"
          type="button"
          disabled={isPending}
          onClick={loginAsGuest}
        >Guest User</button>

        <p className="text-center">
          Not a memeber yet?

          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >Register</Link>
        </p>
      </form>
    </section>
  );
};