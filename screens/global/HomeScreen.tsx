import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import ApplicationContext from '../../components/ApplicationContext'
import CoreText from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'
import { HOME_SECTION_ID } from '../../constants/constants'
import { ISectionInfo } from '../../contract/section'
import { getSectionInfo } from '../../http/global'

const HomeScreen: React.FC = props => {
  const [sections, setSections] = useState<ISectionInfo[]>([])
  const [showLoader, toggleLoader] = useState(false)

  const { dispatch } = useContext(ApplicationContext)

  const tw = useTailwind()

  useEffect(() => {
    toggleLoader(true)

    getSectionInfo(HOME_SECTION_ID)
      .then(resp => {
        setSections(resp)
      })
      .finally(() => {
        toggleLoader(false)
      })
  }, [])

  const renderLoader = () => {
    return (
      <CoreView style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size="large" color="blue" />
      </CoreView>
    )
  }

  const renderContent = () => {
    return (
      <CoreView>
        <CoreText>Home</CoreText>
      </CoreView>
    )
  }

  return (
    <CoreView
      style={{
        flex: 1,
      }}
    >
      <Header />
      {true ? renderLoader() : renderContent()}
    </CoreView>
  )
}

export default HomeScreen
