import React, { useContext, useState, useEffect } from 'react'
import { VStack, Pressable, Skeleton, HStack, Center, Heading, Stack, Divider, ScrollView, Box, Text, Icon, Checkbox } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import RowCard from '../../components/RowCard';
import BigCard from '../../components/BigCard';
import Header from '../../components/Header';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

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
      <Text w={"95%"} fontSize={"md"}>{props.text}</Text>
    </HStack>
  )
}

const MissionScreen = () => {
  const { user, mission } = useContext(AuthContext)
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [navigation])
  const levels = [{
    number: 1,
    text: "O inicio",
    color: "red"
  },{
    number: 2,
    text: "O teste",
    color: "yellow"
  },{
    number: 3,
    text: "Outro",
    color: "green"
  }]
  const [currentLevel, setCL] = useState(1)
  return (
    <Box flex={1} safeAreaTop>
      <ScrollView>
        <Box mx={5}>
          <Header removeBack picture={user.picture} />
          <Skeleton startColor={'gray.400'} rounded="md" w={"40%"} mb={3} isLoaded={!loading} endColor={'gray.200'}>
            <Heading mb={5}>Níveis</Heading>
          </Skeleton>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Skeleton h={20} ml={5} w={500} startColor={'gray.400'} rounded="md" mb={2} isLoaded={!loading} endColor={'gray.200'}>
            <HStack space={3}>
              <Box ml={2} />
                {levels.map((level, i) => {
                  return <LevelItem color={level.color} key={i} number={level.number} text={level.text} isLocked={currentLevel<=i ? true : false} />
                })}
              <Box mr={2} />
            </HStack>
          </Skeleton>
        </ScrollView>
        <Box mx={5}>
          <Divider my={5} />
          <Skeleton startColor={'gray.400'} rounded="md" w={"40%"} mb={3} isLoaded={!loading} endColor={'gray.200'}>
            <Heading mb={5}>Missões</Heading>
          </Skeleton>
          <Skeleton startColor={'gray.400'} rounded="md" h={300} mb={3} isLoaded={!loading} endColor={'gray.200'}>
            <Pressable onPress={() => navigation.navigate('Task')} _pressed={{ bg: 'gray.200' }} py={5} px={4} bg={'white'} w={'100%'} style={styles.brutalShadow}>
              <HStack mb={5}>
                <Icon size={'2xl'} color={"black"} mr={3} mt={2} as={Ionicons} name="home" />
                <VStack>
                  <Heading>{mission.title}</Heading>
                  <Text>Nível {currentLevel} | incompleta</Text>
                </VStack>
              </HStack>
              <Text numberOfLines={2}>{mission.description}</Text>
              <Text color={"red.700"}>Ler mais</Text>
              <Stack space={3} mt={5} mb={2}>

              {mission.tasks.map((task, i) => (
                <TaskCheckbox text={task.title} checked={task.checked} key={i} />
              ))}

              </Stack>
            </Pressable>
          </Skeleton>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default MissionScreen