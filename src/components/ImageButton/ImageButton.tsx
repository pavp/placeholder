import React from 'react'
import { ColorValue, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'

interface ImageButton {
  handlePress: () => void
  image: ImageSourcePropType
  color?: ColorValue | undefined
}

export const ImageButton = ({ handlePress, image, color }: ImageButton) => {
  return (
    <TouchableOpacity onPress={handlePress} testID="image-button-onpress">
      <Image source={image} style={{ height: 20, width: 20, tintColor: color }} resizeMode={'cover'} />
    </TouchableOpacity>
  )
}
