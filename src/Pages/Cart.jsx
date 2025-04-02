import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; // Import external CSS

export default function Cart() {
  let Data = useSelector((state) => state.product.CartData);
  let dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart Items</h2>
      
      {Data.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {Data.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <p>Price: ${item.price}</p>
              <button className="remove-btn" onClick={() => {}}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
