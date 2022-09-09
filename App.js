import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import { tabIcon, iconColor, tabColor } from './src/TabConfig';
import { styles } from './components/styles';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MissionScreen from './screens/MissionScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostRegisterScreen from './screens/PostRegisterScreen';
import CheckLogin from './screens/CheckLogin';

const queryClient = new QueryClient()

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false
}

export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="check"
              component={CheckLogin}
              options={{ title: "Entrando..." }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Cadastre-se!" }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={AppTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostRegister"
              component={PostRegisterScreen}
              options={{ title: "Quase lá"}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}

function AppTabs({navigation}) {
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
      <Tab.Screen name="Missoes" component={MissionScreen} options={tabOptions} />
      <Tab.Screen name="Chat" component={ChatScreen} options={tabOptions} />
      <Tab.Screen name="Perfil" component={ProfileScreen} options={tabOptions} />
    </Tab.Navigator>
  )
}