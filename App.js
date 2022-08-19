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
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { HomeUserLevel } from "./components/home/HomeUserLevel";
import { HomeWelcome } from "./components/home/HomeWelcome";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar bg="#3700B3" barStyle="light-content" />
        <HomeUserLevel />
        <HomeWelcome welcome="Bem vindo" name="Ricardo"/>
    </NativeBaseProvider>
  );
}