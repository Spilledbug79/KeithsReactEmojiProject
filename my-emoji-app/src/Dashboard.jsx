import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

 

function HomePage() {
  return <h1>Home Page</h1>;
}

function AboutPage() {
  return <h1>Emoji App</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}


export default App;