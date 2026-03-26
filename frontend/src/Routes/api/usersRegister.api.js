import axios from 'axios';

const baseUser = axios.create({
    baseURL: 'http://localhost:8000/register' 
})


export const getCountries = () => baseUser.get('/countries/');

export const createUser = (formDataUser) => baseUser.post('/', formDataUser);
