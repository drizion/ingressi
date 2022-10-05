import React, { useContext } from 'react';
import { ScrollView, Heading, Divider, Text, Box, FlatList } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';

const CourseScreen = (props) => {
  const { user } = useContext(AuthContext)
  return (
    <Box flex={1} safeAreaTop>
    <ScrollView px={5}>
      <Header picture={user.picture} />
      <Heading>{props.route.params.name}</Heading>

      <Divider my={5} />

      <Text mb={5}>{props.route.params.text}</Text>

    </ScrollView>
    </Box>
  )
}

export default CourseScreen