import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

export enum CoreTextType {
  REGULAR = 'REGULAR',
  MEDIUM = 'MEDIUM',
  BOLD = 'BOLD',
}

interface ICoreText {
  type?: CoreTextType
  style?: StyleProp<TextStyle>
  numberOfLines?: number
}

const CoreText: React.FC<ICoreText> = props => {
  const { type = CoreTextType.REGULAR, children, style = {}, numberOfLines } = props

  const tw = useTailwind()

  let fontStyle = tw('')

  // add a custom font here in case
  if (type === CoreTextType.MEDIUM) {
    fontStyle = tw('font-medium')
  }
  if (type === CoreTextType.BOLD) {
    fontStyle = tw('font-bold')
  }

  return (
    <Text
      style={{
        ...fontStyle,
        ...(style as any),
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  )
}

export default CoreText
