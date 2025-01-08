'use client';

import { signup } from '../actions/actions';
import '../styles/styles.css';

const SignupPage: React.FC = () => {
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form action={signup} method="POST" className="signup-form">
        <div className="form-group">
          <label htmlFor="email-signup">Email:</label>
          <input
            id="email-signup"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-signup">Password:</label>
          <input
            id="password-signup"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
