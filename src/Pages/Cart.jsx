import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; // Import external CSS


export default function Cart() {
  let Data = useSelector((state) => state.product.CartData);
  // Remove Duplicates
  const uniqueData = [...new Set(Data)];


  // Calculate Total Price
  const totalPrice = uniqueData.reduce((acc, curr) => acc + curr.price, 0);


  //!         Qunatity Logic For Duplicates Property .......?

  return (
    <>

    <div className="cart-container">
      <h2 className="cart-title">Cart Items</h2>
      
      {uniqueData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {uniqueData.map((item, index) => (
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
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <p>Total Items: {uniqueData.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <button className="checkout-btn">Checkout</button>
    </div>
    </>
  );
}
