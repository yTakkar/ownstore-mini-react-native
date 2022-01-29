import React from 'react'
import { Text, View } from 'react-native'
import Snackbar from '../../components/header/Snackbar'

const ProfileScreen: React.FC = props => {
  return (
    <View>
      <Snackbar title="Profile Details" />
      <Text>Profile</Text>
    </View>
  )
}

export default ProfileScreen
