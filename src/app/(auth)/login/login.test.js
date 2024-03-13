/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './page';
import { createClient } from '@/lib/supabase/client';

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

it('renders Login component without crashing', () => {
  render(<Login />);
});

describe('Login', () => {
  it('displays an error message when login fails', async () => {
    const errorMessage = 'Invalid login credentials';
    const mockSignInWithPassword = jest.fn().mockResolvedValue({
      data: null,
      error: { message: errorMessage },
    });

    // Mock the signInWithPassword to simulate a login failure
    const supabase = createClient();
    supabase.auth.signInWithPassword = mockSignInWithPassword;

    const { getByPlaceholderText, getByText, findByText } = render(
      <Login />
    );

    // Simulate user input
    fireEvent.change(getByPlaceholderText('email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByPlaceholderText('password'), {
      target: { value: 'wrongpassword' },
    });

    // Simulate form submission
    fireEvent.click(getByText('Submit'));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(mockSignInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'wrongpassword',
      });

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
