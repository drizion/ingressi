import React from 'react'
import {
  VStack,
  Text,
  Heading,
  Skeleton
} from 'native-base'

export const HomeWelcome = (props) => {
  return (
    <VStack mt={6}  w="100%">
        <Skeleton h={5} w={"35%"} rounded={"full"} mb={2} isLoaded={props.loaded}>
          <Text fontSize='md'>{props.welcome},</Text>
        </Skeleton>
        <Skeleton h={10} w={"45%"} rounded={"full"} mb={2} isLoaded={props.loaded}>
          <Heading fontSize={"4xl"}>{props.name}!</Heading>
        </Skeleton>
    </VStack>
  )
}
