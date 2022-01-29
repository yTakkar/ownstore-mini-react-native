import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          // 'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          // 'open-sans-regular': require('../assets/fonts/OpenSans/OpenSans-Regular.ttf'),
          // 'open-sans-medium': require('../assets/fonts/OpenSans/OpenSans-Medium.ttf'),
          // 'open-sans-semibold': require('../assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
          // 'open-sans-bold': require('../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
