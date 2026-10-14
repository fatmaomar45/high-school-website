import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '@/components/Nav';
import { usePathname, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('Nav Component', () => {
  const mockPush = jest.fn();
  const mockPathname = '/';

  beforeEach(() => {
    jest.clearAllMocks();
    usePathname.mockReturnValue(mockPathname);
    useRouter.mockReturnValue({ push: mockPush });
  });

  it('renders the logo with correct text', () => {
    render(<Nav />);
    expect(screen.getByAltText('Lamu Girls Crest')).toBeInTheDocument();
    expect(screen.getByText('Lamu Girls')).toBeInTheDocument();
    expect(screen.getByText('Strive to Excel')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Nav />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Admissions')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Apply Now button', () => {
    render(<Nav />);
    expect(screen.getByText('Apply Now')).toBeInTheDocument();
  });

  it('highlights active link based on pathname', () => {
    usePathname.mockReturnValue('/about');
    render(<Nav />);
    const aboutLink = screen.getByText('About Us');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Nav />);
    const hamburger = screen.getByLabelText('Toggle menu');
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  });

  it('navigates to home when logo is clicked', () => {
    render(<Nav />);
    const logo = screen.getByAltText('Lamu Girls Crest').parentElement;
    fireEvent.click(logo);
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});