import React, { useContext, useEffect } from 'react'
import ApplicationContext from '../../components/ApplicationContext'
import CoreText from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'
import { HOME_SECTION_ID } from '../../constants/constants'
import { getSectionInfo } from '../../http/global'

const HomeScreen: React.FC = props => {
  const { dispatch } = useContext(ApplicationContext)

  useEffect(() => {
    getSectionInfo(HOME_SECTION_ID)
      .then(resp => {
        console.log(resp)
      })
      .catch(console.log)
  }, [])

  return (
    <CoreView>
      <Header />
      <CoreText>Home</CoreText>
    </CoreView>
  )
}

export default HomeScreen
