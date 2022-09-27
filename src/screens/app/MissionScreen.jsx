import React, { useContext } from 'react'
import { HStack, VStack, Badge, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer, IconButton, Image } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import ProfilePicture from '../../components/ProfilePicture';
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from '../../components/styles';

const MissionScreen = () => {
  const { user } = useContext(AuthContext)
  return (
    <Box safeAreaTop px={5} pt={1}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb={2}>
        <IconButton variant={"ghost"} colorScheme={"light"} size={'lg'} _icon={{as: Ionicons, name: 'arrow-back' }}/>
        <ProfilePicture url={user.picture} />
      </HStack>
      <VStack>
        <Heading mb={5}>Para você</Heading>
        
        <Box w='100%' h={200}>
          <Image source={{
            uri: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
          }} alt="Alternate Text" size="100%" style={styles.image} />
        </Box>
        <Heading mt={1.5}>Guia para calouros.</Heading>
        <Text numberOfLines={2}>Dicas para se dar bem desde os primeiros meses no IFC-CAS</Text>
        <HStack mt={2} justifyContent={'space-between'}>
          <Text>31/02/2021</Text>
          <Badge colorScheme={'warning'} style={styles.badge}>Calouros</Badge>
        </HStack>
        
        <Divider my={3}/>

        <Heading mb={5}>Mais posts</Heading>
        

        <HStack mb={5} maxWidth={'85%'}>
          <Box backgroundColor={"#444"} w={"55px"} h={"55px"} borderRadius={8} mr={4}/>
          <VStack>
            <Heading 
              numberOfLines={1} 
              fontSize={'sm'}>
              Estudante do curso técnico em informática ganha bolsa
            </Heading>
            <HStack justifyContent={'space-between'}>
              <Text>15/03/2021</Text>
              <Badge colorScheme={'error'} style={styles.badge}>Notícias</Badge>
            </HStack>
          </VStack>
        </HStack>
        
        
        


      </VStack>
    </Box>
  )
}

export default MissionScreen