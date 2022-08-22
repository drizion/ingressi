import {
  Box,
  Heading,
  Text,
  Progress,
  VStack,
  HStack,
  Center,
} from 'native-base';
import React from 'react';
import { styles } from './styles';

const LevelCard = (props) => {
  return (
    <Box
      mt={8}
      w="100%"
      borderColor={'#101118'}
      borderWidth="2px"
      borderRadius={4}
      p={4}
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
          <Heading>Decisão do curso</Heading>
        </VStack>
      </HStack>
      <VStack mt={4}>
        <HStack justifyContent="space-between">
          <Text>2 de 4 tarefas completas.</Text>
          <Text>50%</Text>
        </HStack>
        <Progress
          borderColor="#000"
          style={styles.brutalShadow}
          bg="coolGray.100"
          // size="2xl"
          height={6}
          value={50}
          _filledTrack={{
            bg: 'lime.500',
            borderWidth: 2,
          }}
        />
      </VStack>
    </Box>
  );
};

export default LevelCard;
