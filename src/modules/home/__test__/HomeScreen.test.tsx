import React from 'react'
import { render, screen } from '@testing-library/react-native'

import { HomeScreen } from '../HomeScreen'
import { createReactQueryWrapper } from 'utils/createReactQueryWrapper'

describe('HomeScreen', () => {
  it('should render', () => {
    render(<HomeScreen />, { wrapper: createReactQueryWrapper })

    expect(screen.getByTestId('home-container')).toBeTruthy()
  })
})
