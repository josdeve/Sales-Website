import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/SignUpPage.css';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you'd likely have more robust checks in a real app)
    if (password !== retypePassword) {
      alert('Passwords do not match. Try Again');
      return;
    }

    // Handle sign-up logic here (e.g., send data to a backend)
    console.log('Sign up data:', { name, email, password });

    // Redirect to sign-in page
    navigate('/sign in');
  };

  const isFormValid = () => {
    return name !== '' && email !== '' && password !== '' && retypePassword !== '';
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Retype the Password:
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!isFormValid()}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;