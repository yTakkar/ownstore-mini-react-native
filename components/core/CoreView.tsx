import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

interface ICoreViewProps {
  style?: StyleProp<ViewStyle>
}

const CoreView: React.FC<ICoreViewProps> = props => {
  const { children, style = {} } = props

  const tw = useTailwind()

  const defaultStyles = tw('')

  return (
    <View
      style={{
        ...defaultStyles,
        ...(style as any),
      }}
    >
      {children}
    </View>
  )
}

export default CoreView
