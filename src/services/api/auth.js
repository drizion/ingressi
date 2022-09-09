import axios from "axios";
import baseUrl from "../config";
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
// nada funcional ainda
// necessário consertar o backend

export const authenticate = async({email, password}) => {
    const raw = await fetch(baseUrl + '/auth/authenticate', {
        headers, method: 'POST',
        body: JSON.stringify({email, password})
    })
    return await raw.json()
}

export const register = async({email, username, password, name, userLevel, profilePicture}) => {
    const raw = await fetch(baseUrl + '/auth/register', {
        headers, method: 'POST',
        body: JSON.stringify({email, username, password, nome: name, userLevel, profilePicture})
    })
    return await raw.json()
}

export const checkToken = async({id, token}) => {
    const raw = await fetch(baseUrl + '/auth/token', {
        headers, method: 'POST',
        body: JSON.stringify({id, token})
    })
    return await raw.json()
}

export const resetPassword = async({id, newPassword}) => {
    const raw = await fetch(baseUrl + '/auth/resetpassword', {
        headers, method: 'POST',
        body: JSON.stringify({id, newPassword})
    })
    return await raw.json()
}