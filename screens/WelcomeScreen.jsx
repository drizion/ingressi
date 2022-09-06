import React from 'react';
import { Platform } from 'react-native';
import { HStack, VStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';
import { styles } from '../components/styles';
import { SafeAreaTop } from '../components/SafeAreaTop';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaTop>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <VStack>
            <Box bg={"#cacaca"} h={300} marginBottom={8}/>
        </VStack>
        <Box px={5} flex={1}>
            <Heading size={"2xl"}>Vamos começar?</Heading>
            <Divider my={3}/>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut aliquid architecto minima rerum? Accusamus placeat vel, eos qui quam quaerat! Quos magni assumenda exercitationem totam perferendis nobis dignissimos vel!</Text>
            <Spacer />
            <Box mb={3}>
                <Button onPress={() => navigation.navigate('Register')} style={styles.brutalButton} marginBottom={2} size={'lg'}>Sou novo por aqui</Button>
                <Button onPress={() => navigation.navigate('Login')} size={'lg'} variant={"link"} marginBottom={2}>Já tenho uma conta</Button>
            </Box>
        </Box>
    </SafeAreaTop>
  )
}

export default WelcomeScreen