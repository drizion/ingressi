import { Text, Heading, Button, Spinner, Center, Box, HStack, VStack } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import api from '../src/services';

const CheckLogin = ({navigation}) => {
    const [localData, setLocalData] = useState(null)
    const handleLogout = async() => {
        await AsyncStorage.setItem('userdata', '')
        setLocalData(null)
    }
    useEffect(() => {
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
                    } else {
                        navigation.navigate('HomeScreen')
                    }
                    setLocalData(JSON.stringify(res))
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                navigation.navigate('Welcome')
            }
        }
        getLocalData()
    }, [])
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
        <Text mt={2}>Fazendo login...</Text>
      {/* <Button onPress={() => handleLogout()}>deslogar</Button> */}
    </VStack>
  )
}

export default CheckLogin