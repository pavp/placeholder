import { useQuery } from '@tanstack/react-query'
import { Post } from 'interfaces/post'
import { getPostDetail } from 'services/getPostDetail'

const useGetPostDetail = (id: number | string) =>
  useQuery<Post, Error>(['post-detail'], () => getPostDetail(id), {
    cacheTime: 0,
  })

export { useGetPostDetail }
