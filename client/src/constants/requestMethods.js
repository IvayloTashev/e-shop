import axios from "axios"

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmE5ZTljNDI5NDZkZDI3YmJkNmEzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjEwMzk4MSwiZXhwIjoxNzM2Mjc2NzgxfQ.X_JQZtfJ3s90yhbX9o41L75UVGMcgHcgUuo_e4aNhss';

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});

