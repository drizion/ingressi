import React, { useState, useEffect } from 'react'
import { Text, Heading, Button, Spinner, Center, Box, HStack, VStack, useToast, Toast } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import useLogin from '../../services/global/user/login';
import { useNavigation } from '@react-navigation/native';

const StoreData = (props) => {
  const navigation = useNavigation()


  async function saveJWT(key, value) {
    const userToken = await SecureStore.setItemAsync(key, value);
    console.log('userToken')
  }
  async function deleteStore(key, value) {
    await SecureStore.deleteItemAsync(key, value);
  }
  

}

const CheckLogin = ({route, navigation}) => {
  const { credentials } = route.params
  const [jwt, setJWT] = useState(null)
  async function saveKey(key, value) {
    const userToken = await SecureStore.setItemAsync(key, value);
    console.log(userToken)
  }
  async function deleteKey(key) {
    const userToken = await SecureStore.deleteItemAsync(key);
    console.log(userToken)
  }
  async function getKey(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setJWT(result)
    } else {
      setJWT('No values stored under that key.');
    }
  }
  const {isLoading, data, isError, error} = useLogin({...credentials})
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
        <Text mt={2}>{jwt}</Text>
        <Button onPress={() => saveJWT('test', JSON.stringify({id: 1, jwt: "testando"}))}>salvar</Button>
        <Button onPress={() => deleteJWT('test')}>deletar</Button>
        <Button onPress={() => getJWT('test')}>get</Button>
        {/* <StoreData credentials={credentials} /> */}
    </VStack>
  )
}

export default CheckLogin