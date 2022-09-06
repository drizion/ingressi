import { SafeAreaTop, SafeAreaTop2 } from '../components/SafeAreaTop';
import { HStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';

const ProfileScreen = () => {
  return (
    <SafeAreaTop2>
        <Center>
            <Text>
                Quando logado, será possível configurar seu perfil!
            </Text>
        </Center>
    </SafeAreaTop2>
  )
}

export default ProfileScreen