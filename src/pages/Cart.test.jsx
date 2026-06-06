import { useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Cart } from "./Cart";

describe('Cart component', () => {
  it('Shopping Cart title is displayed', () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);
    
    const title = screen.getByRole('heading', {level: 2, name: 'Shopping Cart'});
    
    expect(title).toBeInTheDocument();
  });

  it('proceed to checkout link is displayed', () => {
    vi.mocked(useSelector).mockReturnValue({user: {}});
    render(<MemoryRouter><Cart /></MemoryRouter>);

    const proceedLink = screen.getByRole('link', { name: /proceed to checkout/i });

    expect(proceedLink).toBeInTheDocument();
  });

  it('login to checkout link is displayed', () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);

    const loginLink = screen.getByRole('link', { name: /login to checkout/i });

    expect(loginLink).toBeInTheDocument();
  });
});