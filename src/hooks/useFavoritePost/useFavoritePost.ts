import { useCallback, useMemo } from 'react'
import { usePostStore } from 'store/usePostStore'
import { KEYS_STORAGE, getData, storeData } from 'utils/AsyncStorageManager'

export const useFavoritePost = (id: string | number) => {
  const { favorites, setFavorites } = usePostStore((state) => state)

  const isFavoritePost = useMemo(() => favorites.includes(id.toString()), [id, favorites])

  const setFavoritePost = useCallback(() => {
    const lastFavorites = [...favorites, id.toString()]
    setFavorites(lastFavorites)
    storeData(KEYS_STORAGE.FAVORITES, JSON.stringify(lastFavorites))
  }, [favorites, id])

  const removeFavoritePost = useCallback(() => {
    const lastFavorites = favorites.filter((item) => item !== id.toString())
    setFavorites(lastFavorites)
    storeData(KEYS_STORAGE.FAVORITES, JSON.stringify(lastFavorites))
  }, [favorites, id])

  const rehydrateFavoritePosts = useCallback(async () => {
    const lastFavorites = await getData(KEYS_STORAGE.FAVORITES)
    if (lastFavorites?.length) setFavorites(JSON.parse(lastFavorites))
  }, [])

  return { favorites, isFavoritePost, setFavoritePost, removeFavoritePost, rehydrateFavoritePosts }
}
