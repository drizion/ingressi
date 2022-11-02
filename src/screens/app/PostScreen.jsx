import React, { useContext, useEffect, useState } from 'react'
import { VStack, Heading, Stack, Divider, ScrollView, Box, HStack, Spinner, Skeleton, FlatList, Text, Center } from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import BigCard from '../../components/BigCard';
import RowCard from '../../components/RowCard';
import { useNavigation } from '@react-navigation/native';

const HeaderList = (props) => {
  const [featuredPost] = props.posts.filter(post => post.featured)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  useEffect(() => {
    setLoading(false)
  }, [props.posts])

  return (
    <Box px={5}>
      <Header picture={props.user.picture} />
      <Skeleton startColor={'gray.400'} rounded="md" w={"40%"} mb={3} isLoaded={!loading} endColor={'gray.200'}>
        <Heading mb={5}>Para você</Heading>
      </Skeleton>
      <Skeleton h="200px" rounded={'md'} startColor={'gray.900'} endColor={'gray.200'} isLoaded={!loading}>
        <BigCard
          title={featuredPost.title}
          description={featuredPost.description}
          imageUrl={featuredPost.imageUrl}
          badge={featuredPost.badge}
          badgeColor={featuredPost.badgeColor}
          date={featuredPost.createdAt}
          onPress={() => navigation.navigate('Post', { id: featuredPost.id })}
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
  const postList = posts.filter(post => !post.featured)
  useEffect(() => {
    setLoading(false)
  }, [posts])

  return (
    <Box flex={1} safeAreaTop>
      <VStack>
        <FlatList
          h={'100%'}
          data={postList}
          ListHeaderComponent={<HeaderList posts={posts} user={user} />}
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
                  onPress={() => navigation.navigate('Post', { id: item.id })}
                />
              </Skeleton>
            </Box>
          )}
          keyExtractor={item => item.id}
          onEndThreshold={0} />
      </VStack>
    </Box>
  )
}

export default PostScreen