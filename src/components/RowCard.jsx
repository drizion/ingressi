import React from 'react'
import { Box, Image, Stack, Heading, HStack, Text, Badge } from 'native-base'
import { styles } from './styles';

const RowCard = (props) => (
    <Box flex={1} flexDirection='row'>
      <Image w={'20%'} rounded={'lg'} source={{
        uri: props.imageUrl
      }} alt="image" style={styles.image} />
      <Stack direction={['column', 'column', 'row']} rounded="lg" overflow="hidden" width={'80%'}>
        <Stack flex="1" p="1" pl="2" space={[0.9, 1, 1]}>
          <Stack space="2">
            <Heading size="sm" numberOfLines={1}>
              {props.title}
            </Heading>
          </Stack>
          <Text fontWeight="400" numberOfLines={1}>
            {props.description}
          </Text>
          <HStack alignItems="center" mt={1} space="4" justifyContent="space-between">
            <Text color={"gray.500"}>{props.date}</Text>
            <Badge colorScheme={props.badgeColor} style={styles.badge}>{props.badge}</Badge>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );

export default RowCard