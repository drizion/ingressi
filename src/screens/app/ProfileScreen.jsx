import { useContext } from 'react';
import { SafeAreaTop, SafeAreaTop2 } from '../../components/SafeAreaTop';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer, useToast } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

const ProfileScreen = ({}) => {
  const navigation = useNavigation()
  const { signed } = useContext(AuthContext)
  function handleSignOut(){
    
  }
  return (
    <SafeAreaTop2>
        <Center>
            <Button onPress={() => console.log(signed)}>Sair</Button>
        </Center>
    </SafeAreaTop2>
  )
}

export default ProfileScreen