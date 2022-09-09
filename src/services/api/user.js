import axios from "axios";
import baseUrl from "../config";
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getUserData = async({id, token}) => {
    const raw = await fetch(baseUrl + '/user/getdata', {
        headers, method: 'POST',
        body: JSON.stringify({id, token})
    })
    return await raw.json()
}

export const getUsers = async(apikey) => {
    return await axios.post(baseUrl + '/user/getusers', {
        apikey
    })
}