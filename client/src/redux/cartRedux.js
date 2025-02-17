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
        deleteProduct: (state, action) => {
            const productIndex = state.products.findIndex(item => item._id === action.payload);
            if (productIndex !== -1) {
                const product = state.products[productIndex];
                state.total -= product.price * product.quantity;
                state.quantity -= 1;
                state.products.splice(productIndex, 1);
            }
        },
    }
});

export const { addProduct, removeQuality, addQuality, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;