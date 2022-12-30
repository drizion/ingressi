import React, { useContext } from 'react';
import { StatusBar, VStack, Stack, HStack, ScrollView, Box, Heading, Badge, Text, Image, Divider, Icon, Center, Link, Button } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useQuery } from '@tanstack/react-query';
import api from '../../services/global/api';

const MissionPostInteractor = (props) => {
  if (props.isMission) {
    return (
      <Box mb={4}>
        <Divider mb={4} />
        <Button colorScheme={'green'} style={styles.brutalButton}>Concluir missão</Button>
      </Box>
    )
  } else {
    return null
  }
}

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

const Post = (props) => {
  const { user } = useContext(AuthContext)
  const { id } = props.route.params
  const isMission = !!props.route.params.isMission
  // const filteredPost = posts.filter(post => post.id == id)
  // const { title, badge, badgeColor, imageUrl, links, description, author, createdAt, isMission } = filteredPost[0]
  const fetchPost = async () => {
    const { data } = await api.get('/app/post?id=' + id)
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
    queryKey: ['posts', id],
    queryFn: fetchPost
  })
  // console.log(error);
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
          }} alt="Imagem do post" size="100%" style={{ borderRadius: 3 }} />
        </Box>

        {isMission ? null :
          <HStack mt={2} justifyContent={'space-between'}>
            <HStack justifyContent={'center'}>
              <Center mr={1}>
                <Icon size="sm" as={Ionicons} name="person" />
              </Center>
              <Text color={"gray.700"}>{data?.author}</Text>
            </HStack>
            <HStack justifyContent={'center'}>
              <Center mr={1}>
                <Icon size="sm" as={Ionicons} name="calendar" />
              </Center>
              <Text color={"gray.700"}>{new Date(data?.createdAt).toLocaleDateString() || ''}</Text>
            </HStack>
          </HStack>
        }
        <Divider my={3} />
        <Text lineHeight={'lg'} fontSize={'md'} textAlign={'justify'} pb={5}>{data?.description}</Text>
        <LinksComponent links={data?.links} />
        <MissionPostInteractor isMission={false} />
      </ScrollView>
    </Box>
  )
}

export default Post