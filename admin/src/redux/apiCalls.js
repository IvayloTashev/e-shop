import {
    logout,
    loginStart, loginSuccess, loginFailure,
    getUserStart, getUserSuccess, getUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure,
    createUserStart, createUserSuccess, createUserFailure
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

export const logoutUser = async (dispatch) => {
    dispatch(logout());
};

export const deleteUser = async (dispatch, id) => {
    dispatch(deleteUserStart());

    try {
        const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));

    } catch (error) {
        dispatch(deleteUserFailure());
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

export const updateUser = async (dispatch, user, id) => {
    dispatch(updateUserStart);

    try {
        const res = await userRequest.put(`/users/${id}`, user);
        dispatch(updateUserSuccess(res.data));

    } catch (error) {
        dispatch(updateUserFailure())
    }
};

export const createUser = async (dispatch, user) => {
    dispatch(createUserStart());

    try {
        const res = await userRequest.post(`/auth/register`, user);
        dispatch(createUserSuccess(res.data));

    } catch (error) {
        dispatch(createUserFailure());
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