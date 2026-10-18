import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice.js';

const products = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement plants', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80', description: 'A bold tropical favourite with beautifully split leaves.', care: 'Bright, indirect light' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy care', price: 18.50, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b68?auto=format&fit=crop&w=800&q=80', description: 'A hardy upright plant that suits busy plant parents.', care: 'Low to bright indirect light' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Trailing plants', price: 14.00, image: 'https://images.unsplash.com/photo-1617000977983-b3c2f2f7f4f5?auto=format&fit=crop&w=800&q=80', description: 'Trailing green leaves bring softness to shelves and corners.', care: 'Medium, indirect light' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy care', price: 21.00, image: 'https://images.unsplash.com/photo-1632207691143-643e2f5b4f4b?auto=format&fit=crop&w=800&q=80', description: 'Glossy leaves and a relaxed attitude make this a classic.', care: 'Low to medium light' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'Flowering plants', price: 22.50, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80', description: 'Elegant green foliage with graceful white blooms.', care: 'Medium, indirect light' },
  { id: 'rubber', name: 'Rubber Plant', category: 'Statement plants', price: 27.00, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', description: 'Deep green leaves create a striking focal point.', care: 'Bright, indirect light' }
];

export default function ProductList() {
  const dispatch = useDispatch();
  return (
    <main className="page-container">
      <header className="page-heading">
        <p className="eyebrow" style={{ color: '#1e6845' }}>THE GREEN COLLECTION</p>
        <h1>Find your new favourite plant.</h1>
        <p>Easy-care classics and leafy statement plants for every corner of your home.</p>
      </header>
      <section className="product-grid" aria-label="Plant products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img className="product-art" src={product.image} alt={product.name} loading="lazy" />
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.description}<br /><strong>Care:</strong> {product.care}.</p>
              <div className="product-bottom">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="small-button" onClick={() => dispatch(addItem(product))}>
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
