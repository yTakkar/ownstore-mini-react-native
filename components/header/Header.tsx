import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { Pressable, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import appConfig from '../../config/appConfig'
import ApplicationContext from '../ApplicationContext'
import CoreImage from '../core/CoreImage'
import CoreText, { CoreTextType } from '../core/CoreText'
import CoreView from '../core/CoreView'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  const tw = useTailwind()
  const navigation = useNavigation<any>()

  const applicationContext = useContext(ApplicationContext)

  return (
    <CoreView style={tw('bg-white px-4 py-3 flex flex-row items-center justify-between')}>
      <Pressable
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <CoreView style={tw('flex-row items-center')}>
          <CoreImage source={require('../../assets/images/icon.png')} style={tw('w-10 h-10')} />
          <CoreText style={tw('text-base ml-2 font-medium')} type={CoreTextType.MEDIUM}>
            {appConfig.global.app.name}
          </CoreText>
        </CoreView>
      </Pressable>
      <CoreView>
        <Ionicons name="search-outline" size={24} />
      </CoreView>
    </CoreView>
  )
}

export default Header
