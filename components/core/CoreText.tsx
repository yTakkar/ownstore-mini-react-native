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
}

const CoreText: React.FC<ICoreText> = props => {
  const { type = CoreTextType.REGULAR, children, style = {} } = props

  const tw = useTailwind()

  let fontStyle = tw('')

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
    >
      {children}
    </Text>
  )
}

export default CoreText
