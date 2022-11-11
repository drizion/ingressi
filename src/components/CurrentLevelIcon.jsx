import { Box, Heading, Text, Progress, VStack, HStack } from 'native-base';
import React from 'react';


const CurrentLevelIcon = (props) => {
  return (
    <Box>
      {/* <HStack>
      <Box borderRadius={1} borderColor="#6D7A6F">
        <Heading> {props.currentLevel} </Heading>
      </Box>
      <VStack>
        <Text>Missão {props.currentLevel}</Text>
        <Heading>Decisão do curso</Heading>
      </VStack>
      </HStack>
      <VStack>
        <HStack>
          <Text>2 de 4 tarefas completas.</Text> 
          <Text>50%</Text>
        </HStack>
        <Progress w="100%"/>
      </VStack> */}
    </Box>
  );
};

export default CurrentLevelIcon;
