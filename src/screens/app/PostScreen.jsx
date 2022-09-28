import React, { useContext } from 'react'
import { VStack, Heading, Stack, Divider, ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import BigCard from '../../components/BigCard';
import RowCard from '../../components/RowCard';


const PostScreen = ({navigation}) => {
  const { user } = useContext(AuthContext)
  return (
    <ScrollView safeAreaTop px={5}>
      <Header picture={user.picture} navigation={navigation}/>
      <Heading mb={5}>Para você</Heading>

      <BigCard 
        title="Título do card grande"
        description="descricao do card"
        imageUrl="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
        badge="Calouros"
        badgeColor="yellow"
        date="00/00/00"
      />

      <Divider my={5} />

      <Heading mb={5}>Mais posts</Heading>

      <VStack>
        <Stack space={3} mb={8}>
          <RowCard 
            title="titulo do post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
          <RowCard 
            title="a a folou"
            description="a folou iu"
            imageUrl="data:image/jpeg;base64,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"
            badge="to dodoi"
            badgeColor="red"
            date="00/00/00"
          />
          <RowCard 
            title="mais um post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
          <RowCard 
            title="mais um post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
          <RowCard 
            title="mais um post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
          <RowCard 
            title="mais um post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
          <RowCard 
            title="mais um post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
          <RowCard 
            title="mais um post"
            description="descricao do post"
            imageUrl="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            badge="Notícias"
            badgeColor="blue"
            date="00/00/00"
          />
        </Stack>
      </VStack>
    </ScrollView>
  )
}

export default PostScreen