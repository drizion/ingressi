import React from 'react';
import { Platform } from 'react-native';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  StatusBar,
  CircleIcon,
  Container,
  View,
  Divider
} from 'native-base';
import { HomeUserLevel } from './components/home/HomeUserLevel';
import { HomeWelcome } from './components/home/HomeWelcome';
import ProfilePicture from './components/ProfilePicture';
import LevelCard from './components/LevelCard';


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Box px={5} py={5} mt={Platform.OS == 'ios' ? 6 : 0}>
        <Center>
          <HStack bg="#FFF" justifyContent="space-between" alignItems="center" w="100%">
            <ProfilePicture/>
            <HomeUserLevel progress={50} level={2} />
          </HStack>
          <HomeWelcome welcome="Bem vinda" name="Isis" />
          <Divider thickness={2} bg={'#101118'}/>
          <LevelCard currentLevel="1"/> 
        </Center>
      </Box>


    </NativeBaseProvider>
  );
}
