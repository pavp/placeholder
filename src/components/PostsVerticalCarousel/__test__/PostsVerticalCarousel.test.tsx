import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import * as navigation from '@react-navigation/native'
import { PostsVerticalCarousel } from '../PostsVerticalCarousel'
import { Post } from 'interfaces'
import { faker } from '@faker-js/faker'
import { createReactQueryWrapper } from 'utils/createReactQueryWrapper'

describe('PostsVerticalCarousel', () => {
  const navigateMock = jest.fn()
  const post: Post = {
    id: faker.number.int(),
    title: faker.lorem.words(),
    body: faker.lorem.words(),
    userId: faker.number.int(),
  }
  const data: Post[] = [post]
  let isLoading = false

  beforeEach(() => {
    jest.clearAllMocks()
    isLoading = false
    jest.spyOn(navigation, 'useNavigation').mockReturnValue({ navigate: navigateMock })
  })

  it('should render carousel with 1 element', () => {
    render(<PostsVerticalCarousel data={data} isLoading={isLoading} />, { wrapper: createReactQueryWrapper })

    expect(screen.getAllByTestId('data-list')).toHaveLength(1)
  })

  it('should render indicator when isLoading is true', () => {
    isLoading = true
    render(<PostsVerticalCarousel data={data} isLoading={isLoading} />, { wrapper: createReactQueryWrapper })

    expect(screen.getByTestId('indicator')).toBeTruthy()
    isLoading = false
    screen.rerender(<PostsVerticalCarousel data={data} isLoading={isLoading} />)
    expect(screen.queryByTestId('indicator')).toBeNull()
  })

  it('should call handle press item', () => {
    render(<PostsVerticalCarousel data={data} isLoading={isLoading} />, { wrapper: createReactQueryWrapper })

    fireEvent.press(screen.getAllByTestId('item-onpress')[0])

    expect(navigateMock).toBeCalled()
  })
})
