import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
        <h2>The Prododuct Spahare</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        
    </nav>
  )
}
