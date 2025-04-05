import React from 'react';
import { useSelector } from 'react-redux';
import './wishlist.css'; // Import the CSS file

export default function WishList() { // Fixed the function name spelling
    const wishList = useSelector((state) => state.wishList.wishList);
  
    return (
        <div className="wishlist-container">
            <h2 className="wishlist-header">Wishlist</h2>
            <div className="wishlist-items">
                {wishList.length > 0 ? (
                    wishList.map((item, index) => (
                        <div className="wishlist-item" key={index}>{item.title}</div>
                    ))
                ) : (
                    <div className="wishlist-empty">Your wishlist is empty</div>
                )}
            </div>
        </div>
    );
}