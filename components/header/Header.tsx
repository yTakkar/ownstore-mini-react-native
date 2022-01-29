import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import appConfig from '../../config/appConfig'
import CoreImage from '../core/CoreImage'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  const tw = useTailwind()
  const navigation = useNavigation<any>()

  return (
    <View style={tw('bg-white px-4 py-3 flex flex-row items-center justify-between')}>
      <Pressable
        onPress={() => {
          navigation.navigate('Home', {})
        }}
      >
        <View style={tw('flex-row items-center')}>
          <CoreImage source={require('../../assets/images/icon.png')} style={tw('w-10 h-10')} />
          <Text style={tw('text-base ml-2 font-medium')}>{appConfig.name}</Text>
        </View>
      </Pressable>
      <View>
        <Ionicons name="search-outline" size={24} />
      </View>
    </View>
  )
}

export default Header
