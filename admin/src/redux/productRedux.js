import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload
        },

        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //DELETE
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload), 1
            )
        },

        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //UPDATE
        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            const index = state.products.findIndex((item) => item._id === action.payload._id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },

        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //CREATE
        createProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        createProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload)
        },

        createProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,
    createProductStart, createProductSuccess, createProductFailure
} = productSlice.actions;
export default productSlice.reducer;
