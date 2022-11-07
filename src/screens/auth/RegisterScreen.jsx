import React, { useState, useEffect } from 'react'
import { HStack, ScrollView, Center, FormControl, Input, Radio, Stack, Heading, Box, StatusBar, Divider, Text, Button, Spacer, useToast, Toast } from 'native-base';
import { isEmail } from '../../handlers/handleRegister'; 
import { styles } from '../../components/styles';
import { BackHandler } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [userType, setUserType] = useState({userType: 'ingressante'})
  const [checkPassword, setCheckPassword] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    username: "",
    userType: "ingressante"
  })
  useEffect(() => {
    console.log({...credentials, ...userType})
    if(credentials.email == '' || !!isEmail(credentials.email)){
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
    }
    if(credentials.password == '' || credentials.password.length >= 8) {
      setIsValidPassword(true)
    } else {
      setIsValidPassword(false)
    }
  }, [credentials, userType])
  const repeatPassword = (password) => {
    handleRegister({rePassword: password})
    if(password == credentials.password) {
      setCheckPassword(false)
    } else {
      setCheckPassword(true)
    }
  }
  
  const handleRegister = (value) => {
    setCredentials({...credentials, ...value})
    console.log(value)
  }

  const handleSubmit = () => {
    try {
      if(!isEmail(credentials.email) || credentials.email=='') throw new Error('Você não inseriu um email válido')
      if(credentials.password.length < 8) throw new Error('A senha precisa no mínimo 8 dígitos')
      if(credentials.rePassword == '' || checkPassword) throw new Error('Você não repetiu a senha corretamente')
      navigation.navigate('PostRegister', {credentials})
      //fazer login com api
    } catch (e) {
      Toast.show({description: e.message})
    }
}
  return (
    <ScrollView px={5} pt={5} flex={1} safeArea>
      <Heading size={'2xl'} pb={8}>Inscrever-se</Heading>
      <FormControl isInvalid={!isValidEmail} isRequired mb={5}>
        <FormControl.Label>Email</FormControl.Label>
        <Input onChangeText={email => handleRegister({email})} style={styles.brutalButton} variant={'unstyled'} size={'md'} type="email" placeholder="seuemail@exemplo.com" />
        <FormControl.ErrorMessage>Você precisa colocar seu email!</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={!isValidPassword} isRequired mb={5}>
        <FormControl.Label>Senha</FormControl.Label>
        <Input onChangeText={password => handleRegister({password})} style={styles.brutalButton} variant={'unstyled'} size={'md'} type="password" placeholder="Crie uma senha de no mínimo 8 caracteres" />
        <FormControl.ErrorMessage>Você precisa criar uma senha de no mínimo 8 dígitos!</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={checkPassword} isRequired mb={5}>
        <FormControl.Label>Confirmar senha</FormControl.Label>
        <Input onChangeText={password => repeatPassword(password)} style={styles.brutalButton} variant={'unstyled'} size={'md'} type="password" placeholder="Repita a senha" />
        <FormControl.ErrorMessage >As senhas não são iguais</FormControl.ErrorMessage>
      </FormControl>
      <FormControl mb={5}>
        <Radio.Group onChange={newUserType => setUserType({userType: newUserType})} defaultValue="ingressante" name="usertype">
          <Radio colorScheme={'emerald'} value="ingressante" mb={2} size={'sm'}>
            Eu quero conhecer/estudar no IFC-CAS.
          </Radio>
          <Radio isDisabled colorScheme={'emerald'} value="aluno" size={'sm'}>
            Eu já estudo no IFC-CAS.
          </Radio>
        </Radio.Group>
      </FormControl>
      <Button colorScheme={'emerald'} style={styles.brutalButton} onPress={() => handleSubmit()} size={'lg'} mb={2}>Continuar inscrição</Button>
      <Button colorScheme={'emerald'} onPress={() => navigation.navigate('Login')} size={'lg'} variant={"link"} mb={5}>Já tem uma conta? Clique aqui.</Button>
    </ScrollView>
  )
}

export default RegisterScreen