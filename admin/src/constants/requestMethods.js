import axios from "axios"

const BASE_URL = 'http://localhost:5000/api/';

const storedData = localStorage.getItem('persist:root');

let TOKEN = '';

if (storedData) {
    const parsedData = JSON.parse(JSON.parse(storedData).user);
    
    if (parsedData.currentUser) {
        TOKEN = parsedData.currentUser.accessToken;
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});

