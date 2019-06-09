import axios from 'axios';

const token = sessionStorage.getItem('token');
export default axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { 'Authorization': `Bearer ${token}`}
});