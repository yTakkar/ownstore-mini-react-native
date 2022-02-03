import React from 'react'
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native'

export enum ImageSourceType {
  ASSET = 'asset', // assets stored locally such as logo, icons, etc.. which can be pushed to CDN
  CLOUD = 'cloud', // stored in cloud
  NONE = 'none', // for absolute urls
}

interface ICoreImageProps {
  source: ImageSourcePropType
  style?: StyleProp<ImageStyle>
}

const CoreImage: React.FC<ICoreImageProps> = props => {
  const { source, style } = props

  return <Image source={source} loadingIndicatorSource={require('../../assets/images/lazyimage.png')} style={style} />
}

export default CoreImage
