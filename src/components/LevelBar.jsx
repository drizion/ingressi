import React from "react";
import { Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Box, Progress, Center, HStack, Text } from "native-base";
import { styles } from "./styles";

export const LevelBar = (props) => {
  return <Box>
    <HStack  justifyContent="center">
      <Center style={styles.brutalShadow} zIndex={1} bg={'black'} px={2} borderRadius={10} >
        <Icon 
          as={FontAwesome5}
          name={'star-half-alt'}
          size={3}
          color={'#f5e942'}
        />
      </Center>
      <Center ml={-2}>
        <Box w="100" maxW="100">
          <Progress style={styles.brutalShadow} bg="coolGray.100" size="2xl" _filledTrack={{
          bg: "lime.500", borderRightWidth: props.progress == 0 ? 0 : props.progress >= 100 ? 0 : 3,
          borderLeftRadius: 0 
          }} value={props.progress || 0} borderWidth={1} borderLeftRadius={0} />
        </Box>
      </Center>
    </HStack>
    <HStack>
      <Text bold>{"Nível " + (props.level || '...')}</Text>
    </HStack>
  </Box>;
};