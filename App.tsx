import React from 'react'
import { Text } from './components/Themed'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import appConfig from './config/appConfig'
import { TailwindProvider, useTailwind } from 'tailwind-rn'
import utilities from './styles/tailwind.json'

const MyComponent = () => {
  const tailwind = useTailwind()
  return <Text style={tailwind('text-chateauGreen p-12')}>Hello world</Text>
}

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  )
}

export default App
