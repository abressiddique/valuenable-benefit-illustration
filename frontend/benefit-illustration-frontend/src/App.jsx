import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import PolicyForm from './components/PolicyForm';
import Illustration from './components/Illustration';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/policy" element={<PolicyForm />} />
        <Route path="/illustration/:policyId" element={<Illustration />} />
      </Routes>
    </Router>
  );
};

export default App;