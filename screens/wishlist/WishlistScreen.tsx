import React from 'react'
import CoreText from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'

const WishlistScreen: React.FC = props => {
  return (
    <CoreView>
      <Header />
      <CoreText>Wishlist</CoreText>
    </CoreView>
  )
}

export default WishlistScreen