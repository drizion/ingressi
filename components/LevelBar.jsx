import React from "react";
import { Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Box, Progress, Center, HStack, Text } from "native-base";
import { styles } from "./styles";

export const LevelBar = (props) => {
  return <Box>
    <HStack space={"1px"} justifyContent="center">
      <Center style={styles.brutalShadow} bg={'black'} px={2} borderRadius={10}>
        <Icon 
          as={FontAwesome5}
          name={'star-half-alt'}
          size={3}
          color={'#f5e942'}
        />
      </Center>
      <Center>
        <Box w="120" maxW="400">
          <Progress style={styles.brutalShadow} bg="coolGray.100" size="2xl" _filledTrack={{
          bg: "lime.500", borderWidth: 1, 
          }} value={props.progress ? props.progress : 0} borderWidth={1} />
        </Box>
      </Center>
    </HStack>
    <HStack>
      <Text bold>{"Nível " + (props.level ? props.level : '...')}</Text>
    </HStack>
  </Box>;
};