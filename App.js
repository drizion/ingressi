import React from 'react';
import { NativeBaseProvider, Box} from 'native-base';
import HomeScreen from './screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { tabIcon, iconColor, tabColor } from './src/TabConfig';
import { styles } from './components/styles';
const Tab = createBottomTabNavigator()
const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false
}


export default function App(){
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <Box bg={focused ? tabColor(focused)[route.name] : undefined} padding={2} borderRadius={10} style={focused ? styles.brutalShadow : undefined}>
                <Ionicons name={tabIcon(focused)[route.name]} size={size} color={iconColor(focused)[route.name]}  />
              </Box>;
            }
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={tabOptions} />
          <Tab.Screen name="Missoes" component={HomeScreen} options={tabOptions} />
          <Tab.Screen name="Chat" component={HomeScreen} options={tabOptions} />
          <Tab.Screen name="Perfil" component={HomeScreen} options={tabOptions} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}