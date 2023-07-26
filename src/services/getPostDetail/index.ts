import apiClient from 'api/apiClient'
import { API_POST_DETAIL } from 'api/constants'

export const getPostDetail = async (id: number | string) => {
  const { data } = await apiClient.get(API_POST_DETAIL(id))

  return data
}
