import axios from 'axios';

const api = axios.create({
    baseURL: "localhost:1313"
})

export default api