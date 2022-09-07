import axios from "axios";
import baseUrl from "../config";

// nada funcional ainda
// necessário consertar o backend

export const authenticate = async({email, password}) => {
    return await axios.post(baseUrl + '/auth/authenticate', {
        email, password
    })
}

export const register = async({email, username, password, name, userLevel, profilePicture}) => {
    return await axios.post(baseUrl + '/auth/register', {
        email, username, password, nome: name, userLevel, profilePicture
    })
}

export const checkToken = async({id, token}) => {
    return await axios.post(baseUrl + '/auth/token', {
        id, token
    })
}

export const resetPassword = async({id, newPassword}) => {
    return await axios.post(baseUrl + '/auth/resetpassword', {
        id, newPassword
    })
}