import React from 'react'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { TailwindProvider, useTailwind } from 'tailwind-rn'
import tailwindUtilities from './styles/tailwind.json'
import extraTailwindUtilities from './styles/extra-styles.json'
import ApplicationContext from './components/ApplicationContext'
import useApplicationContext from './hooks/useApplicationContext'
import { NavigationContainer } from '@react-navigation/native'
import Router from './components/Router'
import { SafeAreaView } from 'react-native-safe-area-context'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  const colorScheme = useColorScheme()
  const { applicationContext } = useApplicationContext()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <NavigationContainer>
      <ApplicationContext.Provider value={applicationContext}>
        <TailwindProvider
          utilities={{
            ...tailwindUtilities,
            ...extraTailwindUtilities,
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <Router />
          </SafeAreaView>
        </TailwindProvider>
      </ApplicationContext.Provider>
    </NavigationContainer>
  )
}

export default App
