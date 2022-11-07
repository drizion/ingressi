import React, { useContext, useState, useEffect } from 'react'
import { HStack, Center, Heading, Box, Button, Text } from 'native-base';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import { useQuery } from '@tanstack/react-query';
import getLevel from '../../services/global/app/tasks/getLevel';

const NotificationScreen = () => {
  const { user, level, token } = useContext(AuthContext)
  const [test, setTest] = useState()

  const MissionQuery = useQuery(['mission', user.id], getLevel(user.id, token, 1))
  return (
    <Box mx={5} flex={1} safeAreaTop>
      <Header removeBack picture={user.picture} />
      <Center flex={1} justifyContent="center">
        <Heading size="sm">
          Não há notificações pendentes :D
        </Heading>
        {/* <Text>{MissionQuery.isError}</Text>
        <Button>Fetch level 1</Button> */}
      </Center>
    </Box>
  )
}

export default NotificationScreen