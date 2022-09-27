import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

const queryClient = new QueryClient()

const App = () => {
  
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AuthProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}

export default App