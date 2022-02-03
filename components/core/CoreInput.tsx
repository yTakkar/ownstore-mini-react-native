import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'

interface ICoreInputProps {
  value: string
  onChange: (val: string) => void
  placeholder: string
  keyboardType?: KeyboardTypeOptions
  autoFocus?: boolean
  
}

const CoreInput: React.FC<ICoreInputProps> = props => {
  return (
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
  )
}

export default CoreInput
