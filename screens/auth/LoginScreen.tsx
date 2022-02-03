import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import CoreButton, { CoreButtonSize, CoreButtonType } from '../../components/core/CoreButton'
import CoreText, { CoreTextType } from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Snackbar from '../../components/header/Snackbar'

const LoginScreen: React.FC = props => {
  const [email, setEmail] = useState('ema')
  const [password, setPassword] = useState('pas')

  const tw = useTailwind()

  return (
    <CoreView style={tw('flex-1')}>
      <Snackbar title="Login" />

      <CoreView style={tw('flex-1 p-5')}>
        <CoreView style={tw('py-3')}>
          <CoreText type={CoreTextType.MEDIUM} style={tw('mb-2 text-base')}>
            Email Address
          </CoreText>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email..."
            keyboardType="email-address"
            autoFocus
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            style={tw('border border-gallery bg-white p-3 rounded')}
          />
        </CoreView>

        <CoreView style={tw('py-3')}>
          <CoreText type={CoreTextType.MEDIUM} style={tw('mb-2 text-base')}>
            Password
          </CoreText>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password..."
            secureTextEntry
            autoCompleteType="password"
            autoCorrect={false}
            style={tw('border border-gallery bg-white p-3 rounded')}
          />
        </CoreView>

        <CoreView style={tw('py-4')}>
          <CoreButton label="Login to Continue" size={CoreButtonSize.LARGE} type={CoreButtonType.SOLID_PRIMARY} />
        </CoreView>
      </CoreView>
    </CoreView>
  )
}

export default LoginScreen
