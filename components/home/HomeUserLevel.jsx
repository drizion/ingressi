import React from 'react'
import {
  HStack,
  CircleIcon,
  Text,
} from 'native-base'
import { LevelBar } from "../LevelBar";


export const HomeUserLevel = (props) => {
  return (
    <HStack bg="#FFF" justifyContent="space-between" alignItems="center" w="100%" px={5} py={5}>
      <CircleIcon size="70px" />
      <LevelBar progress={50} level={2} />
    </HStack>
  )
}