import { createSlice } from "@reduxjs/toolkit";

const ProductSlicer = createSlice({
    name: "ProductSlicer",
    initialState: {
        CartData: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.CartData.push(action.payload);
        }
    }
});

export const { addToCart } = ProductSlicer.actions;
export default ProductSlicer.reducer;
