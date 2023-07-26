export const BASE_URL = 'https://jsonplaceholder.typicode.com'
export const API_GET_POSTS = '/posts'
export const API_POST_DETAIL = (id: number | string) => `/posts/${id}`
export const API_GET_COMMENTS = (id: number | string) => `/posts/${id}/comments`
export const API_USER = (id: number | string) => `/users/${id}`
