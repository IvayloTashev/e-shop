import {
    loginStart, loginSuccess, loginFailure,
    getUserStart, getUserSuccess, getUserFailure,
} from "./userRedux";
import {
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,
    createProductStart, createProductSuccess, createProductFailure,
} from "./productRedux";

import { publicRequest, userRequest } from "../constants/requestMethods";

//USERS
export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }
};

export const getUsers = async (dispatch) => {
    dispatch(getUserStart());

    try {
        const res = await userRequest.get('/users');
        dispatch(getUserSuccess(res.data));
    } catch (error) {
        dispatch(getUserFailure())
    }
};


//PRODUCTS
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());

    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));

    } catch (error) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart());

    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));

    } catch (error) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (dispatch, product, id) => {
    dispatch(updateProductStart());

    try {
        const res = await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess(res.data));

    } catch (error) {
        dispatch(updateProductFailure());
    }
};

export const createProduct = async (dispatch, product) => {
    dispatch(createProductStart());

    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(createProductSuccess(res.data));

    } catch (error) {
        dispatch(createProductFailure());
    }
};