import { useRouteError } from 'react-router-dom';

export const SinglePageError = () => {
  const error = useRouteError();

  return (
    <h2>{error.message}</h2>
  );
};