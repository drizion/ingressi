import React, { useState, useEffect, useContext } from 'react';
import { HStack, VStack, Center, Heading, Box, StatusBar, InputLeftAddon, Stack, Text, Button, Spacer, Avatar, FormControl, Input, ScrollView, KeyboardAvoidingView, useToast, Divider, IconButton, Toast, Spinner } from 'native-base';
import { styles } from '../../components/styles';
import { ScrollFix } from '../../components/iosBug';
import * as FileSystem from 'expo-file-system';
import { isValidUsername } from '../../handlers/handleRegister';
import { Buffer } from "buffer";
import Ionicons from '@expo/vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/global/api';
import { useMutation } from '@tanstack/react-query';
import AuthContext from '../../contexts/auth';

const PostRegisterScreen = ({ route, navigation }) => {
  const toast = useToast()
  const [image, setImage] = useState(null);
  const { signIn } = useContext(AuthContext)
  const [checkUsername, setCheckUsername] = useState(false)
  const [checkName, setCheckName] = useState(false)
  const { credentials, userType } = route.params
  const [creds, setCreds] = useState(credentials)
  if (!credentials) return navigation.navigate('Register')

  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: false
    });
      console.log(result.uri)
      if (!result.cancelled) {
        setImage(result.uri);
    }
  };

  const registerMutation  = useMutation(async ({email, name, password, username})=>{
    if(!image) {
      console.log('registrando sem imagem', creds)
      const { data } = await api.post('/auth/register', {
        email, password, name, username
      })
      return data;
    } else {
      console.log('registrando com imagem', image);
      const { body } = await FileSystem.uploadAsync(`http://178.255.219.100:1313/auth/register`, image, {
          fieldName: 'photo',
          httpMethod: 'POST',
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          parameters: {email, password, name, username}
        })
      const data = JSON.parse(body)
      if(data.status!==200) throw new Error(data.message)
      return data
    }
  }, {
    onSuccess : (data)=>{
      console.log('registro realizado com sucesso!')
      signIn(data)
    },
    onError: (error, variables, context) => {
      console.log(error);
      Toast.show({title: "Erro", description: String(error.message)})
    }
  })

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
    if(creds.name.includes(' ') || creds.name == ''){
      setCheckName(false)
    } else {
      setCheckName(true)
    }
  }, [creds])
  const handleSubmit = () => {
    try {
      if (creds.name.length < 1) throw new Error('Você precisa colocar seu nome.')
      if (!isValidUsername(creds.username)) throw new Error('O username é inválido')
      if (checkName) throw new Error('Você precisa inserir seu nome completo')
      registerMutation.mutate(creds)
    } catch (error) {
      Toast.show({ title: "Erro", description: error.message })
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
            <Text mb={2}>Falta pouco para começar sua jornada.</Text>
            </Center>
            <Divider my={3}/>
              <HStack space={2} alignItems={"center"}>
                <Avatar source={{uri: image}} size={'lg'} />
                {/* <Center> */}
                <Stack>
                  <Button onPress={pickImage} variant={'outline'} size={'lg'} colorScheme={'emerald'}>{image ? "+ Alterar foto" : "+ Adicionar foto"}</Button>
                </Stack>
                {image?
                  <Stack>
                    <IconButton variant={"outline"} colorScheme={"emerald"} size={'md'} _icon={{ as: Ionicons, name: 'trash' }} onPress={() => setImage(null)} />
                  </Stack>
                :null}
                {/* </Center> */}
              </HStack>
              <FormControl isInvalid={checkName} isRequired mt={2}>
                <FormControl.Label>Nome:</FormControl.Label>
                <Input style={styles.brutalButton} onChangeText={name => handleRegister({ name })} variant={'unstyled'} size={'md'} type="name" placeholder="Sim, completo :0" />
                <FormControl.ErrorMessage>Você precisa inserir o seu nome completo</FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={checkUsername} isRequired mb={5} mt={2}>
                <FormControl.Label>Username:</FormControl.Label>
                <Box style={styles.brutalButton}>
                  <Input onChangeText={username => handleRegister({ username })} InputLeftElement={<Text ml={3} fontSize={'md'}>@</Text>} variant={'unstyled'} size={'md'} type="name" placeholder="ex: eu_drizion" />
                </Box>
                <FormControl.ErrorMessage>Formato incorreto. Use 4-20 caracteres, sem espaços, apenas letras, números, pontos e traços.</FormControl.ErrorMessage>
              </FormControl>
              <Spacer />
              <Button isDisabled={registerMutation.isLoading ? true : false} _disabled={{bg: '#1a1a1a'}} colorScheme={'emerald'} style={styles.brutalButton} onPress={() => handleSubmit()} size={'lg'} mb={2}>
              {
              registerMutation.isLoading ? <HStack><Text fontSize={'md'} mr={2} color={'black'}>Criando sua conta...</Text><Spinner color={'black'} /></HStack> : 'Tudo pronto!'
              }
              
              </Button>
            </ScrollFix>
          </KeyboardAvoidingView>
        </Box>
    </Box>
  )
}

export default PostRegisterScreen