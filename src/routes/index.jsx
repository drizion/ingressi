import React, { useState, useContext } from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth'

const Routes = () => {
    const { signed, loading } = useContext(AuthContext)
    if(loading) return null;
    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes