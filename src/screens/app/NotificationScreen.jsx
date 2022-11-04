import React, { useContext, useState, useEffect } from 'react'
import { HStack, Center, Heading, Box, Divider, Text, Button, Spacer, ScrollView } from 'native-base';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import useLogin from '../../services/global/user/login/index';

const NotificationScreen = () => {
  const { user } = useContext(AuthContext)
  const {isLoading, data, refetch} = useLogin({email: "admin@admin.com", password: "12345678"})
  if(!isLoading) {

    console.log(data)
  } 
 
  return (
    <Box mx={5} flex={1} safeAreaTop>
      {/* <ScrollView> */}
      <Header removeBack picture={user.picture} />
      <Center flex={1} justifyContent="center">
        <Heading size="sm">
          Não há notificações pendentes :D
        </Heading>
        <Heading>
            {isLoading ? "loading..." : data.result.token}
        </Heading>
        <Button onPress={() => refetch()}>refetch</Button>
      </Center>
      {/* </ScrollView> */}
    </Box>
  )
}

export default NotificationScreen