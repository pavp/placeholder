import React from 'react'
import { Post } from 'interfaces/post'
import { useFavoritePost } from 'hooks/useFavoritePost/useFavoritePost'
import { ImageButton } from 'components/ImageButton/ImageButton'
import { COLOR } from 'commons/colors'
import { Title, Container, Body, ActionsContainer, Content, TrashContainer } from './styles'
import { useDeletePost } from 'hooks/useDeletePost/useDeletePost'

interface IPostItemCard {
  item: Post
  handlePressItem: (id: number | string, userId: number | string) => void
}

export const PostItemCard = ({ item, handlePressItem }: IPostItemCard) => {
  const { title, body, id } = item ?? {}
  const { isFavoritePost, setFavoritePost, removeFavoritePost } = useFavoritePost(id)
  const { deletePost } = useDeletePost(id)

  return (
    <Content>
      <Container onPress={() => handlePressItem(item.id, item.userId)} testID={'item-onpress'}>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Container>
      <ActionsContainer>
        <TrashContainer>
          <ImageButton
            handlePress={() => deletePost()}
            image={require('../../commons/images/recycle-bin.png')}
            color={'#FF0000'}
          />
        </TrashContainer>

        {isFavoritePost ? (
          <ImageButton handlePress={() => removeFavoritePost()} image={require('../../commons/images/fill-star.png')} />
        ) : (
          <ImageButton
            handlePress={() => setFavoritePost()}
            image={require('../../commons/images/empty-star.png')}
            color={COLOR.white}
          />
        )}
      </ActionsContainer>
    </Content>
  )
}
