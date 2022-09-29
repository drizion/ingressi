import React, { useContext } from 'react';
import { Heading, Divider, Text, Icon, HStack, Checkbox, Center, Pressable } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from './styles';



const TaskCard = (props) => {
  if(!props.color || !props.colorPressed) throw new Error("Props color ans colorPressed is required (component TaskCard)")
  return (
    <Pressable onClick={props.onClick} _pressed={{bg:props.colorPressed}} w="100%" style={styles.brutalShadow} p={3} bg={props.color}>
          <Heading>{props.title}</Heading>
          <Text numberOfLines={2}>{props.description}</Text>
          <Divider my={2} bg={"black"} />
          <HStack justifyContent="space-between" >
            <Checkbox colorScheme={"gray"}>Lido</Checkbox>
            <Center>
              <HStack alignItens="center">
                <Text>Leitura estimada: {props.time}</Text>
                <Center>
                  <Icon as={Ionicons} name="caret-forward-outline" size="md" color="black" />
                </Center>
              </HStack>
            </Center>
          </HStack>
        </Pressable>
  )
}

export default TaskCard