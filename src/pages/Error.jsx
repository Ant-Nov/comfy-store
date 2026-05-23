import { Link, useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();

  return (
    <main className='grid min-h-screen place-items-center px-8'>
      <div className='text-center'>
        {
          error.status === 404
            ? <div>
                <p className='text-9xl font-semibold text-primary'>404</p>
                <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
                Page not found
              </h1>
            </div>
            : <h4 className='text-center font-bold text-4xl'>Something went wrong</h4>
        }

        <Link to="/" className='btn btn-secondary mt-10'>Go Back Page</Link>
      </div>

    </main>
  );
};
