import { useGetPosts } from 'hooks/useGetPosts/useGetPosts'
import React from 'react'
import { Container } from './styles'
import { PostsVerticalCarousel } from 'components/PostsVerticalCarousel/PostsVerticalCarousel'

export const HomeScreen = () => {
  const { data, isLoading } = useGetPosts()

  return (
    <Container edges={['bottom']}>
      <PostsVerticalCarousel data={data} isLoading={isLoading} />
    </Container>
  )
}
