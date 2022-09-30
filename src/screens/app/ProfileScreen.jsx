import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer, useToast, Stack, Link } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import ProfilePicture from '../../components/ProfilePicture';
import { styles } from '../../components/styles';

const ProfileScreen = ({}) => {
  const navigation = useNavigation()
  const { signed, user } = useContext(AuthContext)
  
  return (
    <Box px={5} py={10} flex={1} safeAreaTop>
        <Center>
          <ProfilePicture size={100} url={user.picture}/>
          <Heading mb={2} mt={5} size={'sm'}>Nome Completo da Pessoa</Heading>
          <Heading mb={5} size={'sm'} fontSize={'sm'} fontWeight="300">Ingressante | {user.percent}% concluído</Heading>
        </Center>
          <Spacer />
          <Stack space={2}>
            <Button style={styles.brutalButton} size={'lg'}>Alterar a foto de perfil</Button>
            <Button style={styles.brutalButton} size={'lg'}>Segurança e Privacidade</Button>
            <Button style={styles.brutalButton} size={'lg'}>Relatar um problema</Button>
            <Button style={styles.brutalButton} size={'lg'} onPress={() => console.log(signed)}>Sair da conta</Button>
          </Stack>
    </Box>
  )
}

export default ProfileScreen