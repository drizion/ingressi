import React from 'react'
import { HStack, ScrollView, Center, FormControl, Input, Radio, Stack, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';
import { styles } from '../components/styles';

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView px={5} pt={5} flex={1} safeArea>
      <Heading size={'2xl'} pb={8}>Inscrever-se</Heading>
      <FormControl isRequired mb={5}>
        <FormControl.Label>Email</FormControl.Label>
        <Input style={styles.brutalButton} variant={'unstyled'} size={'md'} type="email" placeholder="seuemail@exemplo.com" />
        <FormControl.ErrorMessage>Você precisa colocar seu email!</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired mb={5}>
        <FormControl.Label>Senha</FormControl.Label>
        <Input style={styles.brutalButton} variant={'unstyled'} size={'md'} type="password" placeholder="Crie uma senha de no mínimo 8 caracteres" />
        <FormControl.ErrorMessage>Você precisa criar uma senha de no mínimo 8 dígitos!</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired mb={5}>
        <FormControl.Label>Confirmar senha</FormControl.Label>
        <Input style={styles.brutalButton} variant={'unstyled'} size={'md'} type="password" placeholder="Repita a senha" />
        <FormControl.ErrorMessage>Você precisa repetir sua senha!</FormControl.ErrorMessage>
      </FormControl>
      <FormControl mb={5}>
        <Radio.Group defaultValue="1" name="usertype">
          <Radio colorScheme={'emerald'} value="1" mb={2} size={'sm'}>
            Eu quero conhecer/estudar no IFC-CAS.
          </Radio>
          <Radio value="2" size={'sm'}>
            Eu já estudo no IFC-CAS.
          </Radio>
        </Radio.Group>
      </FormControl>
      <Button colorScheme={'emerald'} style={styles.brutalButton} onPress={() => navigation.navigate('HomeScreen')} size={'lg'} mb={2}>Entrar sem Cadastro (prévia)</Button>
      <Button colorScheme={'emerald'} onPress={() => navigation.navigate('Login')} size={'lg'} variant={"link"} mb={5}>Já tem uma conta? Clique aqui.</Button>
    </ScrollView>
  )
}

export default RegisterScreen