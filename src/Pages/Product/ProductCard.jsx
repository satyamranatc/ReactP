import React,{useState} from 'react'
import { HeartIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../ReduxSlicer/ProductSlicer";
import { addToWishList,removeFromWishList } from '../../ReduxSlicer/WishListSlicer';


export default function ProductCard({product}) {
    const [isHearted, setIsHearted] = useState(false);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // Optional: Show a toast notification
      };
    
  return (
    <div className="product-card" key={product.id}>
    <div className="product-image">
     {
        isHearted? (
          <HeartIcon className="heart-icon absolute top-1 left-1 z-10" color='red' fill='red' onClick={() =>{
            setIsHearted(false);
            dispatch(removeFromWishList(product));
          }} />
        ) : (
          <HeartIcon className="heart-icon absolute top-1 left-1 z-10" onClick={() => {
            setIsHearted(true);
            dispatch(addToWishList(product));
          }} />
        )
 
     }
      <img src={product.images[0]} alt={product.title} />
      {product.discountPercentage && (
        <span className="discount-badge">{Math.round(product.discountPercentage)}% OFF</span>
      )}
    </div>
    <div className="product-info">
      <h3>{product.title}</h3>
      {product.brand && <p className="product-brand">{product.brand}</p>}
      <p className="product-description">{product.description}</p>
      <div className="product-meta">
        <p className="product-price">${product.price}</p>
        {product.rating && (
          <div className="product-rating">
            <span className="stars">{'★'.repeat(Math.round(product.rating))}</span>
            <span className="rating-value">({product.rating})</span>
          </div>
        )}
      </div>
    </div>
    <div className="product-actions">
      <button 
        className="add-to-cart-btn"
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </button>
      <button className="buy-now-btn">Buy Now</button>
    </div>
  </div>
  )
}
