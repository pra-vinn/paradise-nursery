import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import { useSelector } from 'react-redux';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="landing">
      <div className="landing-shade" />
      <section className="hero-content">
        <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Paradise Nursery</h1>
        <p className="hero-copy">
          Thoughtfully chosen plants to make your home greener, calmer, and more alive.
        </p>
        <button className="primary-button" onClick={() => navigate('/products')}>
          Get Started <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
}

function Header() {
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-icon">❧</span>
        <span>Paradise <strong>Nursery</strong></span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/products">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link className="cart-link" to="/cart">Cart <span className="cart-count">{count}</span></Link>
      </nav>
    </header>
  );
}

export default function App() {
  const [showHeader] = useState(true);
  return (
    <div className="app-shell">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<main className="page-container"><h2>Page not found</h2><Link to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer">Paradise Nursery <span>·</span> Bring nature home.</footer>
    </div>
  );
}
