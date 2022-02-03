import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import CoreButton, { CoreButtonSize, CoreButtonType } from '../../components/core/CoreButton'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'
import NoContent from '../../components/NoContent'

const CartScreen: React.FC = props => {
  const tw = useTailwind()

  const renderNoContent = () => {
    return (
      <CoreView style={tw('flex-1 items-center justify-center')}>
        <NoContent message="This page is currently in development. Coming soon..." />
        <CoreButton label="Visit Home" size={CoreButtonSize.MEDIUM} type={CoreButtonType.SOLID_PRIMARY} url="Home" />
      </CoreView>
    )
  }

  return (
    <CoreView style={tw('flex-1')}>
      <Header />
      {renderNoContent()}
    </CoreView>
  )
}

export default CartScreen
