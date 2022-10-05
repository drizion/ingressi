import React, { useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HStack, ScrollView, FormControl, Input, Heading, Box, StatusBar, Divider, Text, Button, Spacer, useToast } from 'native-base';
import { isEmail } from '../../handlers/handleRegister'; 
import { styles } from '../../components/styles';
import { BackHandler } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

const LoginScreen = ({navigation}) => {
  const route = useRoute()
  console.log('abriu a tela de login')
  const toast = useToast()
  const { signed, setSigned } = useContext(AuthContext)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  useEffect(() => {
    if(credentials.email == '' || !!isEmail(credentials.email)){
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
    }
  }, [credentials])

  const handleLogin = (value) => {
    setCredentials({...credentials, ...value})
    console.log(credentials)
  }
  const handleSubmit = () => {
    // fazer login na api
    console.log(signed)
    setSigned(true)
  }
  return (
    <ScrollView px={5} pt={5} flex={1} safeArea>
      <Heading size={'2xl'} pb={8}>Entrar</Heading>
      <FormControl isInvalid={!isValidEmail} isRequired mb={5}>
        <FormControl.Label>Email:</FormControl.Label>
        <Input onChangeText={email => handleLogin({email})} style={styles.brutalButton} variant={'unstyled'} size={'md'} type="email" placeholder="seuemail@exemplo.com" />
        <FormControl.ErrorMessage>Email inválido</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={!isValidPassword} isRequired mb={5}>
        <FormControl.Label>Senha</FormControl.Label>
        <Input onChangeText={password => handleLogin({password})} style={styles.brutalButton} variant={'unstyled'} size={'md'} type="password" placeholder="Crie uma senha de no mínimo 8 caracteres" />
        <FormControl.ErrorMessage>Senha incorreta</FormControl.ErrorMessage>
      </FormControl>
      <Text mb={5}>Esqueceu a senha?</Text>
      <Button colorScheme={'emerald'} style={styles.brutalButton} onPress={() => handleSubmit()} size={'lg'} mb={2}>Entrar</Button>
      <Button colorScheme={'emerald'} onPress={() => navigation.navigate('Register')} size={'lg'} variant={"link"} marginBottom={2}>Não tem uma conta? Clique aqui.</Button>
    </ScrollView>
  )
}

export default LoginScreen