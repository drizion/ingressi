import React, { useEffect } from 'react';
import { Platform, BackHandler, Alert } from 'react-native';
import { HStack, VStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';
import { styles } from '../../components/styles';

const WelcomeScreen = ({route, navigation}) => {
  console.log('abriu o welcome screen')
  const backAction = () => {
    Alert.alert("Atenção", "Você quer sair do app?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sair", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };
  useEffect(() => {
    if(route.name !== 'Welcome') {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
    }
  }, [route]);

  return (
    <Box flex={1} safeArea>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <VStack>
            <Box bg={"#cacaca"} h={300} marginBottom={8}/>
        </VStack>
        <Box px={5} flex={1}>
            <Heading size={"2xl"}>Vamos começar?</Heading>
            <Divider my={3}/>
            <Text>O fim do ensino fundamental é uma etapa muito importante nas nossas vidas, é um momento de escolhas. Já imaginou fazer o ensino médio com um curso técnico que já prepara você para o mercado de trabalho com ensino de qualidade (e o melhor, 100% gratuito)? Crie uma conta e conheça nossos cursos disponíveis :D</Text>
            <Spacer />
            <Box mb={3}>
              <Button colorScheme={'emerald'} onPress={() => navigation.navigate('Register')} style={styles.brutalButton} marginBottom={2} size={'lg'}>Sou novo por aqui</Button>
              <Button colorScheme={'emerald'} onPress={() => navigation.navigate('Login')} size={'lg'} variant={"link"} marginBottom={2}>Já tenho uma conta</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default WelcomeScreen