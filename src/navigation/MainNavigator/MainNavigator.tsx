import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeStackNavigatorParamList } from '../types'
import { COLOR } from 'commons/colors'
import { DetailScreen } from 'modules/detailPage/DetailScreen'
import { HomeScreen } from 'modules/home/HomeScreen'

const { Screen, Navigator } = createStackNavigator<HomeStackNavigatorParamList>()

export const MainNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Posts',
          headerStyle: {
            backgroundColor: COLOR.darkGray,
          },
          headerTitleStyle: {
            color: COLOR.white,
          },
        }}
      />
      <Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Post',
          headerTitleStyle: {
            color: COLOR.white,
          },
          headerBackTitleVisible: false,
          headerTransparent: false,
          headerTintColor: COLOR.white,
          headerStyle: {
            backgroundColor: COLOR.darkGray,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Navigator>
  )
}
