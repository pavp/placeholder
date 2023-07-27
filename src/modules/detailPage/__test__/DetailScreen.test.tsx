import React from 'react'
import { render, screen } from '@testing-library/react-native'
import * as navigation from '@react-navigation/native'
import { DetailScreen } from '../DetailScreen'
import { createReactQueryWrapper } from 'utils/createReactQueryWrapper'
import { faker } from '@faker-js/faker'
import { DetailsScreenRouteProp } from 'navigation/types'

describe('DetailScreen', () => {
  it('should render', () => {
    jest.spyOn(navigation, 'useRoute').mockReturnValueOnce({
      params: { id: faker.string.uuid(), userId: faker.string.uuid() },
    } as DetailsScreenRouteProp)

    render(<DetailScreen />, { wrapper: createReactQueryWrapper })

    expect(screen.getByTestId('detail-container')).toBeTruthy()
  })
})
