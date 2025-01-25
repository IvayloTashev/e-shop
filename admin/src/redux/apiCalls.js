import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { getProductStart, getProductSuccess, getProductFailure } from "./productRedux";

import { publicRequest } from "../constants/requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());

    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));

    } catch (error) {
        dispatch(getProductFailure());
    }
}