import React, { createContext, useContext } from 'react';

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const response = {
        name: "Nome",
        picture: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c182026/tanaka-chivanga.jpg",
        level: 1,
        percent: 16,
        mission: {
            id: 1,
            max: 4,
            percent: 25,
            title: "O inicio",
            thumbnail: "https://avatars.githubusercontent.com/u/84392895?s=500&v=4"
        }
    }
    return (
        <AuthContext.Provider value={{signed: !!response, user: response}}>{children}</AuthContext.Provider>
)}

export default AuthContext