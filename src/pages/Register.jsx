import { useMutation } from "@tanstack/react-query";
import { FormInput, SubmitBtn } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { customHttp } from "../utils";
import { toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>  customHttp.post('/auth/local/register', data),
    onSuccess: (r) => {
      toast.success('Successfully registered');
      navigate('/login');
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

  return (
    <section className="h-screen grid place-items-center">
      <form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center text-3xl font-bond">Register</h4>
        <FormInput title="Username" name='username' />
        <FormInput title="Email" name='email' type="email" />
        <FormInput title="Password" name='password' type="password" />

        <div className="mt-4">
          <SubmitBtn title="Register" isPending={isPending} className='btn-primary uppercase font-bold'/>
        </div>

        <p className="text-center">
          Already a member?

          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >Login</Link>
        </p>
      </form>
    </section>
  );
};