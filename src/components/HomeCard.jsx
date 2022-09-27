import React from 'react';
import { Box, Icon, Text, ZStack, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const HomeCard = (props) => {
  return ( 
      <Pressable
        p={4}
        style={styles.brutalShadow}
        borderRadius={8}
        borderColor={props.cardBorderColor}
        bgColor={props.cardBgColor}
        w="47%"
        onPress={() => console.log('clicado')}
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
      </Pressable>
  );
};

export default HomeCard;