import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomeStackNavigatorParamList } from './types'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { MainNavigator } from './MainNavigator/MainNavigator'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackNavigatorParamList {}
  }
}

const queryClient = new QueryClient()

const AppMain = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />
          <MainNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppMain
