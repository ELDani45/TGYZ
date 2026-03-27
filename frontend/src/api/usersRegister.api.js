import axios from 'axios';

const baseUser = axios.create({
    baseURL: 'http://localhost:8000/api' 
})


export const getCountries = () => baseUser.get('/countries/');

export const createUser = (data) => baseUser.post('/register/', data);
