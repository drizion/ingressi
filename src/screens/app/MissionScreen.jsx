import React, { useContext } from 'react'
import { VStack, Pressable, HStack, Center, Heading, Stack, Divider, ScrollView, Box, Text, Icon, SunIcon, Checkbox } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import RowCard from '../../components/RowCard';
import BigCard from '../../components/BigCard';
import Header from '../../components/Header';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const LevelItem = (props) => {
  return (
    <Pressable _pressed={props.isLocked ? { bg: "gray.400" } : { bg: props.color + ".200" }} justifyContent={"center"} bg={props.isLocked ? "gray.300" : props.color + ".300"} style={styles.brutalShadow} size={props.size | 24}>
      <Center>
        {props.isLocked ? <Icon as={Ionicons} color={'black'} size="xl" name="lock-closed" /> : <Heading size={'xl'}>{props.number}</Heading>}
        <Text bold>{props.isLocked ? 'Bloqueado' : props.text}</Text>
      </Center>
    </Pressable>
  )
}

const TaskCheckbox = (props) => {
  return (
    <HStack>
      <Icon as={Ionicons} name={props.checked ? 'checkbox' : 'square-outline'} size={'lg'} color={'black'} mr={2} />
      <Text fontSize={"md"}>{props.text}</Text>
    </HStack>
  )
}

const MissionScreen = () => {
  const { user } = useContext(AuthContext)
  return (
    <Box flex={1} safeAreaTop>
      <ScrollView>
        <Box mx={5}>
          <Header removeBack picture={user.picture} />
          <Heading mb={5}>Níveis</Heading>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={3}>
            <Box ml={2} />

            <LevelItem color="red" number={1} text={"O início"} />

            <LevelItem color="orange" number={2} text={"Descubra"} isLocked />

            <LevelItem color="yellow" number={3} text={"Comece"} isLocked />

            <LevelItem color="blue" number={4} text={"Entenda"} isLocked />

            <LevelItem color="green" number={2} text={"Conheça"} isLocked />

            <Box mr={2} />
          </HStack>

        </ScrollView>
        <Box mx={5}>

          <Divider my={5} />

          <Heading mb={5}>Missões</Heading>

          <Pressable _pressed={{bg: 'gray.200'}} py={5} px={4} bg={'white'} w={'100%'} style={styles.brutalShadow}>
            <HStack mb={5}>
              <Icon size={'2xl'} color={"black"} mr={3} mt={2} as={Ionicons} name="home" />
              <VStack>
                <Heading>O início da jornada!</Heading>
                <Text>Nível 1 | incompleta</Text>
              </VStack>
            </HStack>
            <Text numberOfLines={2}>O fim do ensino fundamental é uma etapa muito importante na nossa vida, pois é um momento de escolhas</Text>
            <Text color={"red.700"}>Ler mais</Text>
            <Stack space={3} mt={5} mb={2}>
              <TaskCheckbox text="Leia a página de boas vindas!" checked />
              <TaskCheckbox text="O que é o IFC?" checked />
              <TaskCheckbox text="A cultura e diversidade" />
              <TaskCheckbox text="Conheça a estrutura do campus Sombrio" />
            </Stack>
          </Pressable>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default MissionScreen