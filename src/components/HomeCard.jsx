import React from 'react';
import { Box, Icon, Text, ZStack, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const HomeCard = (props) => {
  return ( 
      <Pressable
        w="47%"
        onPress={props.onPress}
      >
         {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box
          p={4}
          borderRadius={8}
          borderColor={props.cardBorderColor}
          bgColor={isPressed ? `${props.cardBgColor}AA` : props.cardBgColor}
          style={isPressed ? styles.reversedBrutalShadow : styles.brutalShadow}
        >
          <Icon
            as={MaterialIcons}
            name={props.iconName}
            size={12}
            color={'#000'}
            opacity={0.5}
          />
          <Text mt={2} bold>
            {props.text}
          </Text>
        </Box>;
      }}
      </Pressable>
  );
};

export default HomeCard;