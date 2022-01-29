import React from 'react'
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native'

interface ICoreImageProps {
  source: ImageSourcePropType
  style?: StyleProp<ImageStyle>
}

const CoreImage: React.FC<ICoreImageProps> = props => {
  const { source, style } = props

  return <Image source={source} loadingIndicatorSource={require('../../assets/images/lazyimage.png')} style={style} />
}

export default CoreImage
