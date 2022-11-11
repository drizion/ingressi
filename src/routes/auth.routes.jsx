import React, { useContext, useEffect } from 'react';
import { LogBox } from 'react-native';
import WelcomeScreen from '../screens/auth/WelcomeScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import PostRegisterScreen from '../screens/auth/PostRegisterScreen'
import CheckLogin from '../screens/auth/CheckLogin'
import AppRoutes from './app.routes'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthContext from '../contexts/auth';

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () => {
    useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    }, [])
    return (
        <AuthStack.Navigator initialRouteName="Welcome">
            <AuthStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
            />           
            <AuthStack.Screen
            name="Check"
            component={CheckLogin}
            options={{ title: "Entrando..." }}
            />
            <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Cadastre-se!" }}
            />
            <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
            />
            <AuthStack.Screen
            name="HomeScreen"
            component={AppRoutes}
            options={{ headerShown: false }}
            />
            <AuthStack.Screen
            name="PostRegister"
            component={PostRegisterScreen}
            options={{ title: "Quase lá"}}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes