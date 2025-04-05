import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "../ReduxSlicer/ProductSlicer";
import WishListReducer from "../ReduxSlicer/WishListSlicer";

let Store = configureStore({
    reducer: {
        product: ProductReducer, 
        wishList: WishListReducer 
    }
});

export default Store;
