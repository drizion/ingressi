import axios from "axios";
import baseUrl from "../config";

export const getUserData = async({token}) => {
    return await axios.post(baseUrl + '/user/getdata', {
        token
    })
}

export const getUsers = async(apikey) => {
    return await axios.post(baseUrl + '/user/getusers', {
        apikey
    })
}