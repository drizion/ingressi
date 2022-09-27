import React from 'react';
import {
  Box,
  Heading,
  Text,
  Progress,
  VStack,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { styles } from './styles';

const LevelCard = (props) => {
  return (
    <Pressable
      mt={8}
      w="100%"
      bg="#FFFFFF"
      p={4}
      style={styles.brutalShadow}
      onPress={() => console.log("I'm Pressed")}
    >
      <HStack>
        <Box
          borderRadius={4}
          borderWidth={2}
          borderColor="#6D7A6F"
          bgColor={'#939E95'}
          w={12}
          alignItems="center"
          justifyContent="center"
        >
          <Heading color="#FFFF"> {props.currentLevel} </Heading>
        </Box>
        <VStack ml={2}>
          <Text>Missão {props.currentLevel}</Text>
          <Heading>{props.title}</Heading>
        </VStack>
      </HStack>
      <VStack mt={4}>
        <HStack justifyContent="space-between">
          <Text>{props.currentLevel} de {props.max} tarefas completas.</Text>
          <Text>{props.percent}%</Text>
        </HStack>
        <Progress
          borderColor="#000"
          style={styles.brutalShadow}
          bg="coolGray.100"
          // size="2xl"
          height={6}
          value={props.percent}
          borderWidth={2}
          _filledTrack={{
            bg: 'lime.500',
            borderRightWidth: 3,
          }}
        />
      </VStack>
    </Pressable>
  );
};

export default LevelCard;
