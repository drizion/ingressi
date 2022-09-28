import React, { useContext } from 'react';
import { ScrollView, Heading, Divider, Text } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';

const CourseScreen = (props) => {
    const { user } = useContext(AuthContext)
  return (
    <ScrollView safeAreaTop px={5}>
      <Header picture={user.picture} />
      <Heading mb={5}>O curso de {"{nome do curso}"}</Heading>

      <Divider my={5} />

      <Text mb={5}>em breve informações sobre o ifc-cas...</Text>

    </ScrollView>
  )
}

export default CourseScreen