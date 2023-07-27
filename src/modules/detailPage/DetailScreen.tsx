import { useNavigation, useRoute } from '@react-navigation/native'
import { ImageButton } from 'components/ImageButton/ImageButton'
import React, { useEffect, useMemo } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useGetPostDetail } from 'hooks/useGetPostDetail/useGetPostDetail'
import { DetailsScreenRouteProp } from 'navigation/types'
import { useGetUser } from 'hooks/useGetUser/useGetUser'
import { useGetComments } from 'hooks/useGetComments/useGetComments'
import { CommentCard } from 'components/CommentCard/CommentCard'
import { useFavoritePost } from 'hooks/useFavoritePost/useFavoritePost'
import { COLOR } from 'commons/colors'
import {
  Body,
  CommentContainer,
  CommentTitle,
  Container,
  Name,
  RightButtonContainer,
  Separator,
  Title,
  UserContainer,
  Username,
} from './styles'

export const DetailScreen = () => {
  const {
    params: { id, userId },
  } = useRoute<DetailsScreenRouteProp>()
  const navigation = useNavigation()
  const { isFavoritePost, setFavoritePost, removeFavoritePost } = useFavoritePost(id)

  const { data: post, isLoading: isLoadingPost } = useGetPostDetail(id)
  const { data: user, isLoading: isLoadingUser } = useGetUser(userId)
  const { data: comments, isLoading: isLoadingComments } = useGetComments(id)
  const { title, body } = post ?? {}
  const { name, username } = user ?? {}

  const isLoading = useMemo(
    () => isLoadingComments && isLoadingPost && isLoadingUser,
    [isLoadingComments, isLoadingPost, isLoadingUser]
  )

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RightButtonContainer>
          {isFavoritePost ? (
            <ImageButton
              handlePress={() => removeFavoritePost()}
              image={require('../../commons/images/fill-star.png')}
            />
          ) : (
            <ImageButton
              handlePress={() => setFavoritePost()}
              image={require('../../commons/images/empty-star.png')}
              color={COLOR.white}
            />
          )}
        </RightButtonContainer>
      ),
    })
  }, [navigation, isFavoritePost])

  return (
    <Container edges={['bottom']} testID="detail-container">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <UserContainer>
            <Name>{name}</Name>
            <Username>{`@${username}`}</Username>
          </UserContainer>
          <Title>{title}</Title>
          <Body>{body}</Body>
          <Separator />
          <CommentContainer>
            <CommentTitle>Comments</CommentTitle>
            {comments?.map((comment) => <CommentCard item={comment} key={comment.id} />)}
          </CommentContainer>
        </ScrollView>
      )}
    </Container>
  )
}
