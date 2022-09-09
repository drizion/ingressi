import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HStack, VStack, Center, Heading, Box, StatusBar, InputLeftAddon, Text, Button, Spacer, Avatar, FormControl, Input, ScrollView, KeyboardAvoidingView, useToast, Divider } from 'native-base';
import { styles } from '../components/styles';
import { ScrollFix } from '../components/iosBug';
import { isValidUsername } from '../src/handlers/handleRegister';
import api from '../src/services';
import { getErrorMessage } from '../src/helper/errors';

const PostRegisterScreen = ({ route, navigation }) => {
  const toast = useToast()
  const [checkUsername, setCheckUsername] = useState(false)
  const [checkName, setCheckName] = useState(false)
  const { credentials, userType } = route.params
  const [creds, setCreds] = useState(credentials)
  if (!credentials) return navigation.navigate('Register')
  const handleRegister = (value) => {
    setCreds({ ...creds, ...value })
  }
  useEffect(() => {
    if (creds.username == '' || creds.username.length >= 4 && isValidUsername(creds.username)) {
      console.log(creds)
      setCheckUsername(false)
    } else {
      setCheckUsername(true)
    }
  }, [creds])
  const handleSubmit = () => {
    try {
      if (creds.name.length < 1) throw new Error('Você precisa colocar seu nome.')
      if (!isValidUsername(creds.username)) throw new Error('O username é inválido')
      api.register({
        email: creds.email,
        name: creds.name,
        password: creds.password,
        username: creds.username,
        profilePicture: creds.profilePicture,
        userLevel: userType.userType
      }).then(async(res) => {
        if(!res.error) {
          await AsyncStorage.setItem('userdata', JSON.stringify(res))
          navigation.navigate('check')
        } else {
          toast.show({description: getErrorMessage(res.errorCode)})
        }
      })
      .catch((err) => console.log(JSON.stringify(err)))
    } catch (error) {
      toast.show({ description: error.message })
    }
  }
  return (
    <Box flex={1} >
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <Box flex={1} safeArea bg={'#cacaca'}>
          <Spacer/>
          <KeyboardAvoidingView px={5} pt={6} borderTopRadius={50} bg={'#fff'} behavior={"padding"}>
          <ScrollFix>
            <Center>
            <Heading size={'lg'} mb={1} >Estamos quase lá</Heading>
            <Text mb={2}>Falta pouco para lorem ipsum dolor sit amet.</Text>
            </Center>
            <Divider my={3}/>
              <HStack>
                <Avatar size={'lg'} mr={5} />
                <Center>
                  <Button onPress={() => toast.show({ description: "em breve" })} variant={'outline'} size={'lg'} colorScheme={'emerald'}>+ Adicionar foto</Button>
                </Center>
              </HStack>
              <FormControl isInvalid={checkName} isRequired mt={2}>
                <FormControl.Label>Nome:</FormControl.Label>
                <Input style={styles.brutalButton} onChangeText={name => handleRegister({ name })} variant={'unstyled'} size={'md'} type="name" placeholder="Sim, completo :0" />
                <FormControl.ErrorMessage>aaa</FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={checkUsername} isRequired mb={5} mt={2}>
                <FormControl.Label>Username:</FormControl.Label>
                <Input onChangeText={username => handleRegister({ username })} InputLeftElement={<InputLeftAddon borderWidth={0} children={"@"} />} style={styles.brutalButton} variant={'unstyled'} size={'md'} type="name" placeholder="ex: lucas_heuser" />
                <FormControl.ErrorMessage>Formato incorreto. Use 4-20 caracteres, sem espaços, apenas letras, números, pontos e traços.</FormControl.ErrorMessage>
              </FormControl>
              <Spacer />
              <Button colorScheme={'emerald'} onPress={() => handleSubmit()} style={styles.brutalButton} marginBottom={5} size={'lg'}>Tudo pronto!</Button>
          </ScrollFix>
          </KeyboardAvoidingView>
        </Box>
    </Box>
  )
}

export default PostRegisterScreen