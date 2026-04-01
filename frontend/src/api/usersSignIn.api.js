import axios from "axios";

const baseURL = axios.create({
    baseURL:'http://localhost:8000/api'
})

export const signin = (data_signin_user) => baseURL.post('/sign_in/', data_signin_user)