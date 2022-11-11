import React, { useContext } from 'react';
import { ScrollView, Heading, Divider, Text, Box, FlatList } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const CourseScreen = (props) => {
  const { user } = useContext(AuthContext)
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView px={5}>
      <Header picture={user.picture} />
      <Heading>{props.route.params.name}</Heading>

      <Divider my={5} />

      <Text mb={5}>{props.route.params.text}</Text>

    </ScrollView>
    </SafeAreaView>
  )
}

export default CourseScreen