import { Text, Heading, Button, Spinner, Center, Box, HStack, VStack, useToast } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import api from '../src/services';
import { useIsFocused } from '@react-navigation/native';
import { getErrorMessage } from '../src/helper/errors';

const CheckLogin = ({route, navigation}) => {
    const toast = useToast()
    const isFocused = useIsFocused();
    console.log('abriu o check login') 
    const [localData, setLocalData] = useState(null)
    const handleLogout = async() => {
        await AsyncStorage.setItem('userdata', '')
        setLocalData(null)
    }
    useEffect(() => {
        try {
        const getLocalData = async() => {
            const data = await AsyncStorage.getItem('userdata')
            if(data){
                const { id, token } = JSON.parse(data)
                api.getUserData({
                    id: id,
                    token: token
                }).then((res) => {
                    console.log(res)
                    if(res.error) {
                        navigation.navigate('Login')
                        toast.show({description: getErrorMessage(res.errorCode)})
                    } else {
                        navigation.navigate('HomeScreen', {userdata: res})
                    }
                    setLocalData(JSON.stringify(res))
                }).catch((err) => {
                    console.log(err)
                    navigation.navigate('Welcome')
                })
            } else {
                navigation.navigate('Welcome')
            }
        }
        getLocalData()
    } catch (error) {
        console.log(error)
        navigation.navigate('Welcome')
    }
    }, [isFocused])
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
        <Text mt={2}>Carregando...</Text>
    </VStack>
  )
}

export default CheckLogin