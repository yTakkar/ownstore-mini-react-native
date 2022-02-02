import React from 'react'
import CoreText from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Snackbar from '../../components/header/Snackbar'

const ProductDetailScreen: React.FC = props => {
  return (
    <CoreView>
      <Snackbar title="Product" />
      <CoreText>ProductDetail</CoreText>
    </CoreView>
  )
}

export default ProductDetailScreen
