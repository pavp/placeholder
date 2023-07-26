import AsyncStorage from '@react-native-async-storage/async-storage'

const KEYS_STORAGE = {
  FAVORITES: 'favorites',
  DELETED: 'deleted',
}

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}

export { storeData, getData, KEYS_STORAGE }
