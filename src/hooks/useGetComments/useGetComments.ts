import { useQuery } from '@tanstack/react-query'
import { Comment } from 'interfaces'
import { getComments } from 'services/getComments'

const useGetComments = (id: number | string) => useQuery<Comment[], Error>(['post-comments'], () => getComments(id), {})

export { useGetComments }
