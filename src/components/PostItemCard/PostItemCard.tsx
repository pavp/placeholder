import React from 'react'
import { Post } from 'interfaces/post'
import { Title, Container, Body } from './styles'

interface IPostItemCard {
  item: Post
  handlePressItem: (id: number | string) => void
}

export const PostItemCard = ({ item, handlePressItem }: IPostItemCard) => {
  const { title, body } = item ?? {}

  return (
    <Container onPress={() => handlePressItem(item.id)} testID={'item-onpress'}>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  )
}
