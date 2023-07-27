import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { ImageButton } from '../ImageButton'
import { faker } from '@faker-js/faker'

describe('ImageButton', () => {
  it('should call handlePress prop', () => {
    const handlePressMock = jest.fn()
    const imageMock = faker.number.int()

    render(<ImageButton handlePress={handlePressMock} image={imageMock} />)
    fireEvent.press(screen.getByTestId('image-button-onpress'))

    expect(handlePressMock).toBeCalled()
  })
})
