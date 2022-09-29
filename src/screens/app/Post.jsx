import React, { useContext } from 'react';
import { VStack, HStack, ScrollView, Box, Heading, Badge, Text, Image, Divider, Icon, Center, Link, SectionList } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { styles } from '../../components/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const Post = (props) => {
	const { user } = useContext(AuthContext)
	const { title, badge, badgeColor, imageUrl, content, author, date } = props.route.params

	return (
		<Box safeAreaTop>
			<ScrollView px={5}>
				<Header picture={user.picture} />
				<HStack my={2} >
					<Badge colorScheme={badgeColor} style={styles.badge}>{badge}</Badge>
				</HStack>

				<Heading mb={3}>{title}</Heading>

				<Box w='100%' h={200}>
					<Image source={{
						uri: imageUrl
					}} alt="Alternate Text" size="100%" style={styles.image} />
				</Box>

				<HStack mt={2} justifyContent={'space-between'}>
					<HStack justifyContent={'center'}>
						<Center mr={1}>
							<Icon size="sm" as={Ionicons} name="person" />
						</Center>
						<Text color={"gray.700"}>{author}</Text>
					</HStack>
					<HStack justifyContent={'center'}>
						<Center mr={1}>
							<Icon size="sm" as={Ionicons} name="calendar" />
						</Center>
						<Text color={"gray.700"}>{date}</Text>
					</HStack>
				</HStack>
				<Divider my={3} />
				<Text lineHeight={'lg'} fontSize={'md'} pb={5}>{content}</Text>
			</ScrollView>
		</Box>
		
	)
}

export default Post