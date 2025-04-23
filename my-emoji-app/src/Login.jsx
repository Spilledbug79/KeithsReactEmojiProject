// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
  
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username === 'admin' && password === 'password') {
//       // Successful login - redirect to a protected route (e.g., Dashboard)
//       navigate('.src/components/dashboard.jsx');
//     } else {
//       // Handle login failure (e.g., display an error message)
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;