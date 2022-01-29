import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import CoreText from '../core/CoreText'
import CoreView from '../core/CoreView'

interface ISnackbarProps {
  title: string
}

const Snackbar: React.FC<ISnackbarProps> = props => {
  const { title } = props

  const tw = useTailwind()
  const navigation = useNavigation()

  return (
    <CoreView style={tw('bg-white px-4 py-4 flex flex-row items-center justify-between')}>
      <CoreView style={tw('flex-row items-center')}>
        <Pressable
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Ionicons name="arrow-back-outline" size={24} />
        </Pressable>
        <CoreText style={tw('ml-4 text-base')}>{title}</CoreText>
      </CoreView>

      <CoreView>
        <Ionicons name="search-outline" size={24} />
      </CoreView>
    </CoreView>
  )
}

export default Snackbar
