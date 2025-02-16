import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },

    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeQuality: (state, action) => {
            const product = state.products.find(item => item._id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                state.total -= product.price;
            }
        },

        addQuality: (state, action) => {
            const product = state.products.find(item => item._id === action.payload);
            if (product) {
                product.quantity += 1;
                state.total += product.price;
            }
        },
    }
});

export const { addProduct, removeQuality, addQuality } = cartSlice.actions;
export default cartSlice.reducer;