import { useQuery } from '@tanstack/react-query'
import { User } from 'interfaces'
import { getUser } from 'services/getUser'

const useGetUser = (id: number | string) => useQuery<User, Error>(['user-detail'], () => getUser(id), {})

export { useGetUser }
