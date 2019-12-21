import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.21.180:8080',
})

export default api;