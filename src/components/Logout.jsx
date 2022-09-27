import React, { useEffect } from 'react';
import { Box, Center, Text } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
export const Logout = ({navigation}) => {
    const isFocused = useIsFocused()
    useEffect(() => {
        AsyncStorage.removeItem('userdata').then(() => {
            console.log('sessão deletada')
            navigation.navigate('Login')
        }).catch((e) => {
            toast.show({description: e})
        })
    }, [isFocused])
    return (
        <Box>
            <Center>
                <Text>Saindo...</Text>
            </Center>
        </Box>
    )
}