import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { FlatList, Pressable } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import ApplicationContext from '../../components/ApplicationContext'
import CoreText, { CoreTextType } from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'

const MenuScreen: React.FC = props => {
  const {} = useContext(ApplicationContext)

  const navigation = useNavigation<any>()
  const tw = useTailwind()

  const LINKS = [
    {
      key: 'account',
      label: 'Account',
      subTitle: 'View your account details',
      screen: {
        stack: 'UserStack',
        screen: 'ProfileDetail',
      },
      iconName: 'person-outline',
      show: true,
    },
    {
      key: 'login',
      label: 'Login',
      subTitle: 'Login to sync your data',
      screen: {
        stack: 'UserStack',
        screen: 'ProfileDetail',
      },
      iconName: 'person-outline',
      show: true,
    },
    {
      key: 'logout',
      label: 'Logout',
      subTitle: '',
      screen: null,
      iconName: 'log-out-outline',
      show: true,
      onPress: () => {
        // logout()
        // toastSuccess('Logged out')
        // router.push(getLoginPageUrl())
      },
    },
  ]

  return (
    <CoreView>
      <FlatList
        data={LINKS}
        keyExtractor={info => info.key}
        renderItem={({ item }) => {
          if (!item.show) {
            return null
          }

          return (
            <Pressable
              onPress={() => {
                if (item.screen) {
                  navigation.navigate(item.screen.stack, {
                    screen: item.screen.screen,
                  })
                }
              }}
            >
              <CoreView style={tw('flex-row items-center w-full p-4 bg-white border-b border-gray400')}>
                <CoreView style={tw('mr-3')}>
                  <Ionicons name={item.iconName as any} size={24} />
                </CoreView>

                <CoreView style={tw('flex-row flex-grow justify-between items-center')}>
                  <CoreView>
                    <CoreText type={CoreTextType.MEDIUM} style={tw('text-gray900')}>
                      {item.label}
                    </CoreText>
                    {item.subTitle ? <CoreText style={tw('text-sm text-gray700')}>{item.subTitle}</CoreText> : null}
                  </CoreView>
                </CoreView>

                <CoreView>
                  <Ionicons name="chevron-forward-outline" size={20} style={tw('text-gray700')} />
                </CoreView>
              </CoreView>
            </Pressable>
          )
        }}
      />
    </CoreView>
  )
}

export default MenuScreen
