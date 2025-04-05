import React from 'react'

import NavBar from "./Components/NavBar.jsx"

import Home from "./Pages/Home.jsx"
import ProductGrid from "./Pages/Product/ProductGrid.jsx"
import ProductDetails from "./Pages/Product/ProductDetails.jsx"
import WishLisht from "./Pages/Product/WishLisht.jsx"
import Cart from "./Pages/Cart.jsx"

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishLisht />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
