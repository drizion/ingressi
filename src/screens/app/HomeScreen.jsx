// imports
import React, { useEffect, useState, useContext } from 'react';
import { HStack, VStack, Center, Heading, Box, StatusBar, Divider, ScrollView, useToast, Text } from 'native-base';
import { Platform } from 'react-native';

// components
import { HomeWelcome } from '../../components/home/HomeWelcome';
import ProfilePicture from '../../components/ProfilePicture';
import LevelCard from '../../components/LevelCard';
import HomeCard from '../../components/HomeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import { LevelBar } from '../../components/LevelBar';
// export

export default function HomeScreen({navigation}) {
  const { user } = useContext(AuthContext)
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
            <ProfilePicture url={user.picture} />
            <LevelBar progress={user.percent} level={user.level}/>
          </HStack>
          <HomeWelcome welcome="Olá novamente" name={user.name.split(' ')[0]} loaded={!!user} />
          <Divider thickness={2} bg={'#101118'} />
          <LevelCard 
            currentLevel={user.mission.id}
            max={user.mission.max}
            percent={user.mission.percent}
            title={user.mission.title}
            onPress={() => navigation.navigate('Task')}
          />
          <HStack w="100%" mt={4} justifyContent="space-between">
            <HomeCard
              iconName="school"
              text="Campus"
              cardBorderColor="#193E1F"
              cardBgColor="#59B065"
              onPress={() => navigation.navigate('Campus')}
            />
            <HomeCard
              iconName="article"
              text="Postagens"
              cardBorderColor="#69312E"
              cardBgColor="#D05D56"
              onPress={() => navigation.navigate('Posts')}
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
            onPress={() => navigation.navigate('Course', {name: "Hospedagem", text: "Lorem ipsum"})}
          />
          <HomeCard
            iconName="settings-ethernet"
            text="Informática"
            cardBorderColor="#17473B"
            cardBgColor="#3E9F88"
            onPress={() => navigation.navigate('Course', {name: "Informática para Internet", text: "Lorem ipsum"})}
          />
        </HStack>
      </ScrollView>
    </Box>
  );
}