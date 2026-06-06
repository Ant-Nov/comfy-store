import { screen, render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Register } from './Register';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { worker } from '../mocks/browser';
import { http, HttpResponse } from 'msw';
import { toast } from 'react-toastify';


describe('Register component', () => {
  const spyToastSuccess = vi.spyOn(toast, 'success');
  const spyToastError = vi.spyOn(toast, 'error');

  const renderComponent = () => {
    const queryClient = new QueryClient();
    const testRouter = createMemoryRouter(
      [{ path: '/register', element: <Register /> }],
      { initialEntries: ['/register'] }
    );

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={testRouter} />
      </QueryClientProvider>
    );

    return { testRouter };
  };

  it('navigates to /login and calls success toast on request success', async () => {
    const user = userEvent.setup();
    const { testRouter } = renderComponent();

    const submitBtn = screen.getByRole('button', { name: 'Register'});
    const username = screen.getByRole('textbox', { name: /username/i });
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);

    await user.type(username, 'somethixnsgdg');
    await user.type(email, 'sfdfsd@gmail.com');
    await user.type(password, 'somethixnsgdg');
    await user.click(submitBtn);

    expect(spyToastSuccess).toHaveBeenCalledWith('Successfully registered');
    expect(testRouter.state.location.pathname).toBe('/login');
  });

  it('calls toast error on request error', async () => {
    const user = userEvent.setup();

    worker.use(http.post('https://strapi-store-server.onrender.com/api/auth/local/register', () => {
      return HttpResponse.json({ error: 'Error' }, { status: 500 });
    }, {once: true} ));

    renderComponent();

    const submitBtn = screen.getByRole('button', { name: 'Register'});
    const username = screen.getByRole('textbox', { name: /username/i });
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);


    await user.type(username, 'somethixnsgdg');
    await user.type(email, 'sfdfsd@gmail.com');
    await user.type(password, 'somethixnsgdg');
    await user.click(submitBtn);

    expect(spyToastError).toHaveBeenCalledWith('Oops, something went wrong');
  });
});