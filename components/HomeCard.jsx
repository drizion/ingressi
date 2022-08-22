import React from 'react';
import { Box, Icon, Text, ZStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const HomeCard = (props) => {
  return (
      <Box
        p={4}
        borderRadius={8}
        borderColor={props.cardBorderColor}
        borderWidth="2"
        bgColor={props.cardBgColor}
        w="47%"
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
      </Box>
  );
};

export default HomeCard;
