import React from 'react'
import { HStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';

const RegisterScreen = ({navigation}) => {
  return (
    <Box flex={1}>
      <Text>Aqui vai ser a tela de cadastro</Text>
      <Spacer />
      <Button onPress={() => navigation.navigate('HomeScreen')} size={'lg'} mb={6}>Entrar sem Cadastro</Button>
    </Box>
  )
}

export default RegisterScreen