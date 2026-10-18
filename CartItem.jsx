import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../features/cart/CartSlice.js';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page-container">
      <header className="page-heading">
        <p className="eyebrow" style={{ color: '#1e6845' }}>YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} ready to make your space greener.</p>
      </header>
      {items.length === 0 ? (
        <section className="empty-state">
          <h2>Your cart is taking a little breather.</h2>
          <p>Browse the collection and add a plant to get started.</p>
          <Link className="small-button" to="/products">Browse plants</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button aria-label="Decrease quantity" disabled={item.quantity <= 1}
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label="Increase quantity"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                    <button className="danger-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                  </div>
                </div>
                <strong className="row-total">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
            <div><Link className="secondary-button" to="/products">← Continue shopping</Link></div>
          </section>
          <aside className="cart-summary">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Items</span><span>{totalItems}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Free</span></div>
            <div className="summary-line summary-total"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <button className="primary-button" style={{ width: '100%' }} onClick={() => window.alert('Demo checkout: no payment has been taken.')}>Continue to checkout</button>
            <p style={{ color: '#65766a', fontSize: 12, lineHeight: 1.6 }}>Demo checkout only. No payment details are collected.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
