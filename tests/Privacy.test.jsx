import { render, screen } from '@testing-library/react';
import Privacy from '@/privacy/page';

describe('Privacy Policy Page', () => {
  it('renders privacy policy content', () => {
    render(<Privacy />);
    expect(screen.getByRole('heading', { name: /privacy policy/i })).toBeInTheDocument();
  });
});
