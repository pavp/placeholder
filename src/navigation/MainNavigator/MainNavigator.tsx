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
          title: 'Movies',
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
          title: '',
          headerTitleStyle: {
            color: COLOR.white,
          },
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: COLOR.white,
        }}
      />
    </Navigator>
  )
}
