import React, { useContext, useEffect, useState } from 'react'
import { VStack, Heading, Stack, Divider, ScrollView, Box, HStack, Spinner, Skeleton, FlatList, Text, Center } from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import BigCard from '../../components/BigCard';
import RowCard from '../../components/RowCard';

const HeaderList = () => {
  const { user, posts } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(false)
  }, [posts])

  return (
    <Box px={5}>
      <Header picture={user.picture} />
      <Skeleton startColor={'gray.400'} rounded="md" w={"40%"} mb={3} isLoaded={!loading} endColor={'gray.200'}>
        <Heading mb={5}>Para você</Heading>
      </Skeleton>
      <Skeleton h="200px" rounded={'md'} startColor={'gray.900'} endColor={'gray.200'} isLoaded={!loading}>
      <BigCard
        title="Conheça o campus!"
        description="Saiba como funciona os setores do campus desde o..."
        imageUrl="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
        badge="Calouros"
        badgeColor="yellow"
        date="00/00/00"
        />
      </Skeleton>
      <Skeleton.Text mb={10} startColor={'gray.900'} endColor={'gray.200'} isLoaded={!loading}>
        <Divider my={5} />
        <Heading mb={5}>Mais posts</Heading>
        
      </Skeleton.Text> 
    </Box>
  )
}

const PostScreen = ({ navigation }) => {
  const { user, posts } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(false)
  }, [posts])

  return (
    <Box flex={1} safeAreaTop>
      <VStack>

        <FlatList
          data={posts}
          ListHeaderComponent={HeaderList}
          renderItem={({ item }) => (
            <Box px={5} pb={2}>
              <Skeleton h={'80px'} rounded={'lg'} startColor={'gray.900'} endColor={'gray.200'} isLoaded={!loading}>
              <RowCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                badge={item.badge}
                badgeColor={item.badgeColor}
                date={item.createdAt}
                />
            </Skeleton>
            </Box>
          )}
          keyExtractor={item => item.id} />
      </VStack>
    </Box>
  )
}

export default PostScreen