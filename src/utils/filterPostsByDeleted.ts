import { Post } from 'interfaces'

export const filterPostsByDeleted = (posts: Post[], deleted: string[]) =>
  posts.filter((post) => !deleted.some((itemDeleted) => itemDeleted === post.id.toString()))
