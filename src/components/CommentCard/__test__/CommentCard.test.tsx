import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { Comment } from 'interfaces'
import { CommentCard } from '../CommentCard'
import { faker } from '@faker-js/faker'

describe('CommentCard', () => {
  it('should render', () => {
    const comment: Comment = {
      postId: faker.string.uuid(),
      name: faker.person.firstName(),
      id: faker.string.uuid(),
      body: faker.lorem.paragraph(),
      email: faker.internet.email(),
    }

    render(<CommentCard item={comment} />)

    expect(screen.getByTestId('comment-card')).toBeTruthy()
  })
})
