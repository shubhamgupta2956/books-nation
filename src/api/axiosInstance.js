const axios = require('axios');
export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    baseURL: `https://www.googleapis.com/books/v1/volumes`
});