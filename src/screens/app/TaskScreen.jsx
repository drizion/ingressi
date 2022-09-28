import React, { useContext } from 'react'
import { VStack, Heading, Stack, Divider, ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';

const TaskScreen = () => {
  const { user } = useContext(AuthContext)
  return (
    <ScrollView safeAreaTop px={5}>
      <Header picture={user.picture} />
      <Heading mb={5}>{user.mission.title}</Heading>

      <Divider my={5} />

      <Heading mb={5}>tudo sobre a tarefa aqui...</Heading>

    </ScrollView>
  )
}

export default TaskScreen