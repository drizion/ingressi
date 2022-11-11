import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient()

const App = () => {
  return (
    <SafeAreaProvider>
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AuthProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

export default App