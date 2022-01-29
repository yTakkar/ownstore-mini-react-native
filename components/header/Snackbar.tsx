import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

interface ISnackbarProps {
  title: string
}

const Snackbar: React.FC<ISnackbarProps> = props => {
  const { title } = props

  const tw = useTailwind()
  const navigation = useNavigation()

  return (
    <View style={tw('bg-white px-4 py-4 flex flex-row items-center justify-between')}>
      <View style={tw('flex-row items-center')}>
        <Pressable
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Ionicons name="arrow-back-outline" size={24} />
        </Pressable>
        <Text style={tw('ml-4 text-base')}>{title}</Text>
      </View>

      <View>
        <Ionicons name="search-outline" size={24} />
      </View>
    </View>
  )
}

export default Snackbar
