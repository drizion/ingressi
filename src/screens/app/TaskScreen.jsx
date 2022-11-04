import React, { useContext, useState } from 'react'
import { VStack, Button, HStack, View, Heading, FlatList, Stack, Divider, ScrollView, Box, Text, Checkbox, Center, Modal } from 'native-base';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { styles } from '../../components/styles';

const TaskScreen = ({navigation}) => {
  const { user, mission, levels, setMission } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  const [task, setTask] = useState({})
  function handleModal(taskObj){
    setTask(taskObj)
    setShowModal(true)
  }
  function closeModal(task){
    setShowModal(false)
    navigation.navigate('Posts')
  }
  return (
    <Box flex={1} safeAreaTop backgroundColor={'#fca5a5'}>
      <StatusBar translucent backgroundColor={'#fca5a5'} />
      <View flex={1} bg={'red.300'}>
        <Box px={5} pb={7} bg={'red.300'}>
          <Header picture={user.picture} />
          <HStack mt={3}>
            <Heading mr={2} size={'2xl'}>{mission.level}º</Heading>
            <Stack>
              <Heading size={'lg'}>Missão</Heading>
              <Text fontSize={'sm'}>Nível {mission.level}</Text>
            </Stack>
          </HStack>
        </Box>
        <Box w={'100%'} flex={1} style={styles.brutalScroll} bg={'white'} p={5} pb={5}>
          <Heading size={'lg'} mb={3}>{mission.title}</Heading>
          <Text mb={5} fontSize={'md'}>{mission.description}</Text>
          <Box mb={4} style={styles.brutalShadow}>
            <Box m={4}>
              <Heading size={'md'}>Tarefas</Heading>
            </Box>
            {mission.tasks.map((task, i) => (
                <Box key={i}>
                  <Divider bg={'black'} />
                  <Stack m={4}>
                    <Checkbox onChange={() => handleModal(task)} isChecked={task.checked} colorScheme="light">
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
                        let newMissionTasks = mission.tasks.map(t=>{
                          if(t.taskId == task.taskId) t.checked = !t.checked
                          return t
                        }) 
                        let newMission = mission;
                        newMission.tasks = newMissionTasks;
                        setMission(newMission);
                        
                      }}>
                         {task.checked ? 'Marcar como não lido' : 'Marcar como lido'}
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
        </Box>
      </View>
    </Box>
  )
}

export default TaskScreen