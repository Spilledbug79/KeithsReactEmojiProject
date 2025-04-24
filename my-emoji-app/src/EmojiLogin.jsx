import React, { useState } from 'react';
import EmojiApp from './EmojiApp.jsx'

// Define your components
 
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials for demonstration purposes
    if (username === 'keith' && password === 'password') {
      onLogin(true); // Call onLogin function and pass true
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

// Main app component
const EmojiLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <EmojiApp/> : <LoginPage onLogin={setIsLoggedIn} />}
    </div>
  );
};

export default EmojiLogin;
