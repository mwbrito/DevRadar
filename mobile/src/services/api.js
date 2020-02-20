import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.78.58:3333',
})

export default api;