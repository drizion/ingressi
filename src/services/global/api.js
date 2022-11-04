import axios from 'axios';

const api = axios.create({
    baseURL: "http://178.255.219.100:1313"
})

export default api