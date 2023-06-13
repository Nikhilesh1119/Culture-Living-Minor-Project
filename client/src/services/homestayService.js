import axios from 'axios';
import { BASE_URL } from '../constants/serviceConstants.js';

export async function saveHost(hostData){
    return await axios.post(`${BASE_URL}hostsignup`,hostData);
}
export async function saveGuest(guestdata){
    return await axios.post(`${BASE_URL}guestsignup`,guestdata);
}

export async function loginGuest(guestdata){
    return await axios.post(`${BASE_URL}guestlogin`,guestdata);
}
export async function getHomestays(){
    const token = await localStorage.getItem("token");
    return await axios.get(`${BASE_URL}homestays`,{headers:{"Authorization":`Bearer ${token}`}});
}