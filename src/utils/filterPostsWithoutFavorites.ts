import { Post } from 'interfaces'

export const filterPostsByFavorites = (posts: Post[], favorites: string[]) =>
  posts
    .filter((post) => !favorites.some((favorite) => favorite === post.id.toString()))
    .map((post) => post.id.toString())
