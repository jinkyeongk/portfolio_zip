import React from 'react';
import {  Routes, Route, BrowserRouter as Router} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={About} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;