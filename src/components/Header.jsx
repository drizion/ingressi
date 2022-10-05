import React from 'react';
import { Box, HStack, IconButton } from 'native-base';
import ProfilePicture from './ProfilePicture';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation()
    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
      <HStack
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        pt={1}
        mb={3}>
        {props.removeBack ? <Box /> : <IconButton variant={"ghost"} colorScheme={"light"} size={'lg'} _icon={{ as: Ionicons, name: 'arrow-back' }} onPress={() => handleGoBack()} />}
        {props.removeProfile ? <Box /> : <ProfilePicture onPress={() => navigation.navigate('Profile')} url={props.picture} />}
      </HStack>
    )
  }

export default Header