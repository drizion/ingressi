import { Text, Heading, Button, Spinner, Center, Box, HStack, VStack, useToast } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'

const CheckLogin = ({route, navigation}) => {
    console.log('abriu o check login') 
    navigation.navigate('HomeScreen')
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
        <Text mt={2}>Carregando...</Text>
    </VStack>
  )
}

export default CheckLogin