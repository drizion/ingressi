import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Box } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from '../components/styles';
import { tabIcon, iconColor, tabColor } from '../TabConfig';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from '../screens/app/HomeScreen';
import MissionScreen from '../screens/app/MissionScreen';
import NotificationScreen from '../screens/app/NotificationScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import TaskScreen from '../screens/app/TaskScreen';
import CampusScreen from '../screens/app/CampusScreen';
import PostScreen from '../screens/app/PostScreen';
import CourseScreen from '../screens/app/CourseScreen';
import Post from '../screens/app/Post';
import { SafeAreaInsetsContext, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Task from '../screens/app/Task';
import HospScreen from '../screens/app/HospScreen';
import InfoScreen from '../screens/app/InfoScreen';

const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false
}

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const BottomTabs = () => {
    const insets = useSafeAreaInsets()
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					return <Box bg={focused ? tabColor(focused)[route.name] : undefined} padding={2} borderRadius={10} style={focused ? styles.brutalShadow : undefined}>
						<Ionicons name={tabIcon(focused)[route.name]} size={size} color={iconColor(focused)[route.name]} />
					</Box>;
				}
			})}
            safeAreaInsets={insets}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={tabOptions} />
			<Tab.Screen name="Mission" component={MissionScreen} options={tabOptions} />
			<Tab.Screen name="Notification" component={NotificationScreen} options={tabOptions} />
			<Tab.Screen name="Profile" component={ProfileScreen} options={tabOptions} />
		</Tab.Navigator>
	)
}

const AppRoutes = () => {
    useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    }, [])
    
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
            />
			<Stack.Screen
            name="Mission"
            component={PostScreen}
            options={{ headerShown: false }}
            />
			<Stack.Screen
            name="Tasks"
            component={TaskScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Task"
            component={Task}
            options={{ headerShown: false }}
            />
			<Stack.Screen
            name="Posts"
            component={PostScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Post"
            component={Post}
            options={{ headerShown: false }}
            />
			<Stack.Screen
            name="Campus"
            component={CampusScreen}
            options={{ headerShown: false }}
            />
			<Stack.Screen
            name="Course"
            component={CourseScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Hospedagem"
            component={HospScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Informatica"
            component={InfoScreen}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes