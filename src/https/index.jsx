import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fufiscan.com/',
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});


// List of all the endpoints
export const getBalance = (token) => api.get(`api?module=token&action=getToken&contractaddress=${token}&contract`);
export const getAbi = (contractAddress) => api.get(`https://fufiscan.com/api?module=contract&action=getabi&address=${contractAddress}`)

export default api;





