import React, { useContext } from 'react'
import { HStack, Center, Heading, Box, Divider, Text, Button, Spacer, ScrollView } from 'native-base';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';

const NotificationScreen = () => {
  const { user } = useContext(AuthContext)
  return (
    <Box mx={5} flex={1} safeAreaTop>
      {/* <ScrollView> */}
      <Header removeBack picture={user.picture} />
      <Center flex={1} justifyContent="center">
        <Heading size="sm">
          Não há notificações pendentes :D
        </Heading>
      </Center>
      {/* </ScrollView> */}
    </Box>
  )
}

export default NotificationScreen