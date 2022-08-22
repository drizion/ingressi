import React from 'react'
import {
  VStack,
  Text,
  Heading
} from 'native-base'

export const HomeWelcome = (props) => {
  return (
    <VStack mt={6}  w="100%">
      <Text fontSize='md'>{props.welcome},</Text>
      <Heading fontSize={"4xl"}>{props.name}!</Heading>
    </VStack>
  )
}
