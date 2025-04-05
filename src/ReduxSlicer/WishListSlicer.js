import { createSlice } from "@reduxjs/toolkit";

let WishListSlice = createSlice({
    name: "WishListSlice",
    initialState: {
        wishList: []
    },
    reducers: {
        addToWishList: (state, action) => {
            state.wishList.push(action.payload);
            return state;

        },
        removeFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(item => item.id!== action.payload.id);
            return state;
        }
    }
})

export const { addToWishList, removeFromWishList } = WishListSlice.actions;
export default WishListSlice.reducer;