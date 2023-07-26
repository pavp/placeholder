import { useQuery } from '@tanstack/react-query'
import { useFavoritePost } from 'hooks/useFavoritePost/useFavoritePost'
import { useManageDeletedPost } from 'hooks/useManageDeletedPost/useManageDeletedPost'
import { Post } from 'interfaces/post'
import { getPosts } from 'services/getPosts'
import { filterPostsByDeleted } from 'utils/filterPostsByDeleted'
import { sortPostsByFavorites } from 'utils/sortPostsByFavorites'

const useGetPosts = () => {
  const { favorites } = useFavoritePost('')
  const { deleted } = useManageDeletedPost('')

  return useQuery<Post[], Error>(['posts'], () => getPosts(), {
    select: (posts) => sortPostsByFavorites(filterPostsByDeleted(posts, deleted), favorites),
  })
}

export { useGetPosts }
