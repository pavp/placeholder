import apiClient from 'api/apiClient'
import { API_POST_DETAIL } from 'api/constants'

export const deletePostDetail = async (id: number | string) => {
  const { data } = await apiClient.delete(API_POST_DETAIL(id))

  return data
}
