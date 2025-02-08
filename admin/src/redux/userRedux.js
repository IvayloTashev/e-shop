import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        users: [],
        isFetching: false,
        error: false,
    },

    reducers: {
        //LOGIN
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;

        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //LOGOUT
        logout: (state) => {
            state.currentUser = null;
        },

        //GET ALL
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },

        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload
        },

        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },

        //UPDATE
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },

        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            const index = state.users.findIndex((item) => item._id === action.payload._id)
            if (index !== -1) {
                state.users[index] = action.payload
            }
        },

        updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },

        //DELETE
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },

        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(state.users.findIndex((item) => item._id === action.payload), 1)
        },

        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },

        //CREATE
        createUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        createUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload)
        },

        createUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {
    logout,
    loginStart, loginSuccess, loginFailure,
    getUserStart, getUserSuccess, getUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure,
    createUserStart, createUserSuccess, createUserFailure
} = userSlice.actions;
export default userSlice.reducer;