import React, { useContext, useState } from 'react'
import { VStack, Button, HStack, View, Heading, FlatList, Stack, Divider, ScrollView, Box, Text, Checkbox, Center, Modal, Icon, Toast } from 'native-base';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMutation } from '@tanstack/react-query';
import api from '../../services/global/api';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = ({navigation}) => {
  const { user, mission, tasks, updateTasks, completedTasks, token } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  const [task, setTask] = useState({})
  const toggleTaskMutation  = useMutation(async ({taskId, level, token}) => {
    const { data } = await api.post(`/user/task/toggle`, {
      taskId, level, token
    })
    return data;
  }, {
    onSuccess : (data)=>{
      console.log('tarefa atualizada')
    },
    onError: (error, variables, context) => {
      Toast.show({description: "Verifique a conexão com a internet"})
      console.log('erro ao atualizar tarefa', error)
    }
  })
  function handleModal(taskObj){
    setTask(taskObj)
    setShowModal(true)
  }
  function closeModal(task){
    setShowModal(false)
    navigation.navigate('Posts')
  }
  return (
    <SafeAreaView style={{flex: 1}}>
    <Box flex={1} bg={'red.300'}>
        <StatusBar translucent backgroundColor={'#fca5a5'} />
        <Box px={5} pb={7} bg={'red.300'}>
          <Header picture={user?.picture} />
          <HStack mt={3}>
            <Heading mr={2} size={'2xl'}>{mission?.number}º</Heading>
            <Stack>
              <Heading size={'lg'}>Missão</Heading>
              <Text fontSize={'sm'}>Nível {mission?.number}</Text>
            </Stack>
          </HStack>
        </Box>
        <Box w={'100%'} flex={1} style={styles.brutalScroll} bg={'white'} p={5} pb={5}>
          <Heading size={'lg'} mb={3}>{mission?.title}</Heading>
          <Text mb={5} fontSize={'md'}>{mission?.description}</Text>
          <Box mb={4} style={styles.brutalShadow}>
            <Box m={4}>
              <Heading size={'md'}>Tarefas</Heading>
            </Box>
            {tasks?.map((task, i) => (
                <Box key={i}>
                  <Divider bg={'black'} />
                  <Stack m={4}>
                    <Checkbox onChange={() => handleModal(task)} isChecked={task?.completed} colorScheme="light">
                      {task.title}
                    </Checkbox>
                  </Stack>
                </Box>
              ))}
            <Center>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350" style={[styles.brutalShadow, { borderRadius: 0 }]}>
                  <Modal.CloseButton />
                  <Modal.Header><Heading>Tarefa</Heading></Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium" fontSize={'md'}>{task.description}</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer>
                    <HStack space={1}>
                      <Button colorScheme={'light'} style={styles.brutalButton} onPress={() => {
                        setShowModal(false);
                        let newTasks = tasks?.map(t=>{
                          if(t.id == task.id) {
                            t.completed = !t.completed
                          }
                          return t
                        }) 
                        // console.log(`taskId: ${task.id} | mission: ${mission.number} | token: ${token}`)
                        toggleTaskMutation.mutate({taskId: task.id, level: mission.number, token})
                        updateTasks(newTasks);
                      }}>
                         {task?.completed ? 'Desmarcar tarefa' : 'Marcar como lido'}
                      </Button>
                      <Button bg={'red.400'} _pressed={{bg: "black"}} style={styles.brutalButton} onPress={() => {
                        setShowModal(false);
                      }}>
                        Ir para postagem
                      </Button>
      
                    </HStack>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          </Box>
          {
            tasks?.length == completedTasks?.length ? 
              <Button mb={4} bg={'black'} _text={{color: 'white', fontSize: 'lg', fontWeight: 'bold'}} _pressed={{bg: 'gray.600'}} style={styles.brutalButton}>Próximo Nível!</Button>
            : null
          }
        </Box>
      </Box>
      </SafeAreaView>
  )
}

export default TaskScreen