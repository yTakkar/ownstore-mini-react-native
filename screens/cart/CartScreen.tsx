import React from 'react'
import CoreText from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'

const CartScreen: React.FC = props => {
  return (
    <CoreView>
      <Header />
      <CoreText>Cart</CoreText>
    </CoreView>
  )
}

export default CartScreen
