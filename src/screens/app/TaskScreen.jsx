import React, { useContext, useState } from 'react'
import { VStack, Button, HStack, View, Heading, FlatList, Stack, Divider, ScrollView, Box, Text, Checkbox, Center, Modal } from 'native-base';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { styles } from '../../components/styles';

const tasks = [{
  id: 1,
  description: "Leia o post com o título “Iniciando a Jornada” para descobrir mais sobre o IFC.",
  checked: false
}, {
  id: 2,
  description: "Conheça a estrutura do campus lendo o post “Estrutura do Campus” que preparamos pra você :D",
  checked: false
}, {
  id: 3,
  description: "Conheça os cursos disponíveis e seus devidos objetivos",
  checked: false
}]

const TaskScreen = () => {
  const { user } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  const [taskDescription, setTaskDescription] = useState("")
  function handleModal(task){
    setTaskDescription(task.description)
    setShowModal(true)
  }
  return (
    <Box flex={1} safeAreaTop backgroundColor={'#fca5a5'}>
      <StatusBar translucent backgroundColor={'#fca5a5'} />
      <View flex={1} bg={'red.300'}>
        <Box px={5} pb={7} bg={'red.300'}>
          <Header picture={user.picture} />
          <HStack mt={3}>
            <Heading mr={2} size={'2xl'}>1º</Heading>
            <Stack>
              <Heading size={'lg'}>Missão</Heading>
              <Text fontSize={'sm'}>Nível 1</Text>
            </Stack>
          </HStack>
        </Box>
        <Box w={'100%'} flex={1} style={styles.brutalScroll} bg={'white'} p={5} pb={5}>
          <Heading size={'lg'} mb={3}>O início da jornada</Heading>
          <Text mb={5} fontSize={'md'}>O fim do ensino fundamental é uma etapa muito importante na nossa vida, pois é um momento de escolhas... Portanto é necessário evitar que a vida se torne complexa devido a falta de acessibilidade das edições anteriores. Boa sorte!</Text>
          <Box mb={4} style={styles.brutalShadow}>
            <Box m={4}>
              <Heading size={'md'}>Tarefas</Heading>
            </Box>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <>
                  <Divider bg={'black'} />
                  <Box p={4}>
                    <Checkbox onChange={() => handleModal(item)} isChecked={item.checked} colorScheme="light">
                      <Text noOfLines={1} maxWidth={'97%'}>{item.description}</Text>
                    </Checkbox>
                  </Box>
                </>
              )}
            />
            <Center>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350" style={[styles.brutalShadow, { borderRadius: 0 }]}>
                  <Modal.CloseButton />
                  <Modal.Header><Heading>Tarefa</Heading></Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium" fontSize={'md'}>{taskDescription}</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer>
                    <HStack space={1}>
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