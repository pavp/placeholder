import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { MainNavigator } from './MainNavigator/MainNavigator'
import { useFavoritePost } from 'hooks/useFavoritePost/useFavoritePost'
import { useManageDeletedPost } from 'hooks/useManageDeletedPost/useManageDeletedPost'

const queryClient = new QueryClient()

export const AppMain = () => {
  const { rehydrateFavoritePosts } = useFavoritePost('')
  const { rehydrateDeletedPosts } = useManageDeletedPost('')

  useEffect(() => {
    rehydrateFavoritePosts()
    rehydrateDeletedPosts()
  }, [])

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
