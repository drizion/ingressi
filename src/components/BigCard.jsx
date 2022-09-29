import React from 'react';
import { Box, Image, Heading, Text, HStack, Badge, Pressable } from 'native-base'
import { styles } from './styles';

const BigCard = (props) => {
    return (
      <Pressable 
      rounded={'lg'}
      py={1}
      onPress={props.onPress}
      _pressed={{backgroundColor: "gray.200"}}>
        <Box w='100%' h={200}>
          <Image source={{
            uri: props.imageUrl
          }} alt="Alternate Text" size="100%" style={styles.image} />
        </Box>
        <Heading px={1} mt={1.5}>{props.title}</Heading>
        <Text px={1} numberOfLines={2}>{props.description}</Text>
        <HStack mt={2} px={1} justifyContent={'space-between'}>
          <Text color={"gray.500"}>{props.date}</Text>
          <Badge colorScheme={props.badgeColor} style={styles.badge}>{props.badge}</Badge>
        </HStack>
      </Pressable>
    )
  }

export default BigCard