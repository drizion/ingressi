import React, { useContext, useEffect, useState } from 'react'
import { StatusBar, VStack, Heading, Stack, Divider, ScrollView, Box, HStack, Spinner, Skeleton, FlatList, Text, Center, Button } from 'native-base';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import BigCard from '../../components/BigCard';
import RowCard from '../../components/RowCard';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/global/api';
import { useInfiniteQuery } from '@tanstack/react-query'

const HeaderList = ({featuredPost, user, loading}) => {
  const navigation = useNavigation()

  return (
    <Box px={5}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <Header picture={user?.picture} />
      <Skeleton rounded="md" w={"40%"} mb={3} isLoaded={!loading}>
        <Heading mb={5}>Para você</Heading>
      </Skeleton>
      <Skeleton h="200px" rounded={'md'} isLoaded={!loading}>
        <BigCard
          title={featuredPost?.title}
          description={featuredPost?.description}
          imageUrl={featuredPost?.image}
          badge={featuredPost?.badge}
          badgeColor={featuredPost?.badgeColor}
          date={new Date(featuredPost?.createdAt).toLocaleDateString() || ''}
          onPress={() => navigation.navigate('Post', { id: featuredPost?._id })}
        />
      </Skeleton>
      <Skeleton.Text my={10} lines={0} isLoaded={!loading}>
        <Divider my={5} />
        <Heading mb={5}>Mais posts</Heading>
      </Skeleton.Text>
    </Box>
  )
}

const PostScreen = ({ navigation }) => {
  const { user, posts } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  // const postList = posts.filter(post => !post.featured)

  const fetchPosts = async ({ pageParam = 1 }) => {
    const { data } = await api.get('/app/getposts?limit=10&page=' + pageParam)
    return data.result
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetching,
    isFetchingNextPage,
    isFetched,
    status,
    isSuccess
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => (lastPage?.posts?.nextPage ? lastPage.posts.nextPage : undefined),
  })

  useEffect(() => {
    switch (status) {
      case 'success':
        setLoading(false)
      break    
      default:
        setLoading(true)
      break;
    }
  }, [status])


  return (
    <Box flex={1} safeAreaTop>
      <VStack>
        <FlatList
          h={'100%'}
          data={data?.pages?.map(page => page.posts.docs).flat()}
          ListHeaderComponent={<HeaderList loading={loading} featuredPost={data?.pages[0]?.featuredPost} user={user} />}
          ListFooterComponent={isFetchingNextPage || isFetching || hasNextPage ? <Spinner my={5} size={'lg'} /> : <Center my={5}><Text>Chegamos ao fim :D</Text></Center>}
          renderItem={({ item }) => (
            <Box px={5} pb={2}>
              <Skeleton h={'80px'} rounded={'lg'} isLoaded={!loading}>
                <RowCard
                  title={item?.title}
                  description={item?.description}
                  imageUrl={item?.thumbnail}
                  badge={item?.badge}
                  badgeColor={item?.badgeColor}
                  date={new Date(item?.createdAt).toLocaleDateString() || ''}
                  onPress={() => navigation.navigate('Post', { id: item?._id })}
                />
              </Skeleton>
            </Box>
          )}
          keyExtractor={item => item?._id}
          onEndThreshold={0.7}
          refreshing={false}
          onRefresh={refetch} 
          onEndReached={fetchNextPage}
          initialNumToRender={5}
          />
      </VStack>
    </Box>
  )
}

export default PostScreen