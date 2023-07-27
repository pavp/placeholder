import React from 'react'
import { Name, Container, Body, Email } from './styles'
import { Comment } from 'interfaces'

interface ICommentCard {
  item: Comment
}

export const CommentCard = ({ item }: ICommentCard) => {
  const { name, body, email } = item

  return (
    <Container testID={'comment-card'}>
      <Name>{name}</Name>
      <Body>{body}</Body>
      <Email>{email}</Email>
    </Container>
  )
}
