import { SafeAreaTop, SafeAreaTop2 } from '../../components/SafeAreaTop';
import { HStack, Center, Heading, Box, StatusBar, Divider, Text, Button, Spacer } from 'native-base';

const NotificationScreen = () => {
  return (
    <Box safeAreaTop flex={1} justifyContent={'center'}>
      <Center>
        <Text>
          Ainda não há notificações :D
        </Text>
      </Center>
    </Box>
  )
}

export default NotificationScreen