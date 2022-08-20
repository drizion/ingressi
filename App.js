import React from "react";
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
} from "native-base";
import { HomeUserLevel } from "./components/home/HomeUserLevel";
import { HomeWelcome } from "./components/home/HomeWelcome";


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HomeUserLevel progress={50} level={2} />
      <HomeWelcome welcome="Bem vinda" name="Isis"/>
      {/* corrigir a linha ali q nao consegui fazer... */}
      <Box marginLeft={5} marginRight={5} w="100%" h="2px" borderBottomColor={"black"} borderBottomWidth={"2px"} paddingTop={"10px"}/>
    </NativeBaseProvider>
  );
}