import apiClient from 'api/apiClient'
import { API_USER } from 'api/constants'

export const getUser = async (id: number | string) => {
  const { data } = await apiClient.get(API_USER(id))

  return data
}
