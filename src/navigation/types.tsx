import { RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type HomeStackNavigatorParamList = {
  Home: undefined
  Detail: {
    id: number | string
  }
}

export type HomeScreenNavigationProp = StackScreenProps<HomeStackNavigatorParamList, 'Detail'>

export type DetailsScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Detail'>
