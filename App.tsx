import React from 'react'
import { Text } from './components/Themed'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { TailwindProvider, useTailwind } from 'tailwind-rn'
import utilities from './styles/tailwind.json'
import ApplicationContext from './components/ApplicationContext'
import useApplicationContext from './hooks/useApplicationContext'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import Router from './components/Router'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  const colorScheme = useColorScheme()
  const { applicationContext, dispatchApplicationContext } = useApplicationContext()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <NavigationContainer theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
      <ApplicationContext.Provider value={applicationContext}>
        <TailwindProvider utilities={utilities}>
          <Router />
        </TailwindProvider>
      </ApplicationContext.Provider>
    </NavigationContainer>
  )
}

export default App
