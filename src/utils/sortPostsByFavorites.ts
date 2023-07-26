import { Post } from 'interfaces'

export const sortPostsByFavorites = (posts: Post[], favorites: string[]) =>
  posts.sort((firstPost, secondPost) => {
    const itemAHasIdInFavorites = favorites.some((item) => item === firstPost.id.toString())
    const itemBHasIdInFavorites = favorites.some((item) => item === secondPost.id.toString())

    if (itemAHasIdInFavorites && !itemBHasIdInFavorites) return -1
    if (!itemAHasIdInFavorites && itemBHasIdInFavorites) return 1

    return 0
  })
