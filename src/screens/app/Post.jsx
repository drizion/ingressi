import React, { useContext } from 'react';
import { VStack, Stack, HStack, ScrollView, Box, Heading, Badge, Text, Image, Divider, Icon, Center, Link, FlatList, SectionList } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const LinksComponent = (props) => {
  if (props.links && props.links.length >= 1) {
    return (
      <Box>
        <Divider my={3} />
        <Heading mb={2}>Links:</Heading>
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
  const { user, posts } = useContext(AuthContext)
  const { id } = props.route.params
  const filteredPost = posts.filter(post => post.id == id)
  const { title, badge, badgeColor, imageUrl, links, description, author, createdAt } = filteredPost[0]

  return (
    <Box safeAreaTop>
      <ScrollView px={5} h={'100%'}>
        <Header picture={user.picture} />
        <HStack my={2} >
          <Badge colorScheme={badgeColor} style={styles.badge}>{badge}</Badge>
        </HStack>
        <Heading mb={3}>{title}</Heading>
        <Box w='100%' h={200} style={styles.image}>
          <Image source={{
            uri: imageUrl
          }} alt="Alternate Text" size="100%" style={{borderRadius: 3}} />
        </Box>

        <HStack mt={2} justifyContent={'space-between'}>
          <HStack justifyContent={'center'}>
            <Center mr={1}>
              <Icon size="sm" as={Ionicons} name="person" />
            </Center>
            <Text color={"gray.700"}>{author}</Text>
          </HStack>
          <HStack justifyContent={'center'}>
            <Center mr={1}>
              <Icon size="sm" as={Ionicons} name="calendar" />
            </Center>
            <Text color={"gray.700"}>{createdAt}</Text>
          </HStack>
        </HStack>
        <Divider my={3} />
        <Text lineHeight={'lg'} fontSize={'md'} pb={5}>{description}</Text>
        <LinksComponent links={links} />
      </ScrollView>
    </Box>

  )
}

export default Post