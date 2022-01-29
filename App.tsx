import React from 'react'
import { Text } from './components/Themed'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { TailwindProvider, useTailwind } from 'tailwind-rn'
import utilities from './styles/tailwind.json'
import ApplicationContext from './components/ApplicationContext'
import useApplicationContext from './hooks/useApplicationContext'

const MyComponent = () => {
  const tailwind = useTailwind()
  return <Text style={tailwind('text-chateauGreen p-12')}>Hello world</Text>
}

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  const colorScheme = useColorScheme()
  const { applicationContext, dispatchApplicationContext } = useApplicationContext()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <ApplicationContext.Provider value={applicationContext}>
      <TailwindProvider utilities={utilities}>
        <MyComponent />
      </TailwindProvider>
    </ApplicationContext.Provider>
  )
}

export default App
