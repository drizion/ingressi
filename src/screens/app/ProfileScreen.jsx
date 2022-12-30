import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer, useToast, Stack, Link, Toast } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import ProfilePicture from '../../components/ProfilePicture';
import { styles } from '../../components/styles';
import * as ImagePicker from 'expo-image-picker';
import { Linking } from 'react-native';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    base64: false
  });
    console.log(result.uri)
    if (!result.cancelled) {
      console.log('alterando imagem')
      Toast.show({description: "Essa função está em fase de testes"})
  }
};

const ProfileScreen = ({}) => {
  const navigation = useNavigation()
  const { user, mission, levels, signOut } = useContext(AuthContext)

  return (
    <Box px={5} py={10} flex={1} safeAreaTop>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
        <Center>
          <ProfilePicture size={100} url={user?.picture}/>
          <Heading mb={2} mt={5} size={'sm'}>{user?.name}</Heading>
          <Heading mb={5} size={'sm'} fontSize={'sm'} fontWeight="300">Ingressante | Nível {mission?.number}</Heading>
        </Center>
          <Spacer />
          <Stack space={2}>
            <Button style={styles.brutalButton} onPress={pickImage} size={'lg'}>Alterar a foto de perfil</Button>
            <Button style={styles.brutalButton} onPress={() => Linking.openURL("mailto:suporte@ingressi.com?subject=Desejo relatar um problema no aplicativo Ingressi")} size={'lg'}>Relatar um problema</Button>
            <Button style={styles.brutalButton} onPress={() => Toast.show({description: "Essa função está em fase de testes"})} size={'lg'}>Alterar minha senha</Button>
            <Button style={styles.brutalButton} size={'lg'} onPress={() => signOut()}>Sair da conta</Button>
          </Stack>
    </Box>
  )
}

export default ProfileScreen