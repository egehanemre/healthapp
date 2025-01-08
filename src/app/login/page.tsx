'use client';

import '../styles/styles.css';
import { login, signup } from '../actions/actions';

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <form action={login} method="POST" className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-btn">
          Log in
        </button>
      </form>
     
    </div>
  );
}