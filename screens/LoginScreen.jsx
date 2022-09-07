import React from 'react'
import { HStack, ScrollView, Center, FormControl, Input, Radio, Stack, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';
import { styles } from '../components/styles';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView px={5} pt={5} flex={1} safeArea>
      <Heading size={'2xl'} pb={8}>Entrar</Heading>
      <FormControl isRequired mb={5}>
        <FormControl.Label>Email</FormControl.Label>
        <Input size={'md'} type="email" placeholder="seuemail@exemplo.com" />
        <FormControl.ErrorMessage>Você precisa inserir seu email!</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired mb={5}>
        <FormControl.Label>Senha</FormControl.Label>
        <Input size={'md'} type="password" placeholder="Insira sua senha" />
        <FormControl.ErrorMessage>Você precisa inserir sua senha</FormControl.ErrorMessage>
      </FormControl>
      <Text mb={5}>Esqueceu a senha?</Text>
      <Button colorScheme={'emerald'} style={styles.brutalButton} onPress={() => navigation.navigate('HomeScreen')} size={'lg'} mb={2}>Entrar sem Cadastro (prévia)</Button>
    </ScrollView>
  )
}

export default LoginScreen