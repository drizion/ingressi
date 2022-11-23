// imports
import React, { useEffect, useState, useContext } from 'react';
import { HStack, VStack, Center, Heading, Box, StatusBar, Divider, ScrollView, useToast, Text, Skeleton } from 'native-base';
import { Platform, RefreshControl } from 'react-native';

// components
import { HomeWelcome } from '../../components/home/HomeWelcome';
import ProfilePicture from '../../components/ProfilePicture';
import LevelCard from '../../components/LevelCard';
import HomeCard from '../../components/HomeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import { LevelBar } from '../../components/LevelBar';
import { styles } from '../../components/styles';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const { user, mission, token, tasks, completedTasks, refreshData } = useContext(AuthContext)
  useEffect(() => {
    refreshData()
  }, [])
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView px={5} paddingTop={1} refreshControl={<RefreshControl
        refreshing={false}
        onRefresh={refreshData}
      />}>
        <Center>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <ProfilePicture onPress={() => navigation.navigate('Profile')} url={user?.picture} />

            <LevelBar progress={50} level={user?.gamification?.length} />
          </HStack>
          <HomeWelcome welcome="Olá novamente" name={user?.name?.split(' ')[0]} loaded />
          <Divider mb={8} thickness={2} bg={'#101118'} />

          <LevelCard
            currentLevel={mission?.number}
            completed={completedTasks?.length}
            length={tasks?.length}
            title={mission?.title}
            isLoaded={true}
            onPress={() => navigation.navigate('Tasks')}
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
        <HStack w="100%" mt={2} mb={6} justifyContent="space-between">
          <HomeCard
            iconName="king-bed"
            text="Hospedagem"
            cardBorderColor="#0A4459"
            cardBgColor="#3E95B5"
            onPress={() => navigation.navigate('Course', { name: "Hospedagem", text: "Em breve, informações sobre o curso de Hospedagem\n\n-objetivo do curso\n-grade curricular\n-professores\n-horários\n-etc..." })}
          />
          <HomeCard
            iconName="settings-ethernet"
            text="Informática"
            cardBorderColor="#17473B"
            cardBgColor="#3E9F88"
            onPress={() => navigation.navigate('Course', { name: "Informática para Internet", text: "Em breve, informações sobre o curso de Informática para Internet\n\n-objetivo do curso\n-grade curricular\n-professores\n-horários\n-etc..." })}
          />
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
}