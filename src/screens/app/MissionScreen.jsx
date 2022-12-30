import React, { useContext, useState, useEffect } from 'react'
import { StatusBar, VStack, Pressable, Skeleton, HStack, Center, Heading, Stack, Divider, ScrollView, Box, Text, Icon, Checkbox, Toast } from 'native-base';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../../services/global/api';
import getLevel from '../../services/global/app/tasks/getLevel';

const LevelItem = (props) => {
  return (
    <Pressable onPress={props.isLocked ? () => Toast.show({description: `Nível ${props.number} bloqueado, complete as tarefas para desbloquear!`}) : props.onPress} _pressed={props.isLocked ? { bg: "gray.400" } : { bg: props.color + ".200" }} justifyContent={"center"} bg={props.isLocked ? "gray.300" : props.color + ".300"} style={styles.brutalShadow} size={props.size | 24}>
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
  const { user, mission, token, getUserLevel, tasks } = useContext(AuthContext)
  const navigation = useNavigation()
  const [levelLength, setLevelLength] = useState(user?.gamification?.length)
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
    text: "A Decisão",
    color: "yellow"
  }]
  const fetchLevel = async () => {
    const { data } = await api.post('/user/levelcomponent', {token: token})
    return data.result
  }
  useQuery
  const {
    data,
    error,
    isLoading,
    refetch,
    isFetching,
    isFetched,
    status,
    isSuccess
  } = useQuery({
    queryKey: ['appLevel'],
    queryFn: fetchLevel
  })
  if(error) {
    console.log(error.request)
  }
  useEffect(() => {
    setLevelLength(user?.gamification?.length)
    const unsubscribe = navigation.addListener('focus', () => {
      refetch()
    });

    return unsubscribe;
  }, [])
  
  return (
    <Box flex={1} safeAreaTop>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView>
        <Box mx={5}>
          <Header removeBack picture={user?.picture} />
          <Skeleton startColor={'gray.400'} rounded="md" w={"40%"} mb={3} isLoaded={!loading} endColor={'gray.200'}>
            <Heading mb={5}>Níveis</Heading>
          </Skeleton>
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Skeleton h={20} ml={5} w={500} startColor={'gray.400'} rounded="md" mb={2} isLoaded={!isLoading} endColor={'gray.200'}>
            <HStack space={3}>
              <Box ml={2} />
                {data?.map((level, i) => {
                  // console.log(level)
                  return <LevelItem color={level.cardColor} onPress={() => (level?.level !== mission?.number) ? getUserLevel(null, token, level?.level, {toast: true}) : navigation.navigate('Tasks')} key={`${level?._id}${level?.locked}`} number={level?.level} text={level?.cardTitle} isLocked={level?.locked} />
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
            <Pressable onPress={() => navigation.navigate('Tasks')} _pressed={{ bg: 'gray.200' }} py={5} px={4} mb={6} bg={'white'} w={'100%'} style={styles.brutalShadow}>
              <HStack mb={5}>
                <Icon size={'2xl'} color={"black"} mr={3} mt={2} as={Ionicons} name="home" />
                <VStack>
                  <Heading>{mission?.title}</Heading>
                  <Text>Nível {mission?.number}</Text>
                </VStack>
              </HStack>
              <Text numberOfLines={2}>{mission?.description}</Text>
              <Text color={"red.700"}>Ler mais</Text>
              <Stack space={3} mt={5} mb={2}>

              {tasks?.map((task, i) => (
                <TaskCheckbox text={task?.title} checked={task?.completed} key={i} />
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