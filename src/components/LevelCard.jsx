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
  Skeleton,
} from 'native-base';
import { styles } from './styles';

const LevelCard = (props) => {
  return (
    <Pressable
      w="100%"
      bg="#FFFFFF"
      p={4}
      style={styles.brutalShadow}
      onPress={props.onPress}
      _pressed={{
        backgroundColor: "#F0F0F0"
      }}
    >
  
        <HStack>
          <Box
            borderRadius={4}
            borderWidth={2}
            borderColor="#6D7A6F"
            bgColor={'#939E95'}
            w={12}
            h={12}
            alignItems="center"
            justifyContent="center"
          >
            <Heading color="#FFFF"> {props.currentLevel || "..."} </Heading>
          </Box>
          <VStack ml={2}>
            <Text>Missão {props.currentLevel}</Text>
            <Heading>{props.title || "Carregando..."}</Heading>
          </VStack>
        </HStack>

      <VStack mt={4}>


          <HStack justifyContent="space-between">
            <Text>{props.completed || 0} de {props.length || 0} tarefas completas.</Text>
            <Text>{Math.round((props.completed * 100) / props.length) || 0}%</Text>
          </HStack>
          <Progress
            borderColor="#000"
            bg="coolGray.100"
            // size="2xl"
            height={6}
            value={(props.completed * 100) / props.length}
            borderWidth={2}
            _filledTrack={{
              bg: 'lime.500',
              borderRightWidth: (props.completed * 100) / props.length == 100 ? 0 : (props.completed * 100) / props.length == 0 ? 0 : 3,
            }}
          />

      </VStack>
    </Pressable>
  );
};

export default LevelCard;
