import React, { useContext } from 'react'
import { HStack, Heading, Stack, Divider, ScrollView, Box, Text, Center } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { styles } from '../../components/styles';

const TaskScreen = () => {
  const { user } = useContext(AuthContext)
  return (
    <Box flex={1} safeAreaTop>
      <ScrollView safeAreaTop px={5}>
        <Header picture={user.picture} />
        <HStack mt={3} justifyContent="space-between">
          <Heading>{user.mission.title}</Heading>
          <Center>
            <Heading size={'sm'}>Nível 1</Heading>
          </Center>
        </HStack>
        <Divider my={5} />
        <Box w={'100%'} style={styles.brutalShadow} bg={'green.300'} p={4}>
          <Heading size={'sm'}>Tarefa 1 | incompleto</Heading>
          <Divider bg={'grey'} my={2} />
          <Text fontSize={'md'}>O fim do ensino fundamental é uma etapa muito importante na nossa vida, pois é um momento de escolhas Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse modi sapiente reprehenderit blanditiis culpa at odit!</Text>
          <Divider bg={'grey'} my={2} />
          
        </Box>
      </ScrollView>
    </Box>
  )
}

export default TaskScreen