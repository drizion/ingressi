import React from 'react'
import {
  HStack,
  CircleIcon,
  Text,
} from 'native-base'

export const HomeUserLevel = (props) => {
  return (
    <HStack bg="#FFF" justifyContent="space-between" alignItems="center" w="100%" px={5} py={5}>
      <CircleIcon size="70px" />
      <Text>[nível do usuário]</Text>
    </HStack>
  )
}