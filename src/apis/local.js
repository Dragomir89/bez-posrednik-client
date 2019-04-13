import axios from 'axios';

const token = sessionStorage.getItem('token');
export default axios.create({
    baseURL: 'https://bez-posrednik-api.herokuapp.com/',
    headers: { 'Authorization': `Bearer ${token}`}
});