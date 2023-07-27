import { View } from 'react-native'

export const useNavigation = jest.fn().mockReturnValue({
  navigate: () => undefined,
  dispatch: () => undefined,
  setParams: () => undefined,
  getParent: () => ({ pop: () => undefined }),
  setOptions: () => undefined,
})

export const CommonActions = {
  reset: () => undefined,
}

export const StackActions = {
  replace: () => undefined,
}

export const useRoute = () => ({ params: undefined })

export const createNavigatorFactory = () => null

export const NavigationContainer = View

export const useFocusEffect = () => {}
