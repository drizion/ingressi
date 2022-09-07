// imports
import React from 'react';
import { Platform } from 'react-native';
import { HStack, Center, Heading, Box, StatusBar, Divider, ScrollView } from 'native-base';

// components
import { HomeUserLevel } from '../components/home/HomeUserLevel';
import { HomeWelcome } from '../components/home/HomeWelcome';
import ProfilePicture from '../components/ProfilePicture';
import LevelCard from '../components/LevelCard';
import HomeCard from '../components/HomeCard';
// export
export default function HomeScreen() {
  return (
    <Box flex={1} safeAreaTop>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView px={5} paddingTop={1}>
        <Center>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <ProfilePicture />
            <HomeUserLevel progress={50} level={2} />
          </HStack>
          <HomeWelcome welcome="Bem vinda" name="Isis" />
          <Divider thickness={2} bg={'#101118'} />
          <LevelCard currentLevel="1" />
          <HStack w="100%" mt={4} justifyContent="space-between">
            <HomeCard
              iconName="school"
              text="Campus"
              cardBorderColor="#193E1F"
              cardBgColor="#59B065"
            />
            <HomeCard
              iconName="article"
              text="Postagens"
              cardBorderColor="#69312E"
              cardBgColor="#D05D56"
            />
          </HStack>
        </Center>
        <Heading mt={4}>Cursos</Heading>
        <HStack w="100%" mt={2} justifyContent="space-between">
          <HomeCard
            iconName="king-bed"
            text="Hospedagem"
            cardBorderColor="#0A4459"
            cardBgColor="#3E95B5"
          />
          <HomeCard
            iconName="settings-ethernet"
            text="Informática"
            cardBorderColor="#17473B"
            cardBgColor="#3E9F88"
          />
        </HStack>
      </ScrollView>
    </Box>
  );
}