import { useQuery } from '@tanstack/react-query'
import { Post } from 'interfaces/post'
import { getPosts } from 'services/getPosts'

const useGetPosts = () => useQuery<Post[], Error>(['posts'], () => getPosts())

export { useGetPosts }
