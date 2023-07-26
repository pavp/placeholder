import { RouteProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type HomeStackNavigatorParamList = {
  Home: undefined
  Detail: {
    id: number | string
    userId: number | string
  }
}

export type HomeScreenNavigationProp = StackScreenProps<HomeStackNavigatorParamList, 'Detail'>

export type DetailsScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Detail'>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackNavigatorParamList {}
  }
}
