import apiClient from 'api/apiClient'
import { API_GET_POSTS } from 'api/constants'

export const getPosts = async () => {
  const { data } = await apiClient.get(API_GET_POSTS)

  return data
}
