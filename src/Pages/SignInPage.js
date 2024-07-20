import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/SignInPage.css'

const SignInPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    console.log('Signing in with:', { username, password });
  };

  const handleSignUp = () => {
    navigate('/Sign Up');
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <button onClick={handleSignUp}>Sign Up</button></p>
    </div>
  );
};

export default SignInPage;