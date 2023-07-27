import { Post } from 'interfaces'
import { useCallback, useMemo } from 'react'
import { usePostStore } from 'store/usePostStore'
import { KEYS_STORAGE, getData, storeData } from 'utils/asyncStorageManager'
import { filterPostsByFavorites } from 'utils/filterPostsWithoutFavorites'

export const useManageDeletedPost = (id: string | number) => {
  const { deleted, setDeleted } = usePostStore((state) => state)

  const isDeletedPost = useMemo(() => deleted.includes(id.toString()), [id, deleted])

  const setDeletedPost = useCallback(() => {
    const lastDeleted = [...deleted, id.toString()]
    setDeleted(lastDeleted)
    storeData(KEYS_STORAGE.DELETED, JSON.stringify(lastDeleted))
  }, [deleted, id])

  const removeDeletedPost = useCallback(() => {
    const lastDeleted = deleted.filter((item) => item !== id.toString())
    setDeleted(lastDeleted)
    storeData(KEYS_STORAGE.DELETED, JSON.stringify(lastDeleted))
  }, [deleted, id])

  const rehydrateDeletedPosts = useCallback(async () => {
    const lastDeleted = await getData(KEYS_STORAGE.DELETED)
    if (lastDeleted?.length) setDeleted(JSON.parse(lastDeleted))
  }, [])

  const resetDeletedPost = useCallback(() => {
    setDeleted([])
    storeData(KEYS_STORAGE.DELETED, JSON.stringify([]))
  }, [])

  const deleteAllPostsWithoutFavorites = useCallback(
    (posts: Post[], favorites: string[]) => {
      if (!posts.length) return

      const deletePosts = [...deleted, ...filterPostsByFavorites(posts, favorites)]
      if (deletePosts.length) {
        setDeleted(deletePosts)
        storeData(KEYS_STORAGE.DELETED, JSON.stringify(deletePosts))
      }
    },
    [deleted]
  )

  return {
    deleted,
    isDeletedPost,
    setDeletedPost,
    removeDeletedPost,
    rehydrateDeletedPosts,
    resetDeletedPost,
    deleteAllPostsWithoutFavorites,
  }
}
