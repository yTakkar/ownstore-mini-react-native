import React from 'react'
import { Text } from './components/Themed'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }

  return <Text>Hello</Text>
}

export default App
