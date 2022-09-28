import React from 'react';
import { Box, Image, Heading, Text, HStack, Badge } from 'native-base'
import { styles } from './styles';

const BigCard = (props) => {
    return (
      <>
        <Box w='100%' h={200}>
          <Image source={{
            uri: props.imageUrl
          }} alt="Alternate Text" size="100%" style={styles.image} />
        </Box>
        <Heading mt={1.5}>{props.title}</Heading>
        <Text numberOfLines={2}>{props.description}</Text>
        <HStack mt={2} justifyContent={'space-between'}>
          <Text color={"gray.500"}>{props.date}</Text>
          <Badge colorScheme={props.badgeColor} style={styles.badge}>{props.badge}</Badge>
        </HStack>
      </>
    )
  }

export default BigCard