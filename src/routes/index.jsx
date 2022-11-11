import React, { useState, useContext } from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth'
import { Button, Center, Text, Spacer, Box } from 'native-base';

const Routes = () => {
    const { signed, loading, signOut } = useContext(AuthContext)
    if(loading) return (<Center safeArea flex={1}>
        <Box flex={1} justifyContent={'center'}>
            <Text mt={10}>Carregando...</Text>
        </Box>
    </Center>);
    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes