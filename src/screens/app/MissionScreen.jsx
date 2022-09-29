import React, { useContext } from 'react'
import { VStack, Heading, Stack, Divider, ScrollView, Box } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import RowCard from '../../components/RowCard';
import BigCard from '../../components/BigCard';
import Header from '../../components/Header';

const MissionScreen = () => {
  const { user } = useContext(AuthContext)
  return (
    <Box flex={1} safeAreaTop>
    <ScrollView px={5}>
      <Header picture={user.picture} />
      <Heading mb={5}>Missões</Heading>

      <Divider my={5} />

      <Heading mb={5}>em breve</Heading>

    </ScrollView>
    </Box>
  )
}

export default MissionScreen