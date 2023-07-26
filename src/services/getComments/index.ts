import apiClient from 'api/apiClient'
import { API_GET_COMMENTS } from 'api/constants'

export const getComments = async (id: number | string) => {
  const { data } = await apiClient.get(API_GET_COMMENTS(id))

  return data
}
