import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "../ReduxSlicer/ProductSlicer"; // Corrected import

let Store = configureStore({
    reducer: {
        product: ProductReducer // Changed key name to match the state correctly
    }
});

export default Store;
