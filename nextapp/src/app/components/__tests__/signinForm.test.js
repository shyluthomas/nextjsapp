import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Signinform from '../signinForm';
 
// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      replace: () => null
    };
  }
}));

jest.mock("next-auth/react", () => ({
  useSession() {
    return {
      prefetch: () => null
    };
  },

  signIn() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Signinform', () => {
  it('renders a Signin form', () => {
    const {getByLabelText} = render(<Signinform />)
    const email =  screen.getByRole('textbox',{name: /Email/i})
    const password =  getByLabelText(/Password/)
    const SignupButton =  screen.getByRole('button',{name: /Sign in/i})
    expect('Sign In').toBeDefined()
    expect(email).toBeDefined()
    expect(password).toBeDefined()
    expect(SignupButton).toBeDefined()
  })

  it('Test a Signin form submission and validate', () => {
    const {getByLabelText, getByText} = render(<Signinform />)
    const email =  screen.getByRole('textbox',{name: /Email/i})
    const password =  getByLabelText(/Password/)
    const SignupButton =  screen.getByRole('button',{name: /Sign in/i})
    expect(email).toBeDefined()
    expect(password).toBeDefined()
    expect(SignupButton).toBeDefined()
    fireEvent.click(SignupButton);
    expect('Email and Password required').toBeTruthy();

  })
})