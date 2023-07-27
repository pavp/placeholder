import { renderHook } from '@testing-library/react-hooks'
import { Post } from 'interfaces'
import { useFavoritePost } from '../useFavoritePost'
import { faker } from '@faker-js/faker'
import * as usePostStore from 'store/usePostStore'
import * as asyncStoreManager from 'utils/asyncStorageManager'

describe('useFavoritePost', () => {
  const post: Post = {
    id: faker.number.int(),
    title: faker.lorem.words(),
    userId: faker.number.int(),
    body: faker.lorem.words(),
  }

  it('should return favorite list', () => {
    const favoritesMock = [faker.string.uuid()]
    jest.spyOn(usePostStore, 'usePostStore').mockReturnValueOnce({ favorites: favoritesMock })

    const { result } = renderHook(() => useFavoritePost(post.id))
    const { favorites } = result.current

    expect(favorites).toHaveLength(1)
    expect(favorites[0]).toEqual(favoritesMock[0])
  })

  it('should return isFavoritePost as false', () => {
    const favoritesMock = [faker.string.uuid()]
    jest.spyOn(usePostStore, 'usePostStore').mockReturnValueOnce({ favorites: favoritesMock })

    const { result } = renderHook(() => useFavoritePost(faker.string.uuid()))
    const { isFavoritePost } = result.current

    expect(isFavoritePost).toEqual(false)
  })

  it('should return isFavoritePost as true', () => {
    const favoritesMock = [faker.string.uuid()]
    jest.spyOn(usePostStore, 'usePostStore').mockReturnValueOnce({ favorites: favoritesMock })

    const { result } = renderHook(() => useFavoritePost(favoritesMock[0]))
    const { isFavoritePost } = result.current

    expect(isFavoritePost).toEqual(true)
  })

  it('should set favorite posts', () => {
    const storeDataSpy = jest.spyOn(asyncStoreManager, 'storeData')
    const setFavoritesMock = jest.fn()
    const idFavoriteMock = faker.string.uuid()
    const favoritesMock = [faker.string.uuid()]
    jest
      .spyOn(usePostStore, 'usePostStore')
      .mockReturnValueOnce({ favorites: favoritesMock, setFavorites: setFavoritesMock })

    const { result } = renderHook(() => useFavoritePost(idFavoriteMock))
    const { setFavoritePost } = result.current
    setFavoritePost()

    expect(setFavoritesMock).toBeCalledWith([...favoritesMock, idFavoriteMock])
    expect(storeDataSpy).toBeCalledWith(
      asyncStoreManager.KEYS_STORAGE.FAVORITES,
      JSON.stringify([...favoritesMock, idFavoriteMock])
    )
  })

  it('should remove favorite posts', () => {
    const storeDataSpy = jest.spyOn(asyncStoreManager, 'storeData')
    const setFavoritesMock = jest.fn()
    const idFavoriteMock = faker.string.uuid()
    const favoritesMock = [faker.string.uuid(), idFavoriteMock]
    jest
      .spyOn(usePostStore, 'usePostStore')
      .mockReturnValueOnce({ favorites: favoritesMock, setFavorites: setFavoritesMock })

    const { result } = renderHook(() => useFavoritePost(idFavoriteMock))
    const { removeFavoritePost } = result.current
    removeFavoritePost()

    expect(setFavoritesMock).toBeCalledWith([favoritesMock[0]])
    expect(storeDataSpy).toBeCalledWith(asyncStoreManager.KEYS_STORAGE.FAVORITES, JSON.stringify([favoritesMock[0]]))
  })

  it('should rehydrate favorite posts', async () => {
    const idFavoriteMock = faker.string.uuid()
    const favoritesMock = JSON.stringify([faker.string.uuid(), idFavoriteMock])
    const getDataSpy = jest.spyOn(asyncStoreManager, 'getData').mockResolvedValueOnce(favoritesMock)
    const setFavoritesMock = jest.fn()
    jest
      .spyOn(usePostStore, 'usePostStore')
      .mockReturnValueOnce({ favorites: favoritesMock, setFavorites: setFavoritesMock })

    const { result, waitFor } = renderHook(() => useFavoritePost(idFavoriteMock))
    const { rehydrateFavoritePosts } = result.current
    rehydrateFavoritePosts()

    expect(getDataSpy).toBeCalledWith(asyncStoreManager.KEYS_STORAGE.FAVORITES)
    await waitFor(() => expect(setFavoritesMock).toBeCalledWith(JSON.parse(favoritesMock)))
  })

  it('should avoid rehydrate favorite posts when list is empty', async () => {
    const idFavoriteMock = faker.string.uuid()
    const favoritesMock = JSON.stringify([])
    const getDataSpy = jest.spyOn(asyncStoreManager, 'getData').mockResolvedValueOnce('')
    const setFavoritesMock = jest.fn()
    jest
      .spyOn(usePostStore, 'usePostStore')
      .mockReturnValueOnce({ favorites: favoritesMock, setFavorites: setFavoritesMock })

    const { result, waitFor } = renderHook(() => useFavoritePost(idFavoriteMock))
    const { rehydrateFavoritePosts } = result.current
    rehydrateFavoritePosts()

    expect(getDataSpy).toBeCalledWith(asyncStoreManager.KEYS_STORAGE.FAVORITES)
    await waitFor(() => expect(setFavoritesMock).not.toBeCalled())
  })
})
