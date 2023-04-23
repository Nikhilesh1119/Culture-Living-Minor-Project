import axios from 'axios';
// import { BASE_URL } from '../constants/serviceConstants.js';

export async function saveHost(hostData){
    return await axios.post("http://localhost:4500/hostsignup",hostData);
}
export async function saveGuest(guestdata){
    return await axios.post("http://localhost:4500/guestsignup",guestdata);
}

export async function loginGuest(guestdata){
    return await axios.post("http://localhost:4500/guestlogin",guestdata);
}
export async function getHomestays(){
    const token = await localStorage.getItem("token");
    return await axios.get("http://localhost:4500/homestays",{headers:{"Authorization":`Bearer ${token}`}});
}