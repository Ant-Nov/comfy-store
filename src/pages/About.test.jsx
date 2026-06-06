import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe('About component', () => {
  beforeEach(() => {
    render(<About/>);
  });

  it('heading is displayed', () => {
    const heading = screen.getByRole('heading', { level: 1, name: /we love/i });

    expect(heading).toBeInTheDocument();
  });
});