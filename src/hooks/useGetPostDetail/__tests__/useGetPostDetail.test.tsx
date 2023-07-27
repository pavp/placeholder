import { renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react-native'
import { Post } from 'interfaces'
import { useGetPostDetail } from '../useGetPostDetail'
import * as getPostDetail from 'services/getPostDetail'
import { faker } from '@faker-js/faker'
import { createReactQueryWrapper } from 'utils/createReactQueryWrapper'

describe('useGetPostDetail', () => {
  const post: Post = {
    id: faker.number.int(),
    title: faker.lorem.words(),
    userId: faker.number.int(),
    body: faker.lorem.words(),
  }

  it('should return post detail', async () => {
    jest.spyOn(getPostDetail, 'getPostDetail').mockResolvedValueOnce(post)

    const { result } = renderHook(() => useGetPostDetail(post.id), { wrapper: createReactQueryWrapper })

    await waitFor(() => expect(result.current.data).toEqual(post))
  })
})
