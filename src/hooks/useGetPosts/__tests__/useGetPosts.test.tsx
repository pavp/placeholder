import { renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react-native'
import { Post } from 'interfaces'
import { useGetPosts } from '../useGetPosts'
import * as getPosts from 'services/getPosts'
import { createReactQueryWrapper } from 'utils/createReactQueryWrapper'
import { faker } from '@faker-js/faker'

describe('useGetPosts', () => {
  const post: Post = {
    id: faker.number.int(),
    title: faker.lorem.words(),
    userId: faker.number.int(),
    body: faker.lorem.words(),
  }

  it('should return data list', async () => {
    jest.spyOn(getPosts, 'getPosts').mockResolvedValueOnce([post])

    const { result } = renderHook(useGetPosts, { wrapper: createReactQueryWrapper })

    await waitFor(() => expect(result.current.data).toEqual([post]))
  })
})
