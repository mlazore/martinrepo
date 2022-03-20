import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
