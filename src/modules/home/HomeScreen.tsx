import { useGetPosts } from 'hooks/useGetPosts/useGetPosts'
import React, { useEffect } from 'react'
import { Container, DeleteAllContainer, RightButtonContainer } from './styles'
import { PostsVerticalCarousel } from 'components/PostsVerticalCarousel/PostsVerticalCarousel'
import { ImageButton } from 'components/ImageButton/ImageButton'
import { useNavigation } from '@react-navigation/native'
import { COLOR } from 'commons/colors'
import { useManageDeletedPost } from 'hooks/useManageDeletedPost/useManageDeletedPost'
import { useFavoritePost } from 'hooks/useFavoritePost/useFavoritePost'

export const HomeScreen = () => {
  const navigation = useNavigation()
  const { data, isLoading } = useGetPosts()
  const { resetDeletedPost, deleteAllPostsWithoutFavorites } = useManageDeletedPost('')
  const { favorites } = useFavoritePost('')

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RightButtonContainer>
          <DeleteAllContainer>
            <ImageButton
              handlePress={() => deleteAllPostsWithoutFavorites(data ?? [], favorites)}
              image={require('../../commons/images/cross.png')}
            />
          </DeleteAllContainer>
          <ImageButton
            handlePress={() => resetDeletedPost()}
            image={require('../../commons/images/refresh.png')}
            color={COLOR.blue}
          />
        </RightButtonContainer>
      ),
    })
  }, [navigation, data, favorites])

  return (
    <Container edges={['bottom']} testID="home-container">
      <PostsVerticalCarousel data={data} isLoading={isLoading} />
    </Container>
  )
}
