import React, { useState } from 'react';

const initialCart = [
  { id: 1, name: "VPN Premium", price: 10, quantity: 1, img: "https://via.placeholder.com/60" },
  { id: 2, name: "VPS Hosting", price: 25, quantity: 2, img: "https://via.placeholder.com/60" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="header-title">Ваша корзина</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">${item.price.toFixed(2)}</div>
          </div>
          <div className="cart-item-actions">
            <button
              className="cart-item-remove"
              onClick={() => removeItem(item.id)}
            >
              &times;
            </button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <div className="cart-summary-total">
          Итого: ${calculateTotal().toFixed(2)}
        </div>
        <button className="cart-checkout-btn">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
