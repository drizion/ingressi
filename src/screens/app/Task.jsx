import React, { useContext, useState } from 'react';
import { StatusBar, VStack, Stack, HStack, ScrollView, Box, Heading, Badge, Text, Image, Divider, Icon, Center, Link, Button, Spinner } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../../services/global/api';
import { useNavigation } from '@react-navigation/native';

const LinksComponent = (props) => {
  if (props.links && props.links.length >= 1) {
    return (
      <Box mb={4}>
        <Divider my={3} />
        <Heading mb={2}>Confira os links:</Heading>
        <Stack space={2}>
          {props.links.map((link, i) => {
            return (
              <Link key={i} _isExternal _text={{ fontSize: 'md' }} href={link.url}>{link.text}</Link>
            )
          })}
        </Stack>
      </Box>
    )
  } else {
    return null
  }
}

const Task = (props) => {
  const { user, mission, tasks, updateTasks, completedTasks, token, nextLevel } = useContext(AuthContext)
  const { taskId, completed } = props.route.params
  const [isCompleted, setIsCompleted] = useState(!!completed)
  const navigation = useNavigation()
  const fetchTask = async () => {
    const { data } = await api.get('/app/task?taskId=' + taskId)
    return data.result
  }
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
    queryKey: ['tasks', taskId],
    queryFn: fetchTask
  })
  const toggleTaskMutation = useMutation(async ({ taskId, level, token }) => {
    const { data } = await api.post(`/user/task/toggle`, {
      taskId, level, token
    })
    return data;
  }, {
    onSuccess: (data) => {
      console.log('tarefa atualizada')
    },
    onError: (error, variables, context) => {
      Toast.show({ description: "Verifique a conexão com a internet" })
      console.log('erro ao atualizar tarefa', error)
    }
  })
  const handleButton = () => {
    let newTasks = tasks?.map(t => {
      if (t.id == taskId) {
        t.completed = !t.completed
      }
      return t
    })
    toggleTaskMutation.mutate({ taskId, level: mission.number, token })
    updateTasks(newTasks);
    setTimeout(() => {
      navigation.goBack()
    }, 500);
  }
  return (
    <Box safeAreaTop>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView px={5} h={'100%'}>
        <Header picture={user.picture} />
        <HStack my={2} >
          <Badge colorScheme={data?.badgeColor} style={styles.badge}>{data?.badge}</Badge>
        </HStack>
        <Heading mb={3}>{data?.title}</Heading>
        <Box w='100%' h={200} style={styles.image}>
          <Image source={{
            uri: data?.image
          }} alt="Imagem da tarefa" size="100%" style={{ borderRadius: 3 }} />
        </Box>

        <Divider my={3} />
        <Text lineHeight={'lg'} fontSize={'md'} textAlign={'justify'} pb={5}>{data?.description}</Text>
        <LinksComponent links={data?.links} />
        <Box mb={4}>
          <Divider mb={4} />
          <Button onPress={() => handleButton()} 
          colorScheme={isCompleted ? 'red' : 'green'} style={styles.brutalButton}>
            {isCompleted ? "Desmarcar tarefa" : "Concluir tarefa"}
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default Task