import React from 'react';
import { Box } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from '../components/styles';
import { tabIcon, iconColor, tabColor } from '../TabConfig';

import HomeScreen from '../screens/app/HomeScreen';
import MissionScreen from '../screens/app/MissionScreen';
import NotificationScreen from '../screens/app/NotificationScreen';
import ProfileScreen from '../screens/app/ProfileScreen';

const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false
}

const Tab = createBottomTabNavigator()

const AppRoutes = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					return <Box bg={focused ? tabColor(focused)[route.name] : undefined} padding={2} borderRadius={10} style={focused ? styles.brutalShadow : undefined}>
						<Ionicons name={tabIcon(focused)[route.name]} size={size} color={iconColor(focused)[route.name]} />
					</Box>;
				}
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={tabOptions} />
			<Tab.Screen name="Mission" component={MissionScreen} options={tabOptions} />
			<Tab.Screen name="Notification" component={NotificationScreen} options={tabOptions} />
			<Tab.Screen name="Profile" component={ProfileScreen} options={tabOptions} />
		</Tab.Navigator>
	)
}

export default AppRoutes