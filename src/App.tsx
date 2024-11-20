import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;