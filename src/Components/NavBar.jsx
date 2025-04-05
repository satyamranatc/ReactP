import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  let Data = useSelector((state) => state.product.CartData);
  console.log(Data.length);

  return (
    <nav>
        <h2>The Prododuct Spahare</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/wishlist">My Wishlist</Link></li>  {/* Add this line */}  {/* Add this line */}  {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}   {/* Add this line */}
            <li><Link to="/cart">Cart {
              Data.length > 0? (
                <span className="badge p-1 text-black bg-gray-100 rounded-bl-full">{Data.length}</span>
              ) : null
              
            }</Link></li>
        </ul>
        
    </nav>
  )
}
