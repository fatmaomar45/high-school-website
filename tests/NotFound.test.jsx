import { render, screen } from '@testing-library/react';
import NotFound from '@/not-found';

describe('NotFound Component', () => {
  it('renders 404 page with home link', () => {
    render(<NotFound />);
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /return home/i })).toBeInTheDocument();
  });
});
