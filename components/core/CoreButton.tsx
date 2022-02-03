import { GlyphMap, Icon, IconProps } from '@expo/vector-icons/build/createIconSet'
import { useNavigation } from '@react-navigation/core'
import React, { ReactNode } from 'react'
import { Pressable, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import CoreText from './CoreText'
import { useTailwind } from 'tailwind-rn/dist'
import { Ionicons } from '@expo/vector-icons'
import CoreView from './CoreView'

export enum CoreButtonType {
  SOLID_PRIMARY = 'SOLID_PRIMARY',
  SOLID_SECONDARY = 'SOLID_SECONDARY',
}

export enum CoreButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export interface ICoreButtonProps {
  label: ReactNode
  type: CoreButtonType
  size: CoreButtonSize
  iconName?: string
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  url?: string
  onPress?: () => void
}

const CoreButton: React.FC<ICoreButtonProps> = props => {
  const { label, type, size, iconName, disabled, url, onPress } = props

  const navigation = useNavigation<any>()
  const tw = useTailwind()

  const handlePress = () => {
    if (url) {
      if (url.includes('http')) {
        WebBrowser.openBrowserAsync(url, {})
      } else {
        navigation.navigate(url)
      }
    }
    if (onPress) {
      onPress()
    }
  }

  let textStyle = tw('flex justify-center items-center font-medium')

  if (type === CoreButtonType.SOLID_PRIMARY) {
    if (disabled) {
      textStyle = Object.assign(textStyle, tw('text-blackHalfLight'))
    } else {
      textStyle = Object.assign(textStyle, tw('text-white'))
    }
  }
  if (type === CoreButtonType.SOLID_SECONDARY) {
    if (disabled) {
      textStyle = Object.assign(textStyle, tw('text-blackHalfLight'))
    } else {
      textStyle = Object.assign(textStyle, tw('text-primary'))
    }
  }

  const renderChildren = () => {
    let iconSize = 18
    if (size === CoreButtonSize.MEDIUM) {
      iconSize = 22
    }
    if (size === CoreButtonSize.LARGE) {
      iconSize = 24
    }

    return (
      <CoreView style={tw('flex flex-row justify-center items-center')}>
        <CoreText style={textStyle}>{label}</CoreText>
        {iconName ? (
          <Ionicons
            name={iconName as any}
            size={iconSize}
            style={{
              ...textStyle,
              marginLeft: 2,
            }}
          />
        ) : null}
      </CoreView>
    )
  }

  const isDisabled = disabled

  let buttonStyle = tw('rounded-md')

  // types
  if (type === CoreButtonType.SOLID_PRIMARY) {
    if (disabled) {
      buttonStyle = Object.assign(buttonStyle, tw('bg-gray200 border-gray200'))
    } else {
      buttonStyle = Object.assign(buttonStyle, tw('bg-primary border border-primary'))
    }
  }
  if (type === CoreButtonType.SOLID_SECONDARY) {
    if (disabled) {
      buttonStyle = Object.assign(buttonStyle, tw('bg-white border border-gray600'))
    } else {
      buttonStyle = Object.assign(buttonStyle, tw('bg-white border-primary border'))
    }
  }

  // sizes
  if (size === CoreButtonSize.SMALL) {
    buttonStyle = Object.assign(buttonStyle, tw('py-1 px-2 text-sm'))
  }
  if (size === CoreButtonSize.MEDIUM) {
    buttonStyle = Object.assign(buttonStyle, tw('py-2 px-4 text-sm'))
  }
  if (size === CoreButtonSize.LARGE) {
    buttonStyle = Object.assign(buttonStyle, tw('py-3 px-6 text-base'))
  }

  return (
    <TouchableOpacity disabled={isDisabled} style={buttonStyle} onPress={handlePress}>
      {renderChildren()}
    </TouchableOpacity>
  )
}

export default CoreButton
