import React, { useCallback } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Post } from 'interfaces/post'
import { PostItemCard } from 'components/PostItemCard/PostItemCard'
import { Container } from './styles'

interface IPostsVerticalCarousel {
  data: Post[] | undefined
  isLoading: boolean
}

export const PostsVerticalCarousel = ({ data, isLoading }: IPostsVerticalCarousel) => {
  const { navigate } = useNavigation()

  const handlePressItem = useCallback((id: number | string) => {
    navigate('Detail', { id })
  }, [])

  const renderItem = ({ item }: { item: Post }) => <PostItemCard item={item} handlePressItem={handlePressItem} />

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator testID={'indicator'} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          testID={'data-list'}
        />
      )}
    </Container>
  )
}
