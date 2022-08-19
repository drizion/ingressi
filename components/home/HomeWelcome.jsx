import React from 'react'
import {
  VStack,
  Text,
  Heading
} from 'native-base'

export const HomeWelcome = (props) => {
  return (
    <VStack px={5} w="100%">
      <Text fontSize='md'>{props.welcome},</Text>
      <Heading fontSize={"4xl"}>{props.name}!</Heading>
    </VStack>
  )
}
