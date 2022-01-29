import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/header/Header'

const HomeScreen: React.FC = props => {
  return (
    <View>
      <Header />
      <Text>Home</Text>
    </View>
  )
}

export default HomeScreen
