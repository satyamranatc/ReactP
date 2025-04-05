import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import "./ProductDetails.css";
import { HeartIcon } from 'lucide-react';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid() {
  const dispatch = useDispatch();
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setProducts(response.data);
      
      // Extract unique categories
      const categoryList = response.data.map(product => product.category.name);
      const uniqueCategories = [...new Set(categoryList)];
      setCategories(uniqueCategories);
      
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
      setIsLoading(false);
    }
  };

  const filteredProducts = products?.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category.name === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="product-grid-container">
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="product-header">
            <h1>Our Products</h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <section className="categories-section">
            <h2>Categories</h2>
            <div className="category-buttons">
              <button 
                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
              >
                All Products
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {filteredProducts?.length === 0 ? (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts?.map(product => (
                <ProductCard key={product.id} product ={ product}/>
                
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}