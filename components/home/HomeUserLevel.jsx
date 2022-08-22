import React from 'react'
import {
  HStack,
  CircleIcon,
  Text,
} from 'native-base'
import { LevelBar } from "../LevelBar";


export const HomeUserLevel = (props) => {
  return (
      <LevelBar progress={50} level={2} />
  )
}